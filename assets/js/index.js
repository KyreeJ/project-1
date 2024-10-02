window.onload = function() {
    const gif = document.getElementById('jumpscare-gif');
    const staticImage = document.getElementById('jumpscare-image');
    const sound = document.getElementById('jumpscare-sound');

    // function showJumpscare() {
        // gif.style.display = 'block';
        // staticImage.style.display = 'none';
        // sound.onplay();
    
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

// const options = ['Halloween', 'Friday the 13th', 'Texas Chainsaw Massacre', 'Scream', 'The Shining',
//         'Evil Dead', 'The Thing', 'A Nightmare on Elm Street', 'It Follows', 'Hereditary', 'Psycho'];

// document.getElementById("randomButton").addEventListener("click", function() {
//     const randomIndex = Math.floor(Math.random() * options.length);
//     const randomOption = options[randomIndex];
//     alert(randomOption);
// });