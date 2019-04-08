'use strict';

let typo:string = 'Chinchill';

function appendAFunc(append: string): string {
    append = 'a';
    return typo + append;
}

console.log(appendAFunc(typo));