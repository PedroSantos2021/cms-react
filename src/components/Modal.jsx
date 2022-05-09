import React from "react";
import '../assets/styles/components/Modal.scss';

const Modal = ({ children, isOpen, closeModal }) => {
    const handleModalContainerClick = (e) => e.stopPropagation();
    return (
        <article className={`modal ${isOpen && "isOpen"}`} onClick={closeModal}>
            <div className="modal__container" onClick={handleModalContainerClick}>
                <button className="modal__close" onClick={closeModal}><i className="fas fa-times"></i></button>
                { children }
            </div>
        </article>
    );
}

export default Modal;