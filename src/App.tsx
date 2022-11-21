import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

interface IPokemonAPIResponse {
  abilities: any[]
  base_experience: number
  forms: any[]
  game_indices: any[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: any[]
  name: string
  order: number
  species: any
  sprites: any
  stats: any[]
  types: any[]
  weight: number
}

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
