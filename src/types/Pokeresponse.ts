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
    back_default: TSprite;
    back_female: TSprite;
    back_shiny: TSprite;
    back_shiny_female: TSprite;
    front_default: TSprite;
    front_shiny: TSprite;
    front_male: TSprite;
    front_female: TSprite;
}

export type TSprite = string | undefined;

export interface ISprites extends IBasicSprites {
    other: {
        dream_world: {
            front_default: TSprite;
        }
        "official-artwork" : IBasicSprites;
    }
    home: TSprite;

    versions: {
        "generation-i": {
            "red-blue": TSprite;
            yellow: TSprite;
        },
        "generation-ii": {
            crystal: TSprite;
            gold: TSprite;
            silver: TSprite;
        },
        "generation-iii": {
            emerald: TSprite;
            "firered-leafgreen": TSprite;
            "ruby-sapphire": TSprite;
        },
        "generation-iv": {
            "diamond-pearl": TSprite;
            "heartgold-soulsilver": TSprite;
            platinum: TSprite;
        },
        "generation-v": {
            "black-white": TSprite;
        },
        "generation-vi": {
            "omegaruby-alphasapphire": TSprite;
            "x-y": TSprite;
        },
        "generation-vii": {
            icons: {
                front_default: TSprite;
            }
            "ultra-sun-ultra-moon": TSprite;
        },
        "generation-viii": {
            icons: {
                front_default: TSprite;
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

export type TPokemonAPIResponse =  IPendingResponse | ISuccessfulResponse;

export type IPendingResponse = undefined;
export interface ISuccessfulResponse {
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