import { CardPokemon } from '../CardPokemon'
import { useEffect, useState } from "react";
import { Pokemon, RequestPokemon } from "../../models/pokemon";
import api from "../../services/api";
import styles from './styles.module.css'

export const ContentPokedex = () => {

    const [Pokemon, setPokemon] = useState<Pokemon[]>([])
    const [count, setCount] = useState<number>(0);
    // const [search, setSearch] = useState<string>("");

    async function GetInfoPokemons(url: string): Promise<RequestPokemon> {
        const response = await api.get(url)
        const { id, types } = response.data;
        return {
            id,
            types,
            image: response.data.sprites.other.home.front_default,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat
        }
    }


    useEffect(() => {
        async function getPokemons() {
            const response = await api.get('pokemon/?limit=9')
            const { results, count } = response.data;
            const pokemonData = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const {
                        id,
                        types,
                        image,
                        attack,
                        defense
                    } = await GetInfoPokemons(pokemon.url);

                    return {
                        name: pokemon.name,
                        id,
                        types,
                        image,
                        attack,
                        defense
                    }
                })
            )
            console.log(count)
            setPokemon(pokemonData);
            setCount(count)
        }
        getPokemons()
    }, []);

    // const filterPokemon = Pokemon.filter((poke) =>
    //     poke.name.toLowerCase().includes(search.toLowerCase()));

    return (
        <article className={styles.conteiner}>
            <article className={styles.conteiner_pokedex}>
                <article>
                    <h1 className={styles.choose}> {count} <strong>Pokemons</strong> for you to choose your favorite </h1>
                </article>
                <article>
                    <input
                        type="text"
                        placeholder='Encuentra tu pokémon...'
                        className={styles.search}/>
                        {/* value={search}
                        onChange={(e) => setSearch(e.target.value)} */}
                </article>
            </article>
            <CardPokemon />
             {/* {filterPokemon.map((poke) => (
                <CardPokemon key={poke.id} pokemon={poke}/>
            ))}  */}
        </article>
    )
}