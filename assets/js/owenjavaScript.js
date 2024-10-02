function saveMovies() {
    const movieInput = document.getElementById('movieInput').value;
    if (movieInput) {
        let movies = JSON.parse(localStorage.getItem('movies')) || [];
        movies.push(movieInput);
        localStorage.setItem('movies', JSON.stringify(movies));
        document.getElementById('movieInput').value = '';
        displayMovies();
    }
}

function displayMovie() {
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


