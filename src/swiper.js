import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';



// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'

// init Swiper:
export const swiper = new Swiper('.swiper', {
    modules: [Navigation, Pagination],
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
