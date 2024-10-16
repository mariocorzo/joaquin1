// Obtener los elementos necesarios
var modal = document.getElementById('modal');
var modalImg = document.getElementById('imagen-modal');
var captionText = document.getElementById('caption');
var images = document.querySelectorAll('.galeria img');
var currentIndex;

// Función para abrir el modal y mostrar la imagen seleccionada
images.forEach(function(image, index) {
    image.addEventListener('click', function() {
        modal.classList.add('active'); // Añadimos la clase 'active' al modal
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = index;
    });
});

// Función para cerrar el modal
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.onclick = function(event) {
    event.stopPropagation(); // Evita que el clic se propague al modal
    modal.classList.remove('active'); // Eliminamos la clase 'active' del modal
}

// Función para mostrar la imagen anterior
var prevBtn = document.getElementsByClassName('prev')[0];
prevBtn.onclick = function(event) {
    event.stopPropagation(); // Evita que el clic se propague al modal
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModalContent();
}

// Función para mostrar la siguiente imagen
var nextBtn = document.getElementsByClassName('next')[0];
nextBtn.onclick = function(event) {
    event.stopPropagation(); // Evita que el clic se propague al modal
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateModalContent();
}

// Actualizar el contenido del modal
function updateModalContent() {
    modalImg.src = images[currentIndex].src;
    captionText.innerHTML = images[currentIndex].alt;
}

// Cerrar el modal al hacer clic fuera de la imagen
modal.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove('active'); // Eliminamos la clase 'active' del modal
    }
}

// Cerrar el modal con la tecla Escape y navegar con las flechas del teclado
document.addEventListener('keydown', function(event) {
    if (modal.classList.contains('active')) {
        if (event.key === 'Escape') {
            modal.classList.remove('active'); // Cerramos el modal
        } else if (event.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (event.key === 'ArrowRight') {
            nextBtn.click();
        }
    }
});
