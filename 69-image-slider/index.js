const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

// initializeSilder();
document.addEventListener("DOMContentLoaded", initializeSilder);

function initializeSilder() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("display-slide");
    intervalId = setInterval(nextSlide, 5000);
  }
}

function showSilde(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("display-slide");
  });
  slides[slideIndex].classList.add("display-slide");
}

function prevSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSilde(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSilde(slideIndex);
}
