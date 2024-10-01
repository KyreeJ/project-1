const imageContainer = document.querySelector('.img-container');


imageContainer.addEventListener('click', function (event) {
  const element = event.target;

  if (element.matches('img')) {
    const state = element.getAttribute('data-state');
    if (state === 'still') {
      element.setAttribute('data-state', 'animate');
      element.setAttribute('src', element.dataset.animate);
    } else {
      element.dataset.state = 'still';
      element.setAttribute('src', element.dataset.still);
    }
  }
});