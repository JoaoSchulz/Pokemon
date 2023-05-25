import Modal from "react-modal";
import { useContext } from "react";
import ModalContext from "../../context/Modal";
import styles from './styles.module.css'
import  logo  from '../../assets/PokedexSVG/x-symbol-svgrepo-com.svg'

export const CardModal = () => {

    const { modalIsOpen, closeModal } = useContext(ModalContext)

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example-modal"
            overlayClassName="modal-overlay"
            className="modal-content">
            <article className={styles.conteiner} onClick={closeModal}>
                <article className={styles.conteiner_card}>
                    <article className={styles.conteiner_left}>
                        <img alt="" />
                    </article>
                    <article className={styles.conteiner_right}>
                        <article className={styles.conteiner_right_name_id}>
                            <h1>nome</h1>
                            <p>generation</p>
                            <span>id</span>
                            <img src={logo} alt="" onClick={closeModal}/>
                        </article>
                        <article className={styles.conteiner_right_abilites}>
                            <h2>abilites</h2>
                            <h2>Overgrow - Chlorophyll</h2>
                        </article>
                        <article className={styles.conteiner_right_heal_experience}>
                            <article className={styles.conteiner_right_heal_experience_content}>
                                <h1 className={styles.conteiner_right_heal_experience_content_h1}>Healthy Points</h1>
                                <h2 className={styles.conteiner_right_heal_experience_content_h2}>numero</h2>
                                <div className={styles.conteiner_right_heal_experience_content_div}></div>
                            </article>
                            <article className={styles.conteiner_right_heal_experience_content}>
                                <h1 className={styles.conteiner_right_heal_experience_content_h1}>Experience</h1>
                                <h2 className={styles.conteiner_right_heal_experience_content_h2}>numero</h2>
                                <div className={styles.conteiner_right_heal_experience_content_div1}></div>
                            </article>
                        </article>
                        <article className={styles.conteiner_right_atribute}>
                            <article className={styles.conteiner_right_atribute_values}>
                                <div className={styles.conteiner_right_atribute_values_div}>2</div>
                                <h1>defense</h1>
                            </article>
                            <article className={styles.conteiner_right_atribute_values}>
                                <div className={styles.conteiner_right_atribute_values_div}>2</div>
                                <h1>Attack</h1>
                            </article>
                            <article className={styles.conteiner_right_atribute_values}>
                                <div className={styles.conteiner_right_atribute_values_div}>2</div>
                                <h1>SpAttack</h1>
                            </article>
                            <article className={styles.conteiner_right_atribute_values}>
                                <div className={styles.conteiner_right_atribute_values_div}>2</div>
                                <h1>SpDefende</h1>
                            </article>
                        </article>
                    </article>
                </article>
            </article>
        </Modal >
    )
}