import Modal from "react-modal";
import { useState } from "react";
import styles from './style.module.css';

export const CardModal = () => {

    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <article className="">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal-content"
            >

            </Modal>
        </article>
    )
}