import styles from './styles.module.css'

export const ContentPokedex = () => {
    return (
        <article className={styles.conteiner}>
            <article>
                <h1 className={styles.choose}>800 <strong>Pokemons</strong> for you to choose your favorite</h1>
            </article>
            <article>
                <input type="text" placeholder='Encuentra tu pokémon...' className={styles.search}/>
            </article>
        </article>
    )
}