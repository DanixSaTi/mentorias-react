import { useEffect, useState } from 'react';
import '../scss/apiCall.scss';

const CallApi = () => {
    const [pokemonList, setPokemonList] = useState();

    useEffect(() => {
    const urlapi = `https://pokeapi.co/api/v2/pokemon/`;
    fetch(urlapi)
        .then((resp) => resp.json())
        .then((json) => setPokemonList(json.results))
        .catch((error) => console.log(error));
    }, []);
    
    return {pokemonList};
};

export default CallApi;
