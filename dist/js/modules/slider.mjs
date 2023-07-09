const slider = function() {
    const slides = document.querySelectorAll('.slider__slide');
    function switchSlide() {
        let index = 0;
        setInterval(() => {
            for (const item of slides) {
                item.classList.remove('slider__slide_visible');
            }
            index++;
            slides[index].classList.add('slider__slide_visible');
            if (index === (slides.length - 1)) {
                index = -1;
            }
        }, 5000)
    }
    switchSlide();
}

export default slider;