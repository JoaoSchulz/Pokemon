import { createContext, useState } from "react";

type ModalContextProviderProps = {
    children: React.ReactNode
}

export type ModalContextProps = {
    modalIsOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    closeModal: boolean,
    openModal: boolean
}

const DEFAULT_VALUE = {
    modalIsOpen: false,
    setIsOpen: () => [],
    closeModal: false,
    openModal: false,
}

const ModalContext = createContext<ModalContextProps>(DEFAULT_VALUE);

const ModalContextProvider = ({ children }: ModalContextProviderProps) => {
    const [modalIsOpen, setIsOpen] = useState(false)

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <ModalContext.Provider value={{ modalIsOpen, setIsOpen, closeModal}}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalContext;

export { ModalContextProvider };