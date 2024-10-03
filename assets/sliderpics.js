//image slider
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let interval = null;


document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {

    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }

}
function showSlide(index) {

    if (index >= slideIndex.legnth) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.legnth - 1;
    }




    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide")

}
function prevSlide() {
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
