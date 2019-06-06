'use strict';

const score = document.querySelector('.score-value');
const question = document.querySelector('.question');
const answers = document.querySelectorAll('.answer');

let currentScore = 0;

function newQuestion() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:5500/api/game');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = data => {
    score.innerText = currentScore;
    let response = JSON.parse(data.target.response);
    question.innerText = response.question;
    for (let i = 0; i < answers.length; i++) {
      answers[i].innerText = response.answers[i].answer;
      if (response.answers[i]['is_correct'] === 1) {
        answers[i].setAttribute('class', 'correct');
      } else {
        answers[i].setAttribute('class', 'incorrect');
      }
    }
  }
  xhr.send();
}

window.onload = () => {
  newQuestion();
}

answers.forEach(answer => {
  answer.addEventListener('click', () => {
    if (answer.classList.contains('correct')) {
      answer.setAttribute('style', 'background: green');
      currentScore++;
      score.innerText = currentScore;
    } else {
      answer.setAttribute('style', 'background: red');
      document.querySelector('.correct').setAttribute('style', 'background: green');
    }
    setTimeout(() => {
      newQuestion();
      answers.forEach(answer => answer.setAttribute('style', ''))
    }, 3000);
  });
});
