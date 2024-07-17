/* scripts.js */
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;
const imageCount = images.length;

function showImage(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function showNextImage() {
    currentIndex = (currentIndex + 1) % imageCount;
    showImage(currentIndex);
}

function showPrevImage() {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount;
    showImage(currentIndex);
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Auto slide
setInterval(showNextImage, 3000);
// Add this in the JavaScript file
const thumbnails = document.querySelectorAll('.thumbnail');

thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        currentIndex = index;
        showImage(currentIndex);
    });
});
