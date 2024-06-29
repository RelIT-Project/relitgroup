let slideIndex = 1;
let slides;
let modal = document.getElementById("carouselModal");
let modalImg = document.getElementById("carouselImg");
let captionText = document.getElementById("caption");

document.querySelectorAll(".project-image").forEach((img, index) => {
    img.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
        slideIndex = index + 1;
        showSlides(slideIndex);
    }
});

let close = document.getElementsByClassName("close")[0];
close.onclick = function() {
    modal.style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    slides = document.querySelectorAll(".project-image");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    modalImg.src = slides[slideIndex-1].src;
    captionText.innerHTML = slides[slideIndex-1].alt;
}

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowRight") {
        plusSlides(1);
    } else if (event.key === "ArrowLeft") {
        plusSlides(-1);
    } else if (event.key === "Escape") {
        modal.style.display = "none";
    }
});
