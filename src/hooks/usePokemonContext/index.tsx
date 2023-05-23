import { useContext } from "react";
import { PokemonContextProps } from "../../context";
import { Pokemon } from "../../models/pokemon";

export const usePokemonContext = (): PokemonContextProps => {
    const pokemonContext = useContext<PokemonContextProps> (PokemonContext);
    return pokemonContext;
}

export default usePokemonContext;