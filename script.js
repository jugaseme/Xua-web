let imagenes = [
    {
        "url": "Galeria_Principal/Fondo_1.jpeg",
        "nombre": "Proyecto 01",
        "descripcion": "Este es el proyecto 01 fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "Galeria_Principal/Imagen 7.jpg",
        "nombre": "Proyecto 02",
        "descripcion": "Hola a todos este es el proyecto02 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "Galeria_Principal/imagen 4.jpg",
        "nombre": "Proyecto 03",
        "descripcion": "Hola a todos este es el proyecto03 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "Galeria_Principal/imagen 1.jpeg",
        "nombre": "Proyecto 04",
        "descripcion": "Hola a todos este es el proyecto04 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "Galeria_Principal/imagen 8.jpeg",
        "nombre": "Proyecto 05",
        "descripcion": "Hola a todos este es el proyecto05 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "Galeria_Principal/imagen 5.png",
        "nombre": "Proyecto 06",
        "descripcion": "Hola a todos este es el proyecto06 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    },
    {
        "url": "Galeria_Principal/imagen 6.png",
        "nombre": "Proyecto 07",
        "descripcion": "Hola a todos este es el proyecto07 y fue desarrollado para un video de youtube. Si te gusta el contenido dale like y suscribete"
    }
];

let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto');
let actual = 0;
let intervalo;

// **Función para actualizar la imagen y el texto del carrusel**
function actualizarCarrusel() {
    imagen.innerHTML = `<img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`;
    texto.innerHTML = `
        <h3>${imagenes[actual].nombre}</h3>
        <p>${imagenes[actual].descripcion}</p>
    `;
    posicionCarrusel();
}

// **Función para actualizar los puntos de posición del carrusel**
function posicionCarrusel() {
    puntos.innerHTML = "";
    for (var i = 0; i < imagenes.length; i++) {
        if (i == actual) {
            puntos.innerHTML += '<p class="bold">.</p>';
        } else {
            puntos.innerHTML += '<p>.</p>';
        }
    }
}

// **Evento para botón atrás**
atras.addEventListener('click', function() {
    actual -= 1;
    if (actual == -1) {
        actual = imagenes.length - 1;
    }
    actualizarCarrusel();
    reiniciarAutoPlay();
});

// **Evento para botón adelante**
adelante.addEventListener('click', function() {
    actual += 1;
    if (actual == imagenes.length) {
        actual = 0;
    }
    actualizarCarrusel();
    reiniciarAutoPlay();
});

// **Función para cambiar la imagen automáticamente cada 5 segundos**
function autoPlayCarrusel() {
    intervalo = setInterval(() => {
        actual += 1;
        if (actual == imagenes.length) {
            actual = 0;
        }
        actualizarCarrusel();
    }, 3000);
}

// **Función para reiniciar el autoplay cuando el usuario usa los botones**
function reiniciarAutoPlay() {
    clearInterval(intervalo); // Detiene el autoplay actual
    autoPlayCarrusel(); // Inicia uno nuevo
}

// **Inicializa el carrusel y el autoplay**
actualizarCarrusel();
autoPlayCarrusel();




function openSlide() {
    document.getElementById("slideMenu").style.left = "0"; 
}

function closeSlide() {
    document.getElementById("slideMenu").style.left = "-250px"; 
}


