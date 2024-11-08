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
const closeBtn = document.querySelector('.close-btn');

// Función para cerrar la sidebar
closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('hidden'); // Asumiendo que 'hidden' es la clase que muestra la sidebar
});
