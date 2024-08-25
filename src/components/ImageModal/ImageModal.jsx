import React from 'react';
import Modal from 'react-modal';
import { FiCheckSquare } from "react-icons/fi";
import { FiX } from "react-icons/fi";
// import { ReactComponent as CloseIcon } from "./close-icon.svg"
// { isOpen, onClose } - методи в імеджмодал
export default function ImageModal() {
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

  const [modalIsOpen, setIsOpen] = React.useState(false);
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
        // isOpen={isOpen}
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
        <form>
          <input />
          <button>tab navigation</button>
          <button>stays</button>
          <button>inside</button>
          <button>the modal</button>
        </form>
      </Modal>
    </div>
  );
}

// ReactDOM.render(<App />, appElement);

