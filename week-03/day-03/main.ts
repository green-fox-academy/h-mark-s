import { Pokemon } from "./Pokemon";

let pokemonOfAsh: Pokemon[] = initializePokemon();

// Every pokemon has a name and a type.
// Certain types are effective against others, e.g. water is effective against fire.

// Ash has a few pokemon.
// A wild pokemon appeared!

let wildPokemon: Pokemon = new Pokemon("Oddish", "leaf", "water");

// Which pokemon should Ash use?


function initializePokemon(): Pokemon[] {
  return [
    new Pokemon("Balbasaur", "leaf", "water"),
    new Pokemon("Pikatchu", "electric", "water"),
    new Pokemon("Charizard", "fire", "leaf"),
    new Pokemon("Balbasaur", "water", "fire"),
    new Pokemon("Kingler", "water", "fire")
  ];
}

function choosePokemon(pokemon: Pokemon): string {
  let pokemonToChoose: string = '';
  for (let i = 0; i < pokemonOfAsh.length; i++) {
    if (pokemonOfAsh[i].isEffectiveAgainst(pokemon) === true) {
      pokemonToChoose = pokemonOfAsh[i].name;
    }
  }
  return pokemonToChoose;
}

console.log(`I choose you, ${choosePokemon(wildPokemon)}`);
