//crear mas input y un boton "Cuando des clic al boton que me muestre lo que dicen los input  //Como funciona la teoria de las funciones de llave"

import { useState } from "react"

export const InputStageComponent = () => {



//primer valor es la variable y la segunda es la función
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState ("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [address, setAddress] = useState("");

    //function for update the name 
    const handleInputChange = (e) => {

        let inputValue = event.target.value;
        setName(inputValue);
    }
    //function for update the lastname
    const handleInputchangeln = (e) => {
        let inputValueln = event.target.value;
        setLastname(inputValueln);
    }

    //function for update the phone number
    const handleInputchangeph = (e) => {
        let inputValueph = event.target.value;
        setPhoneNumber(inputValueph);
    }

    //function for update the address
    const handleInputchangead = (e) => {
        let inputValuead = event.target.value;
        setAddress(inputValuead);
    }
    

    return(
        <>
        <div>
            <h3>Hola {name} {lastname}</h3>
            <h3>Tu numero de celular es: {phoneNumber}</h3>
            <h3>Tu direcciónn es: {address}</h3>
        </div>
            <div>
                <label>Name:</label>
                <input name="name" type="text" alt="input for name" value={name} onChange={(e) => handleInputChange()}/>
                <br></br>
                <br></br>
                <label>Lastname:</label>
                <input name="lastname" type="text" alt="input for lastname" value={lastname} onChange={(e) => handleInputchangeln()}/>
                <br></br>
                <br></br>
                <label>Phone number:</label>
                <input name="phone-number" type="text" alt="input for phone-number" value={phoneNumber} onChange={(e) => handleInputchangeph()}/>
                <br></br>
                <br></br>
                <label>Address:</label>
                <input name="address" type="text" alt="input for address" value={address} onChange={(e) => handleInputchangead()}/>
                <br></br>
                <br></br>
                <button onClick={() => alert(`Hola ${name} ${lastname}! Tu número de celular es: ${phoneNumber}, y tu dirección es: ${address}`)}>Show</button>
            </div>
        </>
    )
}