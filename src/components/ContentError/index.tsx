import styles from './styles.module.css'
import equipeRocket from '../../assets/Error/Team_Rocket.svg'
import { NavLink } from 'react-router-dom'

export const ContentError = () => {
    return (
        <section className={styles.conteiner}>
            <article className={styles.conteiner_text_erro}>
                <h1>404</h1>
            </article>
            <article className={styles.conteiner_front}>
                <img src={equipeRocket} alt="Foto central da equipe rocket" className={styles.img_rocket} />
                <article className={styles.conteiner_texts}>
                    <h1 className={styles.conteiner_texts_white}>The rocket team</h1>
                    <h1 className={styles.conteiner_texts_black}>has won this time.</h1>
                </article>
                <button className={styles.conteiner_button}> <NavLink to={`/`} className={styles.conteiner_button_link}>Return</NavLink></button>
            </article>
        </section>
    )
}