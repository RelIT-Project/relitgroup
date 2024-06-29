// JavaScript to handle lightbox functionality
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".project-image").forEach(image => {
      image.addEventListener("click", () => {
          lightbox.style.display = "block";
          lightboxImg.src = image.src;
      });
  });

  closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
  });

  window.addEventListener("click", (event) => {
      if (event.target == lightbox) {
          lightbox.style.display = "none";
      }
  });
});
