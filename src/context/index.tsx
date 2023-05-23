import { createContext } from 'react';
import { Pokemon } from '../models/pokemon'

type PokemonContextProviderProps = {
    children.React.ReactNode
}

export type PokemonContextProps = {
    pokemonState: Pokemon[],
    setPokemonState: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

const DEFAULT_VALUE = {
    pokemonState: [],
    setPokemonState: () => [{}], 
}

const ToDoContext = createContext<PokemonContextProps>(DEFAULT_VALUE);

