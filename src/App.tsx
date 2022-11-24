import { useState, useEffect, version } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { IPokemonAPIResponse } from './types'
import { Form } from './components/Form'
import { Profile } from './components/Profile'

function App() {
  const [count, setCount] = useState(0)
  const [PokeData, setPokeData] = useState({} as IPokemonAPIResponse)
  const [loading, setLoading] = useState(true)
  const [PokemonNo, setPokemonNo] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonNo}`)
      .then((response) => response.json())
      .then((data) => {
        setPokeData(data)
        setLoading(false)
      })
    }, 500)

    return () => {
      setPokeData({} as IPokemonAPIResponse)
      setLoading(true)
    }
  }, [PokemonNo])
  
  if (loading) {
    return <>
      <Form pokemonNumber={PokemonNo} setPokemonNumber={setPokemonNo} />
      <div>Loading...</div>
    </> 
  }

  const { name, sprites, types, abilities, } = PokeData

  return (
    <>
    <Form pokemonNumber={PokemonNo} setPokemonNumber={setPokemonNo} />
    <div className="App" style={{
      width: '100vw',
      display: 'block'
    }}>
      <Profile name={name} sprites={sprites} types={types} abilities={abilities} />
  </div>
    </>

  )
}

export default App
