
import { useEffect, useState } from 'react';
import './App.css';

const CallApi = () => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const urlapi = `https://pokeapi.co/api/v2/pokemon/`;
    fetch(urlapi)
      .then((resp) => resp.json())
      .then((json) => setPokemon(json.results))
      .catch((error) => console.log(error));
  }, []);

  return pokemon;
};

function App() { // this is the id for the looking a pokemon
  const pokemonList = CallApi();
  console.log(pokemonList);
  const urlImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
  
  return (
    <>
        {
          pokemonList && pokemonList.map((pokemon) => {
           const url = pokemon.url;
           let id = 0;
            if(url.length < 37){
              id = url.slice(-2,-1);
            }
            else{
              id = url.slice(-3,-1);
            }

            const srcImg = urlImg + id + '.svg';
            
            return (
              <>

                <img src={srcImg} alt={"imagen de " + pokemon.name} />
              </>
            )
            
          })

        }
          
    </>
  );
}


export default App;
