/**
 * Головна функція ініціалізації пошуку програм
 */
export function initProgramSearch() {
    initSearchRedirect();

    // Додаємо клас до body негайно, якщо ми на search.html
    if (window.location.pathname.includes('search.html')) {
        document.body.classList.add('search-page');

        // Якщо розмір вікна мобільний — додаємо ще один клас (точніше керування)
        const MOBILE_BREAKPOINT = 767;
        if (window.innerWidth <= MOBILE_BREAKPOINT) {
            document.body.classList.add('search-page-mobile');

            // 1) Інлайн-фікс: змушує контейнер показуватись навіть якщо CSS ховає його
            // (інлайн стиль має високий пріоритет над звичайними правилами)
            const programListEl = document.querySelector('.program-list');
            if (programListEl) {
                programListEl.style.display = 'flex';
            }

            // 2) Резерв: вмонтуємо CSS правило з !important у head (переб'є медіа-правила)
            const styleId = 'search-page-mobile-override';
            if (!document.getElementById(styleId)) {
                const style = document.createElement('style');
                style.id = styleId;
                style.textContent = `
                    /* Автоматично показувати програм-лист лише на сторінці пошуку у мобілці */
                    body.search-page.search-page-mobile .program-list {
                        display: flex !important;
                    }
                    /* Якщо програмки мають додаткові правила, переконаємось що картки теж відображаються */
                    body.search-page.search-page-mobile .program-list .program-card {
                        display: flex !important;
                    }
                `;
                document.head.appendChild(style);
            }
        }

        // Запускаємо обробку сторінки пошуку
        processSearchPage();
    }
}

/**
 * Ініціалізація перенаправлення з пошукових полів
 */
function initSearchRedirect() {
    const searchInputs = document.querySelectorAll('.search-box__input, .footer__search-box .search-box__input');

    searchInputs.forEach(input => {
        input.addEventListener('keypress', function (event) {
            if (event.key === 'Enter') {
                const searchQuery = this.value.trim();
                if (searchQuery) {
                    // Перенаправляємо на search.html з параметром пошуку
                    window.location.href = `search.html?q=${encodeURIComponent(searchQuery)}`;
                }
            }
        });
    });
}

/**
 * Обробка сторінки пошуку
 */
function processSearchPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q');

    if (!searchQuery) {
        displayNoResults();
        return;
    }

    loadAndFilterPrograms(searchQuery);
}

/**
 * Завантаження та фільтрація програм
 */
function loadAndFilterPrograms(searchQuery) {
    fetch('program-list.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Не вдалося завантажити список програм');
            }
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const programCards = doc.querySelectorAll('.program-card');

            const filteredPrograms = filterPrograms(programCards, searchQuery);

            // Додатковий фікс: встановлюємо інлайн-стилі для клонованих карток
            filteredPrograms.forEach(card => {
                // Клоновані елементи — гарантовано показуємо як flex
                card.style.display = 'flex';
            });

            displayResults(filteredPrograms, searchQuery);
        })
        .catch(error => {
            console.error('Помилка завантаження програм:', error);
            displayErrorMessage();
        });
}

/**
 * Фільтрація програм за ключовим словом
 */
function filterPrograms(programCards, searchQuery) {
    const filtered = [];
    const query = searchQuery.toLowerCase().trim();

    programCards.forEach(card => {
        const cardText = card.textContent.toLowerCase();
        const hasMatch = cardText.includes(query);

        const dataAttributes = card.querySelectorAll('[data-ua], [data-en]');
        let dataMatch = false;

        dataAttributes.forEach(element => {
            const uaText = element.getAttribute('data-ua')?.toLowerCase() || '';
            const enText = element.getAttribute('data-en')?.toLowerCase() || '';

            if (uaText.includes(query) || enText.includes(query)) {
                dataMatch = true;
            }
        });

        if (hasMatch || dataMatch) {
            filtered.push(card.cloneNode(true));
        }
    });

    return filtered;
}

/**
 * Відображення результатів пошуку
 */
function displayResults(programs, searchQuery) {
    const mainElement = document.querySelector('main');

    if (programs.length === 0) {
        displayNoResults(searchQuery);
        return;
    }

    const resultsContainer = document.createElement('section');
    resultsContainer.className = 'search-results';
    resultsContainer.innerHTML = `
        <div class="container">
            <h1 class="search-results__title" 
                data-en="Search results for: \\"${searchQuery}\\""
                data-ua="Результати пошуку для: \\"${searchQuery}\\"">
                Search results for: "${searchQuery}"
            </h1>
            <p class="search-results__count" 
               data-en="Found ${programs.length} programs"
               data-ua="Знайдено ${programs.length} програм">
               Found ${programs.length} programs
            </p>
            <div class="program-list"></div>
        </div>
    `;

    const programList = resultsContainer.querySelector('.program-list');

    // Якщо ми на мобільному і на сторінці пошуку — примусово показуємо контейнер
    if (document.body.classList.contains('search-page-mobile')) {
        programList.style.display = 'flex';
    }

    programs.forEach(program => {
        const highlightedProgram = highlightSearchTerm(program, searchQuery);

        // Безпечний інлайн-стиль для карток — щоб відображалися незалежно від зовнішніх правил
        highlightedProgram.style.display = 'flex';
        programList.appendChild(highlightedProgram);
    });

    mainElement.appendChild(resultsContainer);

    if (window.updateLanguage) {
        window.updateLanguage();
    }
}

/**
 * Виділення ключового слова жовтим кольором
 */
function highlightSearchTerm(programElement, searchQuery) {
    const query = searchQuery.toLowerCase();
    const elements = programElement.querySelectorAll('h2, p, span');

    elements.forEach(element => {
        if (element.textContent.toLowerCase().includes(query)) {
            highlightTextInElement(element, query);
        }

        if (element.hasAttribute('data-ua')) {
            const uaText = element.getAttribute('data-ua');
            if (uaText.toLowerCase().includes(query)) {
                element.setAttribute('data-ua', highlightText(uaText, query));
            }
        }

        if (element.hasAttribute('data-en')) {
            const enText = element.getAttribute('data-en');
            if (enText.toLowerCase().includes(query)) {
                element.setAttribute('data-en', highlightText(enText, query));
            }
        }
    });

    return programElement;
}

/**
 * Виділення тексту в елементі
 */
function highlightTextInElement(element, query) {
    const text = element.textContent;
    const highlightedHtml = highlightText(text, query);

    const dataAttributes = {};
    for (let attr of element.attributes) {
        if (attr.name.startsWith('data-')) {
            dataAttributes[attr.name] = attr.value;
        }
    }

    element.innerHTML = highlightedHtml;
    Object.keys(dataAttributes).forEach(attr => {
        element.setAttribute(attr, dataAttributes[attr]);
    });
}

/**
 * Функція для виділення тексту
 */
function highlightText(text, query) {
    const regex = new RegExp(`(${escapeRegex(query)})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

/**
 * Екранування спеціальних символів для regex
 */
function escapeRegex(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Відображення повідомлення про відсутність результатів
 */
function displayNoResults(searchQuery = '') {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = `
        <section class="search-results">
            <div class="container">
                <h1 class="search-results__title" 
                    data-en="No results found"
                    data-ua="Результатів не знайдено">
                    No results found
                </h1>
                ${searchQuery ? `
                <p class="search-results__message"
                   data-en="No programs found for: \\"${searchQuery}\\""
                   data-ua="Не знайдено програм для: \\"${searchQuery}\\"">
                   No programs found for: "${searchQuery}"
                </p>
                ` : ''}
                <a href="program-list.html" class="btn search-results__back-btn"
                   data-en="Back to all programs"
                   data-ua="Повернутися до всіх програм">
                   Back to all programs
                </a>
            </div>
        </section>
    `;
}

/**
 * Відображення повідомлення про помилку
 */
function displayErrorMessage() {
    const mainElement = document.querySelector('main');
    mainElement.innerHTML = `
        <section class="search-results">
            <div class="container">
                <h1 class="search-results__title" 
                    data-en="Error loading programs"
                    data-ua="Помилка завантаження програм">
                    Error loading programs
                </h1>
                <p class="search-results__message"
                   data-en="Please try again later"
                   data-ua="Будь ласка, спробуйте пізніше">
                   Please try again later
                </p>
            </div>
        </section>
    `;
}
