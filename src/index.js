import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

//REMEMBER TO RUN BUILD TASK, press CNTRL + SHIFT + B
//first we have to set up the connection to the API and be able to play around with it
//second create a simple loop for finding a pokemon, or a specific type, or anything really in order to use it as a basis for the rest of the code that I am going to have to create

//fetches all the names in the pokemon api and stores them in an array
async function getAllPokemonNames() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
    const data = await response.json();
    const names = data.results.map((pokemon=> pokemon.name))
    return names
}

 
//basic randomizer
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }




export async function chooseRandomPokemon() {
    const pokemonNames = await getAllPokemonNames();
    const randomPokemonIndex = getRandomInt(pokemonNames.length)
    const randomPokemon = pokemonNames[randomPokemonIndex]
    return randomPokemon
}

export async function getPokemonImage(pokemon) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
  const data = await response.json();
  return data.sprites.front_default; 
//(async ( )=>{
//const randomPokemon = await chooseRandomPokemon()
//return randomPokemon
//})()/

}
