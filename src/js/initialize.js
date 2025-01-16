swiper = new Swiper('#pricing-section-slider', {
    // Optional parameters
    direction: 'horizontal',

    breakpoints: {
        1920: {
            initialSlide: 1,
            centeredSlides: false,
            slidesPerView: 3,
            spaceBetween: 32,
            simulateTouch: false,
            allowTouchMove: false,
        },

        1440: {
            slidesPerView: 3,
            initialSlide: 1,
            spaceBetween: 32,
            centeredSlides: false,
            simulateTouch: false,
            allowTouchMove: false,
        },

        1152: {
            slidesPerView: 3,
            initialSlide: 1,
            spaceBetween: 32,
            centeredSlides: false,
            simulateTouch: false,
            allowTouchMove: false,

        },


        1080: {
            slidesPerView: 1,
            initialSlide: 1,
            spaceBetween: 32,
            centeredSlides: true,
            simulateTouch: true,
            allowTouchMove: true,
        },

        769: {
            slidesPerView: 1,
            initialSlide: 1,
            spaceBetween: 32,
            centeredSlides: true,
            simulateTouch: true,
            allowTouchMove: true,
        },

        768: {
            slidesPerView: 1.6, 
            initialSlide: 1,
            spaceBetween: 32,
            centeredSlides: true,
            simulateTouch: true,
            allowTouchMove: true,
        },


        320: {
            slidesPerView: 1,
            initialSlide: 1,
            spaceBetween: 32,
            centeredSlides: true,
            simulateTouch: true,
            allowTouchMove: true,

            pagination: {
                el: '.swiper-pagination2'
            },
        }        
    }
});
