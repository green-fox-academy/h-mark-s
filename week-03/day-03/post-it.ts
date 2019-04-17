'use strict';

class PostIt{
  backgroundColor: string;
  text: string;
  textColor: string;

  constructor(backgroundColor: string, text: string, textColor: string) {
    this.backgroundColor = backgroundColor;
    this.text = text;
    this.textColor = textColor;
  }

  showMyPostIt(): void {
    console.log(`a(n) ${this.backgroundColor} with ${this.textColor} text: "${this.text}"`);
  }
}

const firstPostIt: PostIt = new PostIt('orange', 'Idea 1', 'blue');
const secondPostIt: PostIt = new PostIt('pink', 'Awesome', 'black');
const thirdPostIt: PostIt = new PostIt('yellow', 'Superb!', 'green');

firstPostIt.showMyPostIt();
secondPostIt.showMyPostIt();
thirdPostIt.showMyPostIt();