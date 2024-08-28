import React from 'react';
import css from "./ImageModal.module.css"
import Modal from 'react-modal';
import { FiX } from "react-icons/fi";

Modal.setAppElement("#root");
export default function ImageModal({ isOpen, data, onClose, afteOpan }) {
  if (!data) {
    return null;
  }
  const {
    regular,
    alt_description,
    description,
    likes,
    instagram_username,
    name,
  } = data;

  // const customStyles = {
  //   content: {
  //     top: '50%',
  //     left: '50%',
  //     right: 'auto',
  //     bottom: 'auto',
  //     marginRight: '-50%',
  //     transform: 'translate(-50%, -50%)',
  //   },
  // };

  // onOpen();
  // onAfteropen();
  // onClose();
  return (
    <div>
      <Modal
        isOpen={isOpen}
        afteOpan={afterOpenModal}
        onRequestClose={onRequestClose}
        className={css.modal}
        overlayClassName={css.overlay}

      >
        <div className={css.content}>

          <img src={regular} alt={alt_description} className={css.image} />

       
          <div className={css.details}>
            <p>
              <strong>Author:</strong> {name}
            </p>
            {instagram_username && (
              <p>
                <strong>Instagram:</strong> @{instagram_username}
              </p>
            )}
            {description && (
              <p>
                <strong>Description:</strong> {description}
              </p>
            )}
            <p>
              <strong>Likes:</strong> {likes}
            </p>
          </div>
        </div>
        <button onClose={onClose}>
          <FiX />
        </button>
      </Modal>
    </div>
  );
}

// <Modal
//   isOpen={modalIsOpen}
//   onAfterOpen={afterOpenModal}
//   onRequestClose={closeModal}
//   style={customStyles}
//   contentLabel="Example Modal"
// >


