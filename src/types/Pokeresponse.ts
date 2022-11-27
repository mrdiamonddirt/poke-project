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
    back_default: string | undefined;
    back_female: string | undefined;
    back_shiny: string | undefined;
    back_shiny_female: string | undefined;
    front_default: string | undefined;
    front_shiny: string | undefined;
    front_male: string | undefined;
    front_female: string | undefined;
}

export interface ISprites extends IBasicSprites {
    other: {
        dream_world: {
            front_default: string | undefined;
        }
        "official-artwork" : IBasicSprites | undefined;
    }
    home: IBasicSprites | undefined;

    versions: {
        "generation-i": {
            "red-blue": IBasicSprites | undefined;
            yellow: IBasicSprites | undefined;
        },
        "generation-ii": {
            crystal: IBasicSprites | undefined;
            gold: IBasicSprites | undefined;
            silver: IBasicSprites | undefined;
        },
        "generation-iii": {
            emerald: IBasicSprites | undefined;
            "firered-leafgreen": IBasicSprites | undefined;
            "ruby-sapphire": IBasicSprites | undefined;
        },
        "generation-iv": {
            "diamond-pearl": IBasicSprites | undefined;
            "heartgold-soulsilver": IBasicSprites | undefined;
            platinum: IBasicSprites | undefined;
        },
        "generation-v": {
            "black-white": IBasicSprites | undefined;
        },
        "generation-vi": {
            "omegaruby-alphasapphire": IBasicSprites | undefined;
            "x-y": IBasicSprites | undefined;
        },
        "generation-vii": {
            icons: {
                front_default: string | undefined;
            }
            "ultra-sun-ultra-moon": IBasicSprites | undefined;
        },
        "generation-viii": {
            icons: {
                front_default: string | undefined;
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