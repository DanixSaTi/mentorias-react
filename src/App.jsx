import './App.css';
import { PokemonWrapped } from './components/pokemonList';

function App() {
  return (
    <div className="app">
      <div className="header-pokemon">
      <h1>Pokemon List</h1> 
      </div>
      <div className='pokemon-cards'>
        <PokemonWrapped/>
      </div>
      
    </div>
    
  );
}

export default App;
