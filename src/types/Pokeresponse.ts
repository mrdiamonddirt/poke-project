export interface IFullAbility {
    ability: IBasicType;
    is_hidden: boolean;
    slot: number
}

export interface IBasicType {
    name: string;
    url: string;
}

export interface IIndices {
    game_index: number;
    version: {
        name: string;
        url: string;
    }
}
 export interface IMove {
    move: IBasicType;
    version_group_details: {
        level_learned_at: number;
        move_learn_method: IBasicType
        version_group: IBasicType
    }[]
}
export interface IBasicSprites {
    back_default: string | null;
    back_female: string | null;
    back_shiny: string | null;
    back_shiny_female: string | null;
    front_default: string | null;
    front_shiny: string | null;
    front_male: string | null;
    front_female: string | null;
}

export interface ISprites extends IBasicSprites {
    other: {
        dream_world: {
            front_default: string | null;
        }
        "official-artwork" : IBasicSprites
    }
    home: IBasicSprites

    versions: {
        "generation-i": {
            "red-blue": IBasicSprites,
            yellow: IBasicSprites
        },
        "generation-ii": {
            crystal: IBasicSprites,
            gold: IBasicSprites,
            silver: IBasicSprites
        },
        "generation-iii": {
            emerald: IBasicSprites,
            "firered-leafgreen": IBasicSprites,
            "ruby-sapphire": IBasicSprites
        },
        "generation-iv": {
            "diamond-pearl": IBasicSprites,
            "heartgold-soulsilver": IBasicSprites,
            platinum: IBasicSprites
        },
        "generation-v": {
            "black-white": IBasicSprites
        },
        "generation-vi": {
            "omegaruby-alphasapphire": IBasicSprites,
            "x-y": IBasicSprites
        },
        "generation-vii": {
            icons: {
                front_default: string | null;
            }
            "ultra-sun-ultra-moon": IBasicSprites
        },
        "generation-viii": {
            icons: {
                front_default: string | null;
            }
        }
    }
}
export interface IStat {
    base_stat: number;
    effort: number;
    stat: IBasicType
}

export interface IType {
    slot: number
    type: IBasicType
}

export interface IPokemonAPIResponse {
    abilities: IFullAbility[]
    base_experience: number
    forms: IBasicType
    game_indices: any[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: IBasicType
    moves: any[]
    name: string
    order: number
    species: IBasicType;
    sprites: ISprites
    stats: IStat
    types: IType[]
    weight: number
  }