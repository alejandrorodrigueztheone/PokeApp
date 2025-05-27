import logo from './logo.svg';
import './App.css';
import { chooseRandomPokemon, getPokemonImage } from './index.js';
import React, { useState } from 'react';

function MyButton({ onChoose }) {
  const handleClick = async () => {
    const randomMon = await chooseRandomPokemon();
    const image = await getPokemonImage(randomMon);
    onChoose(randomMon, image); 
  };

  return (
    <button onClick={handleClick}>
      Click for a Random Pokemon
    </button>
  );
}

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonImage, setPokemonImage] = useState('');
  return(
   <div>
      <MyButton onChoose={(pokemonName, pokemonImage) => {
      setPokemonName(pokemonName);
      setPokemonImage(pokemonImage);
      }} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      {pokemonName && <h2>Your Pokémon: {pokemonName}</h2>}
      {pokemonImage && <img src={pokemonImage} alt={pokemonName} style={{ marginTop: '20px', width: '150px' }} />}

    </div>
  )
}

export default App;
