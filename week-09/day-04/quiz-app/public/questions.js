'use strict';

const addQuestion = document.querySelector('.add-question');
const manageQuestions = document.querySelector('.manage-questions');

function refreshQuestions() {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:5500/api/questions');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = data => {
    let response = JSON.parse(data.target.response);
    response.forEach(response => {
      let question = document.createElement('label')
      let deleteButton = document.createElement('input');
      deleteButton.setAttribute('type', 'submit');
      deleteButton.setAttribute('class', 'delete-button');
      manageQuestions.appendChild(question).innerText = response.question;
      manageQuestions.appendChild(deleteButton).value = 'DELETE';
    });
    let allDeleteButtons = document.querySelectorAll('.delete-button');
    // allDeleteButtons.addEventListener('???')

  }
  xhr.send();
}

refreshQuestions();

addQuestion.addEventListener('submit', (event) => {
  event.preventDefault();
  const xhr= new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:5500/api/questions');
  xhr.setRequestHeader('Content-Type', 'application/json');
  let isCorrectArray = [];
  const fields = document.querySelectorAll('input[type="text"]');
  const radioButtons = document.querySelectorAll('input[type="radio"]');
  for (let i = 0; i < radioButtons.length; i++) {
    if (radioButtons[i].checked === true) {
      isCorrectArray.push("1");
    } else {
      isCorrectArray.push("0");
    }
  }
  xhr.onload = () => {
    addQuestion.reset()
  }
  xhr.send(JSON.stringify({
    "question": event.target.elements.question.value,
    "answers": [
      {
        "answer": event.target.elements["answer-one"].value,
        "is_correct": isCorrectArray[0],
      },
      {
        "answer": event.target.elements["answer-two"].value,
        "is_correct": isCorrectArray[1],
      },
      {
        "answer": event.target.elements["answer-three"].value,
        "is_correct": isCorrectArray[2],
      },
      {
        "answer": event.target.elements["answer-four"].value,
        "is_correct": isCorrectArray[3],
      }
    ]
  }))
});
