import React ,{ useEffect, useState } from "react";
import './App.css';
import PokemonList from './components/pokemonList'
import PokemonInformation from './components/pokemonInformation'
import PokemonThumbnail from './components/pokemonThumbnail'

function App() {
  const [pokemon, setPokemon]= useState();
  return (
    <div className="App">
      <PokemonInformation pokemon={pokemon}></PokemonInformation>
      <PokemonList onPokemonClick={setPokemon}></PokemonList>
    </div>
  );
}

export default App;
