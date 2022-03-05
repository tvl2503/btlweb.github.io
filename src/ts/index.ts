import { getHeader } from "../layout/header";
import Swiper, {Navigation, Pagination} from 'swiper';
getHeader();

const swiper = new Swiper('.swiper--container', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    modules: [Pagination],
    loop: true,
    slidesPerView: 1,
    autoplay: {
        delay: 5000
    },
    speed: 750,
})

const swiperCollection = new Swiper('.swiper--collection', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    modules: [Pagination, Navigation],
    navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next'
    },
    autoplay: {
        delay: 5000
    },
    loop: true,
    breakpoints: {
        // 200: {
        //     slidesPerView: 1,
        //     spaceBetween: 10
        // },
        // 576: {
        //     slidesPerView: 2,
        //     spaceBetween: 15
        // },
        200: {
            slidesPerView: 'auto',
            spaceBetween: 20
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 25
        },
        991: {
            slidesPerView: 4,
            spaceBetween: 30
        },
    },
    speed: 500
})