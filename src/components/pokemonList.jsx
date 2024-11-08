import CallApi from "../calls/apiCall";
import { PokemonCardComponent } from "./pokemonCard";
//import { PokemonCardData } from "./pokemonData";

export const PokemonWrapped = () => {
    const {pokemonList} = CallApi();
    console.log(pokemonList);

        return (
            <div className="pokemon-container">
                {pokemonList && pokemonList.map((pokemon, index) => (
                <PokemonCardComponent key={index} name={pokemon.name} url={pokemon.url}/>
                ))}
            </div>
            
        );
    };