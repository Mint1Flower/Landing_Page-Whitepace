const swiper2 = new Swiper('#testimonial-slider', {
    direction: 'horizontal',
    pagination: {
        el: '.swiper-pagination'
    },
    breakpoints: {
        // when width window is >= 1100px
        1100: {
            initialSlide: 1,
            slidesPerView: 3,
            spaceBetween: 32,
            centeredSlides: false,
        },

        768: {
            initialSlide: 1,
            centeredSlides: true,
            slidesPerView: 1.47,
            spaceBetween: 32,
        },

        655: {
            initialSlide: 1,
            centeredSlides: true,
            slidesPerView: 1.47,
            spaceBetween: 32,
        },

        320: {
            initialSlide: 0,
            slidesPerView: 1,
        }
    }
});
