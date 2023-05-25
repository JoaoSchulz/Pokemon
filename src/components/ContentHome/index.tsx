import styles from './styles.module.css'

import pikachu from '../../assets/ContentHomeSVG/BannerComplete.svg'
import { NavLink } from 'react-router-dom'

export const ContentHome = () => {
    return (
        <section className={styles.conteiner}>
            <article className={styles.conteiner_home}>
                <article className={styles.conteiner_left}>
                    <h1 className={styles.conteiner_h1}><strong>Find</strong> all your favorite <strong>Pokemon</strong></h1>
                    <p className={styles.conteiner_p}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <NavLink to={`/Pokedex`} className={styles.conteiner_button_link}>
                        <button className={styles.conteiner_button}>See Pokemons</button>
                    </NavLink>
                </article>
                <img src={pikachu} alt="Pikachu na tela" className={styles.img_pikachu} />
            </article>
        </section>
    )
}