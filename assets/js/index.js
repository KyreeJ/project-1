const images = [
    'https://miro.medium.com/v2/resize:fit:1400/0*0nKXkr98NdC4UOac',
    'https://preview.redd.it/3zcs10cdm5s81.jpg?width=640&crop=smart&auto=webp&s=b99827974b917a841ad21c23dca4ca2a1c7ce8a7'
];

let currentIndex = 0;

function changeImage() {
    const slideshowImage = document.getElementById('slideshow-image');
    slideshowImage.style.opacity = 0;

    setTimeout(() => {
        currentIndex = (currentIndex + 1) % images.length;
        slideshowImage.src = images[currentIndex];
        slideshowImage.style.opacity = 1;
    }, 0);
}

setInterval(changeImage, 5000);

