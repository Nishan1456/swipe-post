const swiper = document.getElementById("swiper");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let startY = 0;
let isSwiping = false;

function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    const offset = -currentIndex * (window.innerHeight*0.3 ); 
    swiper.style.transform = `translateY(${offset}px)`;
}


document.addEventListener("mousedown", (e) => {
    startY = e.clientY; 
    isSwiping = true;
});


document.addEventListener("mouseup", (e) => {
    if (!isSwiping) return;
    const endY = e.clientY;
    const diffY = startY - endY;

    // Swipe up
    if (diffY > 50 && currentIndex < slides.length - 1) {
        currentIndex++;
    }
    // Swipe down
    else if (diffY < -50 && currentIndex > 0) {
        currentIndex--;
    }

    updateSlide();
    isSwiping = false;
});


document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlide();
    } else if (e.key === "ArrowUp" && currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});


updateSlide();
