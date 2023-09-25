import { Navigation, Pagination, A11y } from "swiper/modules";

export const breakpoints = {
  100: {
    slidesPerView: 1,
  },
  1024: {
    slidesPerView: 3.5,
  },
};

export const options = {
  activeindex: 2,
  breakpoints: breakpoints,
  modules: [Navigation, A11y],
  spaceBetween: 36,
  centerInsufficientSlides: true,
  centeredSlides: false,
};