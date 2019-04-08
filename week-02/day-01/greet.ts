'use strict';

let nameToGreet: string = 'Greenfox';

function greet(nameToGreet: string): string {
    return `Greetings, dear ${nameToGreet}!`;
}

console.log(greet(nameToGreet));