'use strict';

// let list = document.querySelector(".list");
let fullList = document.querySelector(".full-list");

window.onload = () => {

  // let listRequest = new XMLHttpRequest();
  // listRequest.open('GET', 'http://localhost:9875/list', true);
  // listRequest.send();
  // listRequest.onload = (data) => {
  //   console.log(data);
  //   let books = JSON.parse(data.target.response);
  //   let li = document.createElement("li");
  //   list.appendChild(li);
  //   for (let i = 0; i < books.length; i++) {
  //     list.innerHTML += '<p>' + books[i].book_name + '</p>';
  //   }
  // }

  let fullListRequest = new XMLHttpRequest();
  fullListRequest.open('GET', 'http://localhost:9875/full-list', true);
  fullListRequest.send();
  fullListRequest.onload = (data) => {
    let allTheData = JSON.parse(data.target.response);
    for (let i = 0; i < allTheData.length; i++) {
      fullList.innerHTML += '<tr><td>' + allTheData[i].title + '</td><td>' + allTheData[i].author + '</td><td>' + allTheData[i].category + '</td><td>' + allTheData[i].publisher + '</td><td>' + allTheData[i].price + '</td></tr>';
    }
  }
}


