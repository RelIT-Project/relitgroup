document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".carousel-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeButton = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex;

    images.forEach((image, index) => {
        image.addEventListener("click", () => {
            lightbox.style.display = "block";
            lightboxImg.src = image.src;
            currentIndex = index;
        });
    });

    closeButton.addEventListener("click", () => {
        lightbox.style.display = "none";
    });

    prevButton.addEventListener("click", () => {
        changeImage(-1);
    });

    nextButton.addEventListener("click", () => {
        changeImage(1);
    });

    function changeImage(direction) {
        currentIndex += direction;
        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }
        lightboxImg.src = images[currentIndex].src;
    }

    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", (event) => {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    });
});
