import { getHeader } from "../layout/header";
import Swiper, {Navigation, Pagination} from 'swiper';
getHeader();

new Swiper('.swiper--container', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})

