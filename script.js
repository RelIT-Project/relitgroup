// Slideshow script
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 4 seconds
}

// Lightbox script
let lightbox = document.getElementById('lightbox');
let lightboxImg = document.getElementById('lightbox-img');

function openLightbox(imageSrc) {
    lightbox.style.display = 'block';
    lightboxImg.src = imageSrc;
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

// Change image in lightbox
let slideIndexLightbox = 1;

function changeImage(n) {
    showImage(slideIndexLightbox += n);
}

function showImage(n) {
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) { slideIndexLightbox = 1 }
    if (n < 1) { slideIndexLightbox = slides.length }
    
    lightboxImg.src = slides[slideIndexLightbox - 1].querySelector('img').src;
}

// Automatically close lightbox if clicked outside the image
window.onclick = function(event) {
    if (event.target == lightbox) {
        closeLightbox();
    }
};
