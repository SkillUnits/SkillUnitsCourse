document.addEventListener('DOMContentLoaded', () => {
    const qaPairs = document.querySelectorAll('.about-item');
    const aboutCards = document.querySelectorAll('.about-card');
    let activeItem = null;

    if (qaPairs.length > 0 && aboutCards.length > 0) {
        activeItem = qaPairs[0]; 
        activeItem.classList.add('active');
        activeItem.querySelector('.answer').classList.add('visible');
        aboutCards[0].classList.add('active-card'); 
    }

    qaPairs.forEach((pair, index) => {
        const question = pair.querySelector('.question');
        const answer = pair.querySelector('.answer');

        question.addEventListener('click', () => {
            if (activeItem && activeItem !== pair) {
                activeItem.classList.remove('active');
                activeItem.querySelector('.answer').classList.remove('visible');
                activeItem.querySelector('.answer').classList.add('hiding');
            }

            if (pair.classList.contains('active')) {
                pair.classList.remove('active');
                answer.classList.remove('visible');
                answer.classList.add('hiding');
                activeItem = null;
            } else {
                pair.classList.add('active');
                answer.classList.remove('hiding');
                answer.classList.add('visible');
                activeItem = pair;
            }

            // Анімація зміни картки
            aboutCards.forEach((card) => {
                card.classList.remove('active-card');
                card.style.opacity = "0"; // Починаємо з нуля, щоб було плавне зникнення
            });

            if (aboutCards[index]) {
                setTimeout(() => {
                    aboutCards[index].classList.add('active-card');
                    aboutCards[index].style.opacity = "1"; // Плавне відображення
                }, 100);
            }
        });
    });
});
