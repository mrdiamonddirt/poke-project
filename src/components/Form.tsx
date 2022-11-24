interface FormProps { 
    pokemonNumber: number,
    setPokemonNumber: Function
}

export const Form = (props: FormProps) => {
    const { pokemonNumber, setPokemonNumber } = props

    return (
        <form style={{
            position: 'fixed',
            top:0,
            width: '100vw',
            display: 'block'
        }}>
            <input
                type="number"
                id="pokenum"
                defaultValue={pokemonNumber}
                value={pokemonNumber}
                onChange={(e) => setPokemonNumber(parseInt(e.target.value))}
            >
            </input>
            <input
                type="range"
                min="1"
                max="905"
                defaultValue={pokemonNumber}
                value={pokemonNumber}
                onChange={(e) => setPokemonNumber(parseInt(e.target.value))}>
            </input>
        </form>
    )
}