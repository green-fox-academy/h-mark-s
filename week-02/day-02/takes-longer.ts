'use strict';

let quote: string = `Hofstadter's Law: It you expect, even when you take into account Hofstadter's Law.`;
let insertQuote = 'always takes longer than ';

quote = quote.substring(0, quote.indexOf('you')) + insertQuote + quote.substring(quote.indexOf('you'), quote.length);

console.log(quote);