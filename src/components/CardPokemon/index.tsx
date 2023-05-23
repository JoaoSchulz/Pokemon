import { useEffect, useState } from "react";
import { Pokemon, RequestPokemon } from "../../models/pokemon";
import api from "../../services/api";

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

    return (
        /*{Pokemon.map((poke) => (
            <h3>{poke.name}</h3>
            <img src={poke.image} alt="" /> 
        ))}*/
        <article>
            <article className={}>
                <article>
                    <article>
                        <h1>nome</h1>
                    </article>
                    <article>
                        <div>400</div>
                        <div>40</div>
                    </article>
                    <article>
                        <p>Attack</p>
                        <p>Defense</p>
                    </article>
                </article>
                <article>
                    <img src="" alt="" />
                </article>
            </article>
        </article>
    )
}