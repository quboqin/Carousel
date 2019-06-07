var carousel = document.getElementById('carousel');
var leftCarouselControl = document.getElementById('left');
var rightCarouselControl = document.getElementById('right');
var slides = carousel.querySelectorAll('.slide');
var totalSlides = 4;
var currentSlide = 0;

leftCarouselControl.addEventListener('click', backward)
rightCarouselControl.addEventListener('click', forward)

function backward() {
    if (currentSlide <= 0) {
        currentSlide = totalSlides - 1
    } else {
        currentSlide--
    }
    setSlide(currentSlide)
}

function forward() {
    if (currentSlide == totalSlides - 1) {
        currentSlide = 0
    } else {
        currentSlide++
    }
    
    setSlide(currentSlide)
}

function carouselHide(num) {
    slides[num].setAttribute('data-state', '');
    slides[num].style.opacity = 0;
}

function carouselShow(num) {
    slides[num].setAttribute('data-state', 'active');
    slides[num].style.opacity = 1;
}

function setSlide(slide) {
    for (var i = 0; i < slides.length; i++) { 
        carouselHide(i);
    }
    slides[slide].setAttribute('data-state', 'active');
    carouselShow(slide);
}

