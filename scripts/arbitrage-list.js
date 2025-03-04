document.addEventListener('DOMContentLoaded', () => {
    const qaPairs = document.querySelectorAll('.faqs-item');

    qaPairs.forEach((pair) => {
        pair.addEventListener('click', () => {
            // Закриваємо всі відкриті відповіді перед відкриттям нової
            qaPairs.forEach((otherPair) => {
                if (otherPair !== pair) {
                    otherPair.querySelector('.answer').classList.remove('visible');
                    otherPair.querySelector('.chevron').classList.remove('open');
                }
            });

            const answer = pair.querySelector('.answer');
            const chevron = pair.querySelector('.chevron');

            // Перемикаємо клас для натиснутого блоку
            const isVisible = answer.classList.contains('visible');
            answer.classList.toggle('visible', !isVisible);
            chevron.classList.toggle('open', !isVisible);
        });
    });
});
