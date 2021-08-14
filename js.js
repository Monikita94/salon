document.addEventListener('DOMContentLoaded', () => {
    const elementosCarousel = document.querySelectorAll('.carousel');
    M.Carousel.init(elementosCarousel, {
        duration: 350,
        dist: -50,
        shift: 5,
        padding: 10,
        numVisible: 7,
        indicators: false,
        noWrap: false,

    });
});