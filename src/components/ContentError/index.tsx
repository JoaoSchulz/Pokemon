import styles from './styles.module.css'
import equipeRocket from '../../assets/Error/Team_Rocket.svg'

export const ContentError = () => {
    return (
        <section>
            <article>
                <h1>404</h1>
            </article>
            <article>
                <img src={equipeRocket} alt="Foto central da equipe rocket" />
                <h1></h1>
                <button></button>
            </article>
        </section>
    )
}