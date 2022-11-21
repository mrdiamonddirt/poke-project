import { useState, useEffect, version } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { IPokemonAPIResponse } from './types'


function App() {
  const [count, setCount] = useState(0)
  const [PokeData, setPokeData] = useState({} as IPokemonAPIResponse)
  const [loading, setLoading] = useState(true)
  const [PokemonNo, setPokemonNo] = useState('1')

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${PokemonNo}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setPokeData(data)
        setLoading(false)
      })


    return () => {
    
    }
  }, [PokemonNo])
  
  if (loading) {
    return <div>Loading...</div>
  }

 const { name, sprites, types, abilities, } = PokeData
  return (
    <div className="App">
      <input
          type="number"
          id="pokenum"
          value={PokemonNo}
          // onChange={(e) => setPokemonNo(e.target.value)}
        ></input>
      <input type="range"
          min="1"
          max="905"
          value={PokemonNo}
          onChange={(e) => setPokemonNo(e.target.value)}></input>
      <br/>
      Name: {name}
      <br/>
      Types {types.map((type) => (
        <div>{type.type.name}</div>
      ))}
      {sprites.other['official-artwork'].front_default && <img style={{width: '150px'}} src={sprites.other['official-artwork'].front_default} />}
      {sprites.front_default && <img src={sprites.front_default} />}
      {sprites.back_default && <img src={sprites.back_default} />}
      {sprites.other['dream_world'].front_default && <img style={{width: '150px'}} src={sprites.other['dream_world'].front_default} />}
      {abilities.map((ability) => (
        <div>{ability.ability.name}</div>
      ))}
      {/* {
      Object.keys(sprites.versions).map((key, value) => (
        <div>{
          <>
          <p>{key}</p>
          </>
          }</div>
      ))
      } */}
      </div>
  )
}

export default App
