'use strict';

const kids = [
  { petName: 'Wattled crane', owner: 'Bryant' },
  { petName: 'Devil, tasmanian', owner: 'Alejandro' },
  { petName: 'Mynah, common', owner: 'Nelie' },
  { petName: 'Dolphin, common', owner: 'Mariele' },
  { petName: 'Gray duiker', owner: 'Maddalena' },
  { petName: 'Crab (unidentified)', owner: 'Lucine' },
  { petName: 'Ant (unidentified)', owner: 'Lorianna' },
  { petName: 'Bison, american', owner: 'Tommie' },
  { petName: 'Yellow mongoose', owner: 'Vivyan' },
  { petName: 'Carpet snake', owner: 'Veda' },
  { petName: 'Lesser mouse lemur', owner: 'Isidor' },
];

const pets = document.getElementById('pets');

for (let i = 0; i < kids.length; i++) {
  
  const newKids = document.createElement('article');
  const newOwnerName = document.createElement('h3');
  const newPetName = document.createElement('p');
  
  const kidsAndPets = document.getElementsByTagName('article');
  const ownerName = document.getElementsByTagName('h3');
  const petName = document.getElementsByTagName('p');

  pets.appendChild(newKids);
  kidsAndPets[i].appendChild(newOwnerName);
  kidsAndPets[i].appendChild(newPetName);
  
  ownerName[i].textContent = kids[i].owner;
  petName[i].textContent = kids[i].petName;
}
