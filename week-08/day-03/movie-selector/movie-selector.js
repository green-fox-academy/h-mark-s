'use strict';

const sciFi = document.querySelectorAll('.sci-fi');
const drama = document.querySelectorAll('.drama');
const comedy = document.querySelectorAll('.comedy');

const genre = document.querySelector('#genre');
const movie = document.querySelector('#movie');
const title = document.querySelector('.selected-movie');

let selectedGenre = '';
let selectedMovie = '-';

window.onload = () => {
  title.textContent += selectedMovie;
}

genre.addEventListener('change', () => {
  selectedGenre = genre.value;
  for (let i = 0; i < movie.length; i++) {
    if (!movie.options[i].classList.value.includes(selectedGenre)) {
      movie.options[i].style.display = 'none';
    } else {
      movie.options[i].style.display = 'list-item';
    }
  }
});

movie.addEventListener('change', () => {
  selectedMovie = movie.value;
  title.textContent = selectedMovie;
});
