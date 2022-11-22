interface ProfileProps {
    abilities: Abilities[],
    sprites: Sprites,
    name: string,
    types: any[],
}

interface Sprites {
    front_default: string,
    back_default: string,
    front_shiny: string,
    back_shiny: string,

    other: {
        dream_world: {
            front_default: string,
        },
        'official-artwork': {
            front_default: string,
        },
    },
}

interface Abilities {
    ability: {
        name: string,
        url: string,
    },
}
export const Profile = (props: ProfileProps) => {
    const { sprites, name, types, abilities } = props

    console.log(types);
    return (
        <div className="pokemon-profile">
            <p>Name: {name}</p>
            <p>Types:</p>
            <ul>
                {types.map((type: any) => <li>{type.type.name}</li>)}
            </ul>

            {/* <p>Types: {Object.values(types).join(', ')}</p> */}
            <div className={`pokemon-profile images`}>
                {sprites.other['official-artwork'].front_default && <img style={{width: '150px'}} src={sprites.other['official-artwork'].front_default} />}
                {sprites.front_default && <img src={sprites.front_default} />}
                {sprites.back_default && <img src={sprites.back_default} />}
                {sprites.other['dream_world'].front_default && <img style={{width: '150px'}} src={sprites.other['dream_world'].front_default} />}
            </div>
            <div className={`pokemon-profile abilities`}>
                {abilities.map((ability) => (
                    <div>{ability.ability.name}</div>
                ))}
            </div>
        </div>
    )
}