'use strict';

let list = document.querySelector(".list");

window.onload = () => {
  let listRequest = new XMLHttpRequest();
  listRequest.open('GET', 'http://localhost:9875/list', true);
  listRequest.send();
  listRequest.onload = (data) => {
    console.log(data);
    let books = JSON.parse(data.target.response);
    let li = document.createElement("li");
    list.appendChild(li);
    for (let i = 0; i < books.length; i++) {
      list.innerHTML += '<p>' + books[i].book_name + '</p>';
    }
  }
}


