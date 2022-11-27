import { ISprites } from '../types';
interface ProfileProps {
    abilities: Abilities[],
    sprites: ISprites,
    name: string,
    types: any[],
}
interface Abilities {
    ability: {
        name: string,
        url: string,
    },
}
export const Profile = (props: ProfileProps) => {
    const { sprites, name, types, abilities } = props

    return (
        <div className="pokemon-profile">
            <p>Name: {name}</p>
            <p>Types:</p>
            <ul>
                {types.map((type: any) => <li>{type.type.name}</li>)}
            </ul>

            {/* <p>Types: {Object.values(types).join(', ')}</p> */}
            <div className={`pokemon-profile images`}>
                {sprites.other['official-artwork']?.front_default && <img style={{width: '150px'}} src={sprites.other['official-artwork'].front_default} />}
                {sprites.front_default && <img src={sprites.front_default.toString()} />}
                {sprites.back_default && <img src={sprites.back_default.toString()} />}
                {sprites.other['dream_world'].front_default && <img style={{width: '150px'}} src={sprites.other['dream_world'].front_default.toString()} />}
            </div>
            <div className={`pokemon-profile abilities`}>
                {abilities.map((ability) => (
                    <div>{ability.ability.name}</div>
                ))}
            </div>
        </div>
    )
}