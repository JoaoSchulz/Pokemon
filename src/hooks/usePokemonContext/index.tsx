import { useContext } from "react";
import { PokemonContextProps } from "../../context";

export const usePokemonContext = (): PokemonContextProps => {
    const pokemonContext = useContext<PokemonContextProps> (PokemonContext);
    return pokemonContext;
}

export default usePokemonContext;