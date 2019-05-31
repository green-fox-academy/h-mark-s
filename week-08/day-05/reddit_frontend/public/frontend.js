'use strict';

const xhr = new XMLHttpRequest();

function newPost() {
  const posts = document.querySelector('.posts');
  let newPost = document.createElement('div');

  let buttons = document.createElement('div')
  let postContent = document.createElement('div');
  let upvote = document.createElement('button');
  let score = document.createElement('p');
  let downvote = document.createElement('button');
  let title = document.createElement('h1');

  posts.append(newPost);
  newPost.append(buttons, postContent);
  newPost.setAttribute('class', 'new-post');
  buttons.append(upvote, score, downvote);
  buttons.setAttribute('class', 'buttons');
  upvote.setAttribute('class', 'upvote fas fa-arrow-up');
  score.setAttribute('class', 'score');
  downvote.setAttribute('class', 'downvote fas fa-arrow-down');
  postContent.append(title);
  postContent.setAttribute('class', 'post-content');
  title.setAttribute('class', 'title');
}


xhr.open('get', 'http://localhost:7776/posts');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = data => {
  for (let i = 0; i < JSON.parse(data.target.response).length; i++) {
    newPost();
    const posts = document.querySelector('.posts');
    posts.children[i].children[1].children[0].innerHTML = JSON.parse(data.target.response)[i].title;
    posts.children[i].children[0].children[1].innerHTML = JSON.parse(data.target.response)[i].score;
  }
  console.log(JSON.parse(data.target.response));
};
xhr.send();
