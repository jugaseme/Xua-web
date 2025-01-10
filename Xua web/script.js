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
class Carousel {
  constructor() {
      this.currentSlide = 0;
      this.slides = document.querySelectorAll('.slide');
      this.slidesContainer = document.querySelector('.carousel-slides');
      this.indicatorsContainer = document.querySelector('.carousel-indicators');
      
      // Crear indicadores
      this.createIndicators();
      
      // Configurar botones
      document.querySelector('.prev').addEventListener('click', () => this.prevSlide());
      document.querySelector('.next').addEventListener('click', () => this.nextSlide());
      
      // Iniciar autoplay
      this.startAutoplay();
      
      // Actualizar posición inicial
      this.updateCarousel();
  }
  
  createIndicators() {
      for (let i = 0; i < this.slides.length; i++) {
          const indicator = document.createElement('button');
          indicator.classList.add('indicator');
          if (i === 0) indicator.classList.add('active');
          indicator.addEventListener('click', () => this.goToSlide(i));
          this.indicatorsContainer.appendChild(indicator);
      }
  }
  
  updateCarousel() {
      // Actualizar posición de las diapositivas
      this.slidesContainer.style.transform = `translateX(-${this.currentSlide * 100}%)`;
      
      // Actualizar indicadores
      const indicators = document.querySelectorAll('.indicator');
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === this.currentSlide);
      });
  }
  
  nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
      this.updateCarousel();
  }
  
  prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
      this.updateCarousel();
  }
  
  goToSlide(index) {
      this.currentSlide = index;
      this.updateCarousel();
  }
  
  startAutoplay() {
      setInterval(() => this.nextSlide(), 5000);
  }
}

// Inicializar el carrusel cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', () => {
  new Carousel();
});