import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper('.purple', {
    loop: true,
    spaceBetween: 13,
    freeMode: true,
    slidesPerView: 'auto',
    speed: 5500,
    effect: 'slide',
    autoplay: {
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
    },
});

const swiper2 = new Swiper('.white', {
    loop: true,
    spaceBetween: 13,
    freeMode: true,
    slidesPerView: 'auto',
    speed: 5500,
    effect: 'slide',
    initialSlide: 15,
    autoplay: {
        delay: 0,
        pauseOnMouseEnter: false,
        disableOnInteraction: false,
        reverseDirection: true,
    },
});