import React from 'react';
import css from "./ImageModal.module.css"
import Modal from 'react-modal';
import { FiUser } from "react-icons/fi";
import { FiThumbsUp } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
// import { FiX } from "react-icons/fi";
Modal.setAppElement("#root");
export default function ImageModal({ data, isOpen, onClose }) {
  if (!data) {
    return null;
  }
  // console.log(data);
  const { urls: { regular },
    alt_description,
    description,
    likes,
    user: { instagram_username, name }
  } = data;

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        className={css.modal}
        overlayClassName={css.overlay}
      >
        <div className={css.modalCart}>
          <img src={regular} alt={alt_description} className={css.image} />
          <div className={css.cardCommant}>
            <div className={css.comItem}>
              <p className={css.commant}>
                <strong>Author: <FiUser className={css.icon} /> </strong> {name}
              </p>
            </div>
            {instagram_username && (
              <div className={css.comItem}>
                <p className={css.commant}>
                  <strong>Instagram: <FiInstagram className={css.icon} /> </strong> @{instagram_username}
                </p>
              </div>
            )}
            {description && (
              <div className={css.comDescript}>
                <p className={css.commant}>
                  <strong>Description:</strong> {description}
                </p>
              </div>
            )}
            <div className={css.comIte}>
              <p className={css.commant}>
                <strong>Likes: <FiThumbsUp className={css.icon} />  </strong> {likes}
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}





