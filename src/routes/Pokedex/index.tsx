import { ContentPokedex } from "../../components/ContentPokedex"
import { Header } from "../../components/Header"
import { PokemonContextProvider } from "../../context/Pokemon"


export const Pokedex = () => {
    return (
        <PokemonContextProvider>
            <Header />
            <ContentPokedex />
        </PokemonContextProvider>
    )
}