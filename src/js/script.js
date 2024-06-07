const swiperNewArrivals = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    },
});

const swiperBrands = new Swiper(".swiper-brands", {
    slidesPerView: "auto",
    spaceBetween: 24,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})