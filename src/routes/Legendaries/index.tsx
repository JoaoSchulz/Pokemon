import { CardModal } from "../../components/CardModal"
import { ModalContextProvider } from "../../context/Modal"

export const Home = () => {
    return (
        <>
            <ModalContextProvider>
                <CardModal />
            </ModalContextProvider>
        </>
    )
}