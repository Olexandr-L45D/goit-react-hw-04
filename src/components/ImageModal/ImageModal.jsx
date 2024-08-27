import React from 'react';
import style from "./ImageModal.module.css"
import { useState } from "react";
import Modal from 'react-modal';
import { FiCheckSquare } from "react-icons/fi";
import { FiX } from "react-icons/fi";
// import { ReactComponent as CloseIcon } from "./close-icon.svg"
// { isOpen, onClose } - методи в імеджмодал
export default function ImageModal({ onOpen, onAfteropen, onClose }) {
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
  onOpen();
  onAfteropen();
  onClose();
  return (
    <div>
      {/* <button onClick={openModal}></button> */}
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className={style.imagLag} ref={(_img) => (img = _img)}></h2>
        {/* <a className={style.imagLag} href={regular}></a> */}
        {/* <img className={style.imagLag} ref={(_img) => (img = _img)} /> */}
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
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

