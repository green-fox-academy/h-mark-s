'use strict';

const list = ['apple', 'banana', 'cat', 'dog'];

const li = document.getElementsByTagName("li");

li[0].innerHTML = list[0];
li[1].innerHTML = list[1];
li[2].innerHTML = list[2];
li[3].innerHTML = list[3];

const ul = document.getElementsByTagName("ul")[0];

ul.classList.add("limegreen");