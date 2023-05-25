import { CardPokemon } from '../CardPokemon'
import { useContext } from "react";
import styles from './styles.module.css'
import PokemonContext from '../../context/Pokemon';
import { CardModal } from '../CardModal';

export const ContentPokedex = () => {

    const { count } = useContext(PokemonContext)

    return (
        <article className={styles.conteiner}>
            <article className={styles.conteiner_pokedex}>
                <article>
                    <h1 className={styles.choose}>  {count} <strong>Pokemons</strong> for you to choose your favorite </h1>
                </article>
                <article>
                    <input
                        type="text"
                        placeholder='Encuentra tu pokémon...'
                        className={styles.search} />
                </article>
            </article>
            <CardPokemon />
        </article>
    )
}