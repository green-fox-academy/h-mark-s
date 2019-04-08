'use strict';

function printParams(...dolgok: any[]): void {
    dolgok.forEach(dolog => console.log(dolog));
}

printParams('ember', 8, 1);