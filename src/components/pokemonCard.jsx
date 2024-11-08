import { useGetPokemonInformation } from "../calls/useGetPokemonInformation";

export const PokemonCardComponent = ({  name, url }) => {
    const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/`;



    let id = 0;
    if(url.length < 37){
    id = url.slice(-2,-1);
    }
    else{
    id = url.slice(-3,-1);
    }

    const srcImg = urlImg + id + '.svg';
    const {pokemonData} = useGetPokemonInformation(id);
    
    
        return (
            <div className="pokemon-card"> 
                <img src={srcImg} alt="Pokemon-image"/>
                <h3>{name}</h3>
                <hr />
                <h4>Weight: {pokemonData?.weight} m</h4>
                <h4>Height: {pokemonData?.height} kg</h4>
            </div>
        );
    };