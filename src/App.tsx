import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { IPokemonAPIResponse } from './types'


function App() {
  const [count, setCount] = useState(0)
  const [PokeData, setPokeData] = useState({} as IPokemonAPIResponse)
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/1')
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPokeData(data)
      })


    return () => {
    
    }
  }, [])
  

  return (
    <div className="App">
      {
        JSON.stringify(PokeData.abilities)
      }
    </div>
  )
}

export default App
