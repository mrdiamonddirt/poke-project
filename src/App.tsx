import { useState, useMemo, useEffect, version } from 'react'
import './App.css'
import { TPokemonAPIResponse } from './types'
import {
  Form,
  LoginButton,
  LogoutButton,
  Profile,
  ProfileComponent,
} from './components'
import { Auth0Provider } from '@auth0/auth0-react'

const App = () => {
  const [pokeData, setPokeData] = useState<TPokemonAPIResponse>(undefined)
  const [pokemonNo, setPokemonNo] = useState<number>(1)

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNo}`)
      .then((response) => response.json())
      .then((data) => {
        setPokeData(data)
      })
    }, 500)

    return () => {
      setPokeData(undefined)
    }
  }, [pokemonNo])
  
  if (pokeData === undefined) {
    return <>
      <Form pokemonNumber={pokemonNo} setPokemonNumber={setPokemonNo} />
      <div>Loading...</div>
    </> 
  }

  const { name, sprites, types, abilities, } = pokeData

  return (
    <>
      <Auth0Provider
        domain="dev-ocnw45twlc43oyix.uk.auth0.com"
        clientId="np7A7VntMxWYRYUnKDnD9jNX5SRQS4JR"
        redirectUri={window.location.origin}
      >
        <LoginButton />
        <LogoutButton />
        <ProfileComponent />
        <Form pokemonNumber={pokemonNo} setPokemonNumber={setPokemonNo} />
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
