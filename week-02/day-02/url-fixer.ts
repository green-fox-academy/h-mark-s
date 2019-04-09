"use strict";

let url: string = "https//www.reddit.com/r/nevertellmethebots";

console.log(url.indexOf("/"));

function insertString(input: string, index: number, string: string): string {
  return input.substring(0, index) + string + input.substring(index, input.length);
}

url = insertString(url, 5, ":");

console.log(url);
