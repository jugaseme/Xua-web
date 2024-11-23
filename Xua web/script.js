document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById("toggle-button");
    const sidebar = document.getElementById("sidebar");
    
    if (toggleButton && sidebar) {
        toggleButton.addEventListener("click", function() {
            sidebar.classList.toggle("hidden");
        });
    } else {
        console.error("No se encontró el botón o la sidebar");
    }
});

const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.button_close');

// Función para cerrar la sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('hidden'); // Asumiendo que 'hidden' es la clase que muestra la sidebar
});
// JavaScript para manejar el dropdown
document.addEventListener('DOMContentLoaded', () => {
    const dropdownTitle = document.querySelector('.dropdown-title');
    const dropdown = document.querySelector('.dropdown');

    dropdownTitle.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.carousel-wrapper');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    
    let currentIndex = 0;
    const totalSlides = slides.length;
    let isTransitioning = false;
    
    // Variables for drag functionality
    let isDragging = false;
    let startPos = 0;
    let currentTranslate = 0;
    let prevTranslate = 0;
    let animationID = 0;
    let currentPosition = 0;
    
    function updateCarousel(instant = false) {
        if (instant) {
            wrapper.style.transition = 'none';
        } else {
            wrapper.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        }
        
        wrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        slides.forEach((slide, index) => {
            slide.classList.toggle('active', index === currentIndex);
        });
        
        if (instant) {
            wrapper.offsetHeight;
            wrapper.style.transition = '';
        }
    }
    
    function goToSlide(index, instant = false) {
        if (isTransitioning) return;
        isTransitioning = true;
        currentIndex = index;
        updateCarousel(instant);
        
        setTimeout(() => {
            isTransitioning = false;
        }, instant ? 0 : 600);
    }
    
    function nextSlide() {
        goToSlide((currentIndex + 1) % totalSlides);
    }
    
    function prevSlide() {
        goToSlide((currentIndex - 1 + totalSlides) % totalSlides);
    }
    
    // Touch and Mouse events
    function touchStart(event) {
        if (isTransitioning) return;
        
        const point = event.touches ? event.touches[0] : event;
        isDragging = true;
        startPos = point.clientX;
        currentPosition = startPos;
        
        cancelAnimationFrame(animationID);
        wrapper.style.transition = 'none';
        
        document.addEventListener('mousemove', touchMove);
        document.addEventListener('mouseup', touchEnd);
        document.addEventListener('touchmove', touchMove);
        document.addEventListener('touchend', touchEnd);
    }
    
    function touchMove(event) {
        if (!isDragging) return;
        
        const point = event.touches ? event.touches[0] : event;
        const currentX = point.clientX;
        const diff = currentX - startPos;
        const walk = diff;
        
        currentPosition = currentX;
        currentTranslate = prevTranslate + walk;
        
        const maxTranslate = -(totalSlides - 1) * wrapper.offsetWidth;
        currentTranslate = Math.max(Math.min(currentTranslate, 0), maxTranslate);
        
        wrapper.style.transform = `translateX(${currentTranslate}px)`;
    }
    
    function touchEnd() {
        isDragging = false;
        const movedBy = currentPosition - startPos;
        
        if (Math.abs(movedBy) > wrapper.offsetWidth / 3) {
            if (movedBy < 0) {
                nextSlide();
            } else {
                prevSlide();
            }
        } else {
            goToSlide(currentIndex);
        }
        
        document.removeEventListener('mousemove', touchMove);
        document.removeEventListener('mouseup', touchEnd);
        document.removeEventListener('touchmove', touchMove);
        document.removeEventListener('touchend', touchEnd);
    }
    
    // Event Listeners
    wrapper.addEventListener('mousedown', touchStart);
    wrapper.addEventListener('touchstart', touchStart);
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });
    
    // Prevent context menu on long press
    wrapper.addEventListener('contextmenu', e => e.preventDefault());
    
    // Initialize
    updateCarousel(true);
});