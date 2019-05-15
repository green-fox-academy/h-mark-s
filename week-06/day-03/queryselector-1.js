'use strict';

let king = document.getElementById("b325");
console.log(king);

let businessLamp = [document.getElementsByClassName("asteroid big")[0], document.getElementsByClassName("asteroid b329 big")[0]];
console.log(businessLamp[0]);
console.log(businessLamp[1]);

let conceitedKing = [document.getElementsByClassName("asteroid")[0], document.getElementsByClassName("asteroid b326")[0]];
window.alert(conceitedKing[0].outerHTML);
window.alert(conceitedKing[1].outerHTML);

let noBusiness = [document.getElementsByClassName("asteroid")[0], document.getElementsByClassName("asteroid b326")[0], document.getElementsByClassName("asteroid b329 big")[0]];
console.log(noBusiness[0]);
console.log(noBusiness[1]);
console.log(noBusiness[2]);
