import React from 'react';
import css from "./ImageModal.module.css"
import { useState } from "react";
import Modal from 'react-modal';
import { FiCheckSquare } from "react-icons/fi";
import { FiX } from "react-icons/fi";
// import { ReactComponent as CloseIcon } from "./close-icon.svg"
// { isOpen, onClose } - методи в імеджмодал
export default function ImageModal({ obj: { urls: { small, regular } } }) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal}></button>
      <Modal
        // modal={modal}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <button onClick={openModal}>Open Modal</button> */}

        {/* <button onClick={() => onClose}> */}
        <button onClick={closeModal}>
          <FiX />
        </button>
        <img className={css.imagLag} src={regular} alt={tags} />
        <form>
          {/* <button>tab navigation <a className={css.imagLag} href={regular}></a></button> */}
        </form>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<App />, appElement);

