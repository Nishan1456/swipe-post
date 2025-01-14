const swiper = document.getElementById("swiper");
const slides = document.querySelectorAll(".slide");
let currentIndex = 0;
let startY = 0;
let isSwiping = false;

// Function to update the slide focus
function updateSlide() {
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });

    // Calculate the offset to position the current slide at the center
    const offset = -currentIndex * (window.innerHeight*0.3 ); // 40px = margin
    swiper.style.transform = `translateY(${offset}px)`;
}

// Handle mouse down event
document.addEventListener("mousedown", (e) => {
    startY = e.clientY; // Record the starting Y position of the mouse
    isSwiping = true;
});

// Handle mouse up event
document.addEventListener("mouseup", (e) => {
    if (!isSwiping) return;
    const endY = e.clientY; // Record the ending Y position of the mouse
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

// Optional: Keyboard navigation
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlide();
    } else if (e.key === "ArrowUp" && currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
});

// Initialize
updateSlide();
