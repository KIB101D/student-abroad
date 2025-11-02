/**
 * Ініціалізує скорочення текстів у програмних картках
 * — обрізає <p> всередині .program-info-m до 112 символів.
 */
export function initTrimText(limit = 112) {
    const paragraphs = document.querySelectorAll('.program-info-m p');

    paragraphs.forEach(p => {
        const originalText = p.textContent.trim();

        // Обрізати основний текст
        if (originalText.length > limit) {
            const trimmedText = originalText.slice(0, limit).trim() + '…';
            p.textContent = trimmedText;
        }

        // Обрізати тексти в data-en і data-ua, якщо вони є
        ['data-en', 'data-ua'].forEach(attr => {
            const value = p.getAttribute(attr);
            if (value && value.length > limit) {
                const trimmed = value.slice(0, limit).trim() + '…';
                p.setAttribute(attr, trimmed);
            }
        });
    });
}

// Автоматично запустити після завантаження сторінки
document.addEventListener('DOMContentLoaded', () => {
    initSlider(284);
});
