import Modal from "react-modal";
import { useContext } from "react";
import ModalContext from "../../context/Modal";
import styles from './styles.module.css'
import PokemonContext from "../../context/Pokemon";

export const CardModal = () => {

    const { modalIsOpen, closeModal } = useContext(ModalContext)
    const { pokemon } = useContext(PokemonContext)

    return (
        <article className={styles.conteiner}>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example-modal"
                overlayClassName="modal-overlay"
                className="modal-content">
                <article className={styles.conteiner_card}>
                    <article className={styles.conteiner_left}>
                        <img alt="" />
                    </article>
                    <article className={styles.conteiner_right}>
                        <article className={styles.conteiner_right_name_id}>
                            <h1>nome</h1>
                            <p>generation</p>
                            <span>id</span>
                        </article>
                        <article className={styles.conteiner_right_abilites}>
                            <h2>abilites</h2>
                            <h2>overgrow</h2>
                        </article>
                        <article>
                            <article>
                                <h1>healthy</h1>
                                <h1>numero</h1>
                                <div></div>
                            </article>
                            <article>
                                <h1>experience</h1>
                                <h1>numero</h1>
                                <div></div>
                            </article>
                            <article>
                                <article>
                                    <h1>numero</h1>
                                    <h1>defense</h1>
                                </article>
                                <article>
                                    <h1>numero</h1>
                                    <h1>Attack</h1>
                                </article>
                                <article>
                                    <h1>numero</h1>
                                    <h1>Sp Attack</h1>
                                </article>
                                <article>
                                    <h1>numero</h1>
                                    <h1></h1>
                                </article>
                            </article>
                        </article>
                    </article>
                </article>
            </Modal>
        </article>
    )
}