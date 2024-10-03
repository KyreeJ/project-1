window.onload = function() {
    const gif = document.getElementById('jumpscare-gif');
    const staticImage = document.getElementById('jumpscare-image');
    const sound = document.getElementById('jumpscare-sound');

    
    setInterval(() => {
        gif.style.display = 'block';
        staticImage.style.display = 'none';
            setTimeout(() => {
                gif.style.display = 'none';
                staticImage.style.display = 'block';
                sound.play();
            }, 6000);
    }, 9000);
};
