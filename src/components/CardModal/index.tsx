import Modal from "react-modal";
import { useContext } from "react";
import ModalContext from "../../context/Modal";

export const CardModal = () => {

    const {modalIsOpen , closeModal} = useContext(ModalContext)

    return (
        <article className="">
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal-content">
            </Modal>
        </article>
    )
}