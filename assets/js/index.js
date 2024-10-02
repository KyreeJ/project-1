window.onload = function() {
    const gif = document.getElementById('jumpscare-gif');
    const staticImage = document.getElementById('jumpscare-image');
    // const sound = document.getElementById('jumpscare-sound');

    // function showJumpscare() {
        // gif.style.display = 'block';
        // staticImage.style.display = 'none';
        // sound.onplay();
    
    setTimeout(() => {
        gif.style.display = 'none';
        staticImage.style.display = 'block';
            // setTimeout(() => {
            //     showJumpscare();
            // }, 2000);
    }, 4000);
};

