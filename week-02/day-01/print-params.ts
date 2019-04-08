'use strict';

function printParams(...dolgok: any[]): void {
    dolgok.forEach(dolog => console.log(dolog));
}

printParams('ember', 8, 1);

// -  Create a function called `printParams`
//    which logs to the console the input parameters
//    (can have multiple number of arguments)