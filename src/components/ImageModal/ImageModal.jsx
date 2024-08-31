import React from 'react';
import css from "./ImageModal.module.css"
import Modal from 'react-modal';
import { FiX } from "react-icons/fi";

export default function ImageModal({ data, isOpen, onClose, afteOpan }) {
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
  Modal.setAppElement("#modal");

  return (
    <div>
      <Modal
        // isOpen={isOpen}
        // afteOpan={afteOpan}
        // onRequestClose={onRequestClose}
        // className={css.modal}
        // overlayClassName={css.overlay}

        isOpen={isOpen}
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



