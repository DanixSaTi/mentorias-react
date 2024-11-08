import { useEffect, useState } from "react";


export const useGetPokemonInformation = (id) =>{
    const [pokemonData, setPokemonData] = useState();


    useEffect(() => {
    const urlapi = `https://pokeapi.co/api/v2/pokemon/${id}`;
    fetch(urlapi)
        .then((resp) => resp.json())
        .then((json) => setPokemonData(json))
        .catch((error) => console.log(error));
    }, [id]);
    
    return {pokemonData};
}