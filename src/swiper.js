import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import {createElement} from "react";

// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/swiper.min.css'
// import 'swiper/modules/pagination/pagination.min.css'


document.addEventListener("DOMContentLoaded", function(){
    let windowWidth = document.documentElement.clientWidth;
    const brands = document.querySelector('.brands');
    const brandsCard = brands.querySelector('.brands__card');
    const readMore = brands.querySelector('.read-more');

    async function initSwiper() {
        let Swiper = document.createElement('div');
        let swiperPagination = document.createElement('div');
        swiperPagination.classList.add('swiper-pagination');
        Swiper.classList.add('swiper');
        brands.insertAdjacentElement('beforeend', Swiper);
        readMore.remove();
        const copyBrandsCard = brandsCard.cloneNode(true);
        copyBrandsCard.classList.add('swiper-wrapper');
        Swiper.insertAdjacentElement('beforeend', swiperPagination);
        brandsCard.remove();
        let cards = copyBrandsCard.querySelectorAll('.card');
        cards.forEach(elem => {
            elem.classList.add('swiper-slide');
        });


        await Swiper.append(copyBrandsCard);
        return;
    }
    if(windowWidth < 768) {
        initSwiper();
        // init Swiper:
        const swiper = new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            // Optional parameters
            // direction: 'vertical',
            // loop: true,
            slidesPerView: 1.2,
            spaceBetween: 16,
            // slidesPerGroup: 1,
            initialSlide: 0,  // first slide display

            // If we need pagination
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true,
            },

            // Navigation arrows
            // navigation: {
            //     nextEl: '.swiper-button-next',
            //     prevEl: '.swiper-button-prev',
            // },

            // And if we need scrollbar
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            // },
        });
    }
});

