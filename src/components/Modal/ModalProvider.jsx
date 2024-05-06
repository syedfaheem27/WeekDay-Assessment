import { useContext, useState } from "react";
import { ModalContext } from "./ModalContext";
import styles from './Modal.module.css'
import { createPortal } from "react-dom";
/* A compound component */

const Modal = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <ModalContext.Provider
            value={{
                isOpen,
                openModal,
                closeModal,
            }}
        >
            {children}
        </ModalContext.Provider>
    );
};

const Action = ({ children }) => {
    const { openModal } = useContext(ModalContext);

    const handleOpen = (e) => {
        /*
        This is required so as to stop the event from bubbling upwards
        which will result in it being catched by the document.body which
        has a job of closing the modal when we click on anything other than the
        content.
        Thus, if we don't stop the event from bubbling upwards - the modal will never
        open
        */
        e.stopPropagation();
        openModal();
    }

    return (
        <div
            className={styles.action}
            onClick={handleOpen}
        >
            {children}
        </div>
    )
}

const Window = ({ children }) => {
    const { isOpen, closeModal } = useContext(ModalContext);

    if (!isOpen) return null;

    return createPortal(
        <div className={styles.overlay}>
            <div
                className="modal"
            >
                {children}
            </div>
        </div>,
        document.body
    );
};


Modal.Action = Action;
Modal.Window = Window;

export default Modal;