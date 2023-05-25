import { createContext, useState } from "react";

type ModalContextProviderProps = {
    children: React.ReactNode
}

export type ModalContextProps = {
    modalIsOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    closeModal: () => void,
    openModal: () => void
}

const DEFAULT_VALUE = {
    modalIsOpen: true,
    setIsOpen: () => [],
    closeModal: () => undefined,
    openModal: () => undefined
}

const ModalContext = createContext<ModalContextProps>(DEFAULT_VALUE);

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
    const [modalIsOpen, setIsOpen] = useState(true)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{ modalIsOpen, setIsOpen, closeModal, openModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;

export { ModalContextProvider };