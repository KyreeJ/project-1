const imageContainer = document.querySelector('.img-container');


imageContainer.addEventListener('click', function (event) {
  const element = event.target;


  if (element.matches('img')) {

    const state = element.getAttribute('data-state');

    if (state === 'still') {
      // Change the data-state attribute's value
      // There are two different ways this attribute can be set
      // element.dataset.state = 'animate';
      element.setAttribute('data-state', 'animate');

      // Update the image's source to the string being stored in the data-animate attribute
      element.setAttribute('src', element.dataset.animate);
    } else {
      // Change the attributes back to their non-animated values
      element.dataset.state = 'still';
      element.setAttribute('src', element.dataset.still);
    }
  }
});

function saveMovie() {
  const movieInput = document.getElementById('movieInput').value;
  if (movieInput) {
    let movies = JSON.parse(localStorage.getItem('movies')) || [];
    movies.push(movieInput);
    localStorage.setItem('movies', JSON.stringify(movies));
    document.getElementById('movieInput').value = '';
    displayMovies();
  }
}

function displayMovies() {
  const movies = JSON.parse(localStorage.getItem('movies')) || [];
  const movieList = document.getElementById('movieList');
  movieList.innerHTML = '';
  movies.forEach(movie => {
    const li = document.createElement('li');
    li.textContent = movie;
    movieList.appendChild(li);
  });
}

window.onload = displayMovies;