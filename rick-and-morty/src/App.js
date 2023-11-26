import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { useState, useEffect } from 'react';

function App() {
  // const [query, setQuery] = useState("")
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {data} = await axios.get(`https://rickandmortyapi.com/api/character/`)
        setCharacters(data.results)
      } catch (error) {
        console.error(error)
      }
    }
  }, [])

  return (
    <div className="App">

      <div className='results'>
        {characters.map(character => (
          <div key={character.id}>
            <img src={character.image} alt={character.name} />
              {character.name}
          </div>
        ))}
      </div>
      
    </div>

    
  );
}

export default App;
