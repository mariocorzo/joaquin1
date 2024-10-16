// Obtener los elementos necesarios
var modal = document.getElementById('modal');
var modalImg = document.getElementById('imagen-modal');
var captionText = document.getElementById('caption');
var images = document.querySelectorAll('.galeria img');
var currentIndex;

// Función para abrir el modal y mostrar la imagen seleccionada
images.forEach(function(image, index) {
    image.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        currentIndex = index;
    });
});

// Función para cerrar el modal
var closeBtn = document.getElementsByClassName('close')[0];
closeBtn.onclick = function() {
    modal.style.display = 'none';
}

// Función para mostrar la imagen anterior
var prevBtn = document.getElementsByClassName('prev')[0];
prevBtn.onclick = function() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateModalContent();
}

// Función para mostrar la siguiente imagen
var nextBtn = document.getElementsByClassName('next')[0];
nextBtn.onclick = function() {
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
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Cerrar el modal con la tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        modal.style.display = 'none';
    }
    // Navegar con las flechas del teclado
    if (modal.style.display === 'block') {
        if (event.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (event.key === 'ArrowRight') {
            nextBtn.click();
        }
    }
});
