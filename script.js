document.addEventListener("DOMContentLoaded", function() {
    const projectImages = document.querySelectorAll(".project-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeButton = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex;

    // Abrir lightbox al hacer clic en una imagen
    projectImages.forEach((image, index) => {
        image.addEventListener("click", () => {
            currentIndex = index;
            openLightbox(currentIndex);
        });
    });

    // Cerrar lightbox al hacer clic en el botón de cierre
    closeButton.addEventListener("click", () => {
        closeLightbox();
    });

    // Cambiar imagen hacia atrás o adelante
    prevButton.addEventListener("click", () => {
        changeImage(-1);
    });

    nextButton.addEventListener("click", () => {
        changeImage(1);
    });

    // Función para abrir el lightbox
    function openLightbox(index) {
        lightbox.style.display = "block";
        lightboxImg.src = projectImages[index].src;
    }

    // Función para cerrar el lightbox
    function closeLightbox() {
        lightbox.style.display = "none";
    }

    // Función para cambiar la imagen
    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = projectImages.length - 1;
        } else if (currentIndex >= projectImages.length) {
            currentIndex = 0;
        }
        lightboxImg.src = projectImages[currentIndex].src;
    }

    // Cerrar lightbox al hacer clic fuera de la imagen
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    // Navegación con teclado para el slideshow
    document.addEventListener("keydown", (event) => {
        if (lightbox.style.display === "block") {
            if (event.key === "ArrowLeft") {
                changeImage(-1);
            } else if (event.key === "ArrowRight") {
                changeImage(1);
            } else if (event.key === "Escape") {
                closeLightbox();
            }
        }
    });
});
