document.addEventListener("DOMContentLoaded", function() {
  const projectImages = document.querySelectorAll(".project-item img");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeButton = document.querySelector(".close");

  let currentIndex = 0;

  projectImages.forEach((image, index) => {
      image.addEventListener("click", () => {
          currentIndex = index;
          openLightbox();
      });
  });

  closeButton.addEventListener("click", closeLightbox);

  function openLightbox() {
      lightbox.style.display = "block";
      lightboxImg.src = projectImages[currentIndex].src;
  }

  function closeLightbox() {
      lightbox.style.display = "none";
  }

  lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
          closeLightbox();
      }
  });

  document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
          closeLightbox();
      }
  });
});
