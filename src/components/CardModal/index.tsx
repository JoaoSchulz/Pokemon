import Modal from "react-modal";
import { useContext } from "react";
import ModalContext from "../../context/Modal";

export const CardModal = () => {

    const { modalIsOpen, closeModal, openModal } = useContext(ModalContext)

    return (
        <article>
            <Modal isOpen={modalIsOpen} onRequestClose={openModal} className="modal-content">
                <article>
                    <article>
                        <article>
                            <img src="" alt="" />
                        </article>
                        <article>
                            <article>
                                <article>
                                    <h1>nome</h1>
                                    <p>generation</p>
                                    <p>id</p>
                                </article>
                            </article>
                            <article>
                                <h2>abilites</h2>
                                <h2>overgrow</h2>
                            </article>
                        </article>
                    </article>
                </article>
            </Modal>
        </article>
    )
}