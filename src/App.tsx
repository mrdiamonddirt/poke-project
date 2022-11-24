import { useState, useEffect, version } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { IPokemonAPIResponse } from './types'
import { Form } from './components/Form'
import { Profile } from './components/Profile'
import { Auth0Provider } from '@auth0/auth0-react'
import LoginBtn from './components/LoginBtn'
import LogoutBtn from './components/LogoutBtn'

function App() {
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
    <Auth0Provider
    domain="dev-ocnw45twlc43oyix.uk.auth0.com"
    clientId="np7A7VntMxWYRYUnKDnD9jNX5SRQS4JR"
    redirectUri={window.location.origin}
  >
    <LoginBtn />
    <Form pokemonNumber={PokemonNo} setPokemonNumber={setPokemonNo} />
    <div className="App" style={{
      width: '100vw',
      display: 'block'
    }}>
      <Profile name={name} sprites={sprites} types={types} abilities={abilities} />
  </div>
  </Auth0Provider>
    </>

  )
}

export default App
