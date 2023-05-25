import { CardPokemon } from '../CardPokemon'
import { useContext } from "react";
import styles from './styles.module.css'
import PokemonContext from '../../context/Pokemon';
import { CardModal } from '../CardModal';
import bola from '../../assets/PokedexSVG/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon-removebg-preview.png'

export const ContentPokedex = () => {

    const { pokemon, count, search, setSearch, morePokemon, setMorePokemon } = useContext(PokemonContext)

    const filtPokemon = pokemon.filter((poke) => poke.name.toLowerCase().includes(search.toLowerCase()));


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
                        className={styles.search}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />
                </article>
            </article>
            <CardModal />
            <CardPokemon pokemon={filtPokemon} />
            <button className={styles.conteiner_button} onClick={() => setMorePokemon(morePokemon + 9)}
            type='submit'> <img className={styles.image_button} src={bola} alt="" /> </button>
        </article>
    )
}

//<img className={styles.image_button} src={bola} alt="" />