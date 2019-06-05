'use strict';

const addQuestion = document.querySelector('.add-question');

addQuestion.addEventListener('submit', (event) => {
  event.preventDefault();
  const xhr= new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5500/api/questions');
  xhr.setRequestHeader('Content-Type', 'application/json');
  let isCorrectArray = [];
  for (let i = 0; i < document.querySelectorAll('input[type="radio"]').length; i++) {
    if (document.querySelectorAll('input[type="radio"]')[i].checked === true) {
      console.log(document.querySelectorAll('input[type="radio"]')[i])
      isCorrectArray.push("1");
    } else {
      console.log(document.querySelectorAll('input[type="radio"]')[i].checked)
      isCorrectArray.push("0");
    }
  }
  console.log(isCorrectArray);
  xhr.send(JSON.stringify({
    "question": document.querySelector('#question').value,
    "answers": [
      {
        "answer": document.querySelector('#answer-one').value,
        "is_correct": isCorrectArray[0],
      },
      {
        "answer": document.querySelector('#answer-two').value,
        "is_correct": isCorrectArray[1],
      },
      {
        "answer": document.querySelector('#answer-three').value,
        "is_correct": isCorrectArray[2],
      },
      {
        "answer": document.querySelector('#answer-four').value,
        "is_correct": isCorrectArray[3],
      }
    ]
  }))
});