import { useEffect, useState } from "react";
import { Pokemon, RequestPokemon } from "../../models/pokemon";
import api from "../../services/api";
import styles from './styles.module.css'

export const CardPokemon = () => {
    const [Pokemon, setPokemon] = useState<Pokemon[]>([])

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
            const { results } = response.data;
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
            console.log(pokemonData);
            setPokemon(pokemonData);
        }
        getPokemons()
    }, [])

    const changeColors = {

        stile: '#A1A1A1',
        dark: '#A1A1A1',
        rock: '#A1A1A1',
        grass: '#70A83B',
        bug: '#70A83B',
        ice: '#A2CFF0',
        water: '#A2CFF0',
        fire: '#F76745',
        fighting: '#F76745',
        dragon: '#F76745',
        normal: '#76AADB',
        gosth: '#76AADB',
        poison: '#A974BC',
        psychic: '#A974BC',
        fairy: '#A974BC',
        ghost: '#A974BC',
        ground: '#9B597B',
        electric: '#F7C545'
    }

    return (
        <article className={styles.conteiner_Pokemon_Card}>
            {Pokemon.map((poke) => (
                <article key={poke.id} className={styles.conteiner_card}>
                    <article className={styles.conteiner_card_left}>
                        <article className={styles.card_name}>
                            <h1>{poke.name}</h1>
                        </article>
                        <article className={styles.card_divs}>
                            <div className={styles.card_atribute_value}>{poke.attack}</div>
                            <div className={styles.card_atribute_value}>{poke.defense}</div>
                        </article>
                        <article className={styles.card_atribute}>
                            <p>Attack</p>
                            <p>Defense</p>
                        </article>
                        <article className={styles.card_type}>
                            <div style={{ backgroundColor: changeColors[poke.types[0].type.name] }} className={styles.card_type_value}>{poke.types[0].type.name}</div>
                            <div style={{ backgroundColor: poke.types.length == 2 ? changeColors[poke.types[1].type.name] : changeColors[poke.types[0].type.name] }} className={styles.card_type_value}>{poke.types.length == 2 ? poke.types[1].type.name : poke.types[0].type.name}</div>
                        </article>
                    </article>
                    <article style={{ backgroundColor: changeColors[poke.types[0].type.name] }} className={styles.conteiner_card_right}>
                        <img src={poke.image} alt="Imagem do card" className={styles.conteiner_card_img} />
                    </article>
                </article>
            ))};
        </article>
    )
}