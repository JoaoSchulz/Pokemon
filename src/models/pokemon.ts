type PokemonType = {
    type: {
        name:string
    }
}

export type RequestPokemon = {
    id: number;
    types: PokemonType[]
    image: string
    attack: number
    defense: number
}
export type Pokemon = {
    name: string
    url: string
    id: number
    types: PokemonType[]
    image: string
    attack: number
    defense: number
}

export type TypePokemonColor = 'stile' | 'dark' | 'rock' | 'grass' | 'bug' | 'ice' | 'water' | 'fire' | 'fighting' | 'dragon' | 'normal' | 'gosth' | 'poison' | 'psychic' | 'fairy' | 'ghost' | 'ground' | 'electric' | 'flying';