export function initSlider() {
    if (window.location.pathname !== '/uni-list.html' && !window.location.pathname.endsWith('uni-list.html')) {
        console.log('Slider initialization skipped: not on uni-list.html');
        return;
    }

    const track = document.querySelector('.slider__track');
    const cards = document.querySelectorAll('.university-card-m');
    const prevArrow = document.querySelector('.slider__arrow--left');
    const nextArrow = document.querySelector('.slider__arrow--right');
    const indicators = document.querySelectorAll('.slider__indicator');
    let currentIndex = 0;
    let isAnimating = false;

    if (!track || !cards.length || !indicators.length) {
        console.error('Required slider elements are missing:', {
            track: track,
            cards: cards.length,
            indicators: indicators.length
        });
        return;
    }

    // Клонуємо перший і останній слайди для безкінечного ефекту
    const firstClone = cards[0].cloneNode(true);
    const lastClone = cards[cards.length - 1].cloneNode(true);

    // Додаємо клони на початок і кінець
    track.appendChild(firstClone);
    track.insertBefore(lastClone, cards[0]);

    // Оновлюємо посилання на всі слайди (включаючи клони)
    const allSlides = document.querySelectorAll('.university-card-m');
    const totalSlides = allSlides.length;

    // Встановлюємо початкову позицію (перший клонований слайд - останній оригінальний)
    track.style.transform = `translateX(-${100}%)`;

    // Функція для оновлення індикаторів
    function updateIndicators() {
        // Визначаємо правильний індекс для індикаторів (0 або 1)
        let indicatorIndex;

        // Корегуємо індекс для крайніх випадків
        if (currentIndex >= cards.length) {
            indicatorIndex = 0; // Перший індикатор для "наступного" після останнього
        } else if (currentIndex < 0) {
            indicatorIndex = 1; // Другий індикатор для "попереднього" перед першим
        } else {
            indicatorIndex = currentIndex % 2;
        }

        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === indicatorIndex);
        });
    }

    function updateSlider() {
        if (isAnimating) return;

        isAnimating = true;
        track.style.transition = 'transform 0.4s ease-in-out';
        track.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

        // Оновлюємо індикатори відразу, без затримки
        updateIndicators();

        setTimeout(() => {
            isAnimating = false;

            // Якщо досягли клонованого слайда, миттєво переходимо до відповідного оригінального
            if (currentIndex >= cards.length) {
                track.style.transition = 'none';
                currentIndex = 0;
                track.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
            } else if (currentIndex < 0) {
                track.style.transition = 'none';
                currentIndex = cards.length - 1;
                track.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;
            }
        }, 400);
    }

    function goToNextSlide() {
        if (isAnimating) return;
        currentIndex++;
        updateSlider();
    }

    function goToPrevSlide() {
        if (isAnimating) return;
        currentIndex--;
        updateSlider();
    }

    if (prevArrow) {
        prevArrow.addEventListener('click', goToPrevSlide);
    }

    if (nextArrow) {
        nextArrow.addEventListener('click', goToNextSlide);
    }

    // Додаємо обробку свайпів для мобільних пристроїв
    let startX = 0;
    let endX = 0;

    if (track) {
        track.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
        });

        track.addEventListener('touchend', (e) => {
            endX = e.changedTouches[0].clientX;
            handleSwipe();
        });
    }

    function handleSwipe() {
        const swipeThreshold = 50;
        const diffX = startX - endX;

        if (Math.abs(diffX) > swipeThreshold) {
            if (diffX > 0) {
                goToNextSlide();
            } else {
                goToPrevSlide();
            }
        }
    }

    // Ініціалізація початкового стану
    updateIndicators();
}