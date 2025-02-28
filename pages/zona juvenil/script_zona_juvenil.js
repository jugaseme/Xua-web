function openSlide() {
    document.getElementById("slideMenu").style.left = "0"; 
}

function closeSlide() {
    document.getElementById("slideMenu").style.left = "-250px"; 
}

const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
let currentIndex = 0;

function updateSlider() {
    // Centrar la diapositiva activa
    const offset = (slider.clientWidth / 2) - (slides[currentIndex].offsetWidth / 2);
    const translateX = -(currentIndex * (slides[currentIndex].offsetWidth + 20)) + offset;
    slider.style.transform = `translateX(${translateX}px)`;

    // Agregar clase "active" solo a la diapositiva actual
    slides.forEach((slide, index) => {
        if (index === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Botones de navegación
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    updateSlider();
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

updateSlider(); // Iniciar con la diapositiva centrada


