import { useEffect, useState } from 'react';
import './App.css'


const CallApi = () => {
  const [result, setResult] = useState([]);
  
  
  useEffect( () => {
    const urlapi = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(urlapi)
    .then(resp => resp.json())
    .then(json => setResult(json.results))
    .catch(error => console.log(error))
  },[])

  return result;
}

function App() {

  //CallApi();

  const pokemonlist = CallApi();
  console.log(pokemonlist);

  return (
    <>
    
    </>
  )
}

export default App