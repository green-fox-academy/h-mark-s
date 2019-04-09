'use strict';

let todoText: string = ' - Buy milk\n';
let todoTextBeginning: string = 'My todo:\n';
let todoTextEnding1: string = ' - Download games\n';
let todoTextEnding2: string = '\t- Diablo';

todoText = todoTextBeginning.concat(todoText, todoTextEnding1, todoTextEnding2);

console.log(todoText);
