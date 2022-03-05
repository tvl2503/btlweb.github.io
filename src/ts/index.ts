import { getHeader } from "../layout/header";
import Swiper, {Navigation, Pagination} from 'swiper';
getHeader();

const handleSwiper = (element: any) => {
    const slides: any = element.slides;
    const slidesValue = [...element.slides as any];
    const index = element.realIndex;
    slides.removeClass('content-slide-active');
    const findSlide = slidesValue.find((item: any) => item.classList.contains('swiper-slide-active'))
    findSlide.classList.add('content-slide-active');
}

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
