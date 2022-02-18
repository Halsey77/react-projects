import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Modal = () => {
  const {isModalOpen, toggleModal} = useGlobalContext();

  return <div className={`modal-overlay ${isModalOpen && "show-modal"}`}>
    <div className="modal-container">
      <h3>Modal container</h3>
      <button className="close-modal-btn" onClick={() => toggleModal(false)}>
        <FaTimes/>
      </button>
    </div>
  </div>;
};

export default Modal;
