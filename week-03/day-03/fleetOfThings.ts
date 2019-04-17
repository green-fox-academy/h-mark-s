import { Thing } from './thing';
import { Fleet } from './fleet';


let thing1: Thing = new Thing('Get milk');
let thing2: Thing = new Thing('Remove the obstacles');
let thing3: Thing = new Thing('Stand up');
let thing4: Thing = new Thing('Eat lunch');

thing4.complete();
thing3.complete();

let fleet = new Fleet();

fleet.add(thing1);
fleet.add(thing2);
fleet.add(thing3);
fleet.add(thing4);


function ifTrue (thing: Thing) {
  let x: string = '';
  if (thing.getCompleted() === true) {
    x = '[x]';
  } else {
    x = '[ ]';
  } return x;
}

for (let i = 0; i < fleet.getThings().length; i++) {
  console.log((i+1) + `. ${ifTrue(fleet.getThings()[i])} ${fleet.getThings()[i].getName()}`)
}

/* Crete a fleet of things to have this output:
1. [ ] Get milk
2. [ ] Remove the obstacles
3. [x] Stand up
4. [x] Eat lunch
// Hint: You have to create a `print()` method as well */