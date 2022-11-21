export interface IAbility {
        name: string;
        url: string;
}

export interface IFullAbility {
    ability: IAbility;
    is_hidden: boolean;
    slot: number
}

export interface IForm {
    name: string;
    url: string;
}



export interface IPokemonAPIResponse {
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