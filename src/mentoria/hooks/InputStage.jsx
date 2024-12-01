//crear mas input y un boton "Cuando des clic al boton que me muestre lo que dicen los input 

import { useEffect, useState } from "react"


const peticion = () => {
   
    return {pokemon: "pikachu"}

}



export const InputStageComponent = () => {


//primer valor es la variable y la segunda es la función
    const [pokemon, setPokemon] = useState("");
   
    const enviarDatos = () => {
        //se va activar cuando des clic y presiones enter
        //tienes que mandar el valor del input
    }

    
    //function for update the name 
    const handleInputChange = (e) => {

        let inputValue = event.target.value;
        setPokemon(inputValue);
    }
   

    useEffect( () => {
     
    const respuestaPeticion = peticion();
    console.log(respuestaPeticion);

             
        
    },[pokemon] )
    

    return(
        <>
            <div>
                <p>{pokemon}</p>
                <label>pokemon:</label>
                <input name="name" type="text" alt="input for name" value={pokemon} onChange={(e) => handleInputChange(e)}/>
                <br></br>
                <br></br>
            </div>
        </>
    )
}