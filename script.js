// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos
}

// Lightbox
var lightbox = document.getElementById("lightbox");
var lightboxImg = document.getElementById("lightbox-img");

function openLightbox(imgSrc) {
    lightbox.style.display = "block";
    lightboxImg.src = imgSrc;
}

function closeLightbox() {
    lightbox.style.display = "none";
}

// Cambia las imágenes en el lightbox
var slideIndexLightbox = 1;

function changeImage(n) {
    showImage(slideIndexLightbox += n);
}

function currentImage(n) {
    showImage(slideIndexLightbox = n);
}

function showImage(n) {
    var images = document.getElementsByClassName("lightbox-image");
    if (n > images.length) {slideIndexLightbox = 1}
    if (n < 1) {slideIndexLightbox = images.length}
    for (var i = 0; i < images.length; i++) {
        images[i].style.display = "none";
    }
    images[slideIndexLightbox - 1].style.display = "block";
}
