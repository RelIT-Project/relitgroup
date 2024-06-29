document.addEventListener("DOMContentLoaded", function() {
    const projectImages = document.querySelectorAll(".project-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const closeButton = document.querySelector(".close");
    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");
    let currentIndex;
  
    projectImages.forEach((image, index) => {
      image.addEventListener("click", () => {
        currentIndex = index;
        openLightbox(currentIndex);
      });
    });
  
    closeButton.addEventListener("click", closeLightbox);
  
    prevButton.addEventListener("click", () => {
      changeImage(-1);
    });
  
    nextButton.addEventListener("click", () => {
      changeImage(1);
    });
  
    function openLightbox(index) {
      lightbox.style.display = "block";
      lightboxImg.src = projectImages[index].src;
      changeImage(index); // Call changeImage to display the image
    }
  
    function closeLightbox() {
      lightbox.style.display = "none";
    }
  
    function changeImage(direction) {
      currentIndex += direction;
      if (currentIndex === -1) {
        currentIndex = projectImages.length - 1;
      } else if (currentIndex === projectImages.length) {
        currentIndex = 0;
      }
      lightboxImg.src = projectImages[currentIndex].src;
    }
  
    // Close the lightbox when clicking outside the image
    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });
  
    // Keyboard navigation for slideshow
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
  