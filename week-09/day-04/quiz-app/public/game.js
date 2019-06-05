'use strict';

const score = document.querySelector('.score-value');
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');

let currentScore = 0;
score.innerText = currentScore;

function newQuestion() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:5500/api/game');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = data => {
    let response = JSON.parse(data.target.response);
    question.innerText = response.question;
    for (let i = 0; i < answers.length; i++) {
      answers[i].innerText = response.answers[i].answer;
    }
  }
  xhr.send();
}

window.onload = () => {
  newQuestion();
}

answers.forEach((answer) => {
  answer.addEventListener('click', () => {
    alert('feature coming soon');
  });
});
