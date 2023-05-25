import { ContentPokedex } from "../../components/ContentPokedex"
import { Header } from "../../components/Header"
import { ModalContextProvider } from "../../context/Modal"
import { PokemonContextProvider } from "../../context/Pokemon"


export const Pokedex = () => {
    return (
        <PokemonContextProvider>
            <ModalContextProvider>
                <Header />
                <ContentPokedex />
            </ModalContextProvider>
        </PokemonContextProvider>
    )
}