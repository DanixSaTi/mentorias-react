// //crear mas input y un boton "Cuando des clic al boton que me muestre lo que dicen los input 
// //crear una imagen donde me direccione donde me va a mostrar información roger federer

// import { useEffect, useState } from "react"


// const peticion = () => {

//     return {pokemon: "pikachu"}

// }



// export const InputStageComponent = () => {


// //primer valor es la variable y la segunda es la función
//     const [pokemon, setPokemon] = useState("");

//     const enviarDatos = () => {
//         //console.log("Enviar datos");
//         const respuestaPeticion = peticion();
//         console.log(respuestaPeticion);
//     }

    
//     //function for update the name 
//     const handleInputChange = (e) => {

//         let inputValue = event.target.value;
//         setPokemon(inputValue);
//     }


//     return(
//         <>
//             <div>
//                 <p>{pokemon}</p>
//                 <label>pokemon:</label>
//                 <input name="name" type="text" alt="input for name" value={pokemon} onChange={(e) => handleInputChange(e)}/>
//                 <br></br>
//                 <br></br>
//                 <button onClick={enviarDatos}>Show</button>
//             </div>
//         </>
//     )
// }

import { useEffect, useState } from "react"

