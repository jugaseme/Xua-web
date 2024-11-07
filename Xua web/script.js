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