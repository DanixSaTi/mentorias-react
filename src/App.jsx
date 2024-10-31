//preguntar a martin lo de la imagen 

import { useEffect, useState } from 'react';
import './App.css';

const CallApi = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const urlapi = `https://pokeapi.co/api/v2/pokemon/`;
    fetch(urlapi)
      .then((resp) => resp.json())
      .then((json) => setPokemon(json))
      .catch((error) => console.log(error));
  }, []);

  return pokemon;
};

function App() { // this is the id for the looking a pokemon
  const pokemon = CallApi();
  console.log(pokemon);
  
  return (
    <>
      {pokemon ? (
        <>
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites.other['dream_world'].front_default} alt={pokemon.name} /> 
        </>
      ) : (
        <p>This number of pokemon dont exist...</p>
      )}
    </>
  );
}


export default App;
