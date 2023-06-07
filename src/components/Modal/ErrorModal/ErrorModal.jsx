import React from "react";
import Modal from "../Modal";

export default function ErrorModal({ isOpen, openModal, closeModal}) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="modal-content">
        <div>
          <h1 className="subtitle">¡UPS!</h1>
          <p className="text">Aún quedan datos por completar</p>
        </div>
        <button onClick={closeModal} className="border-button">
          Volver
        </button>
      </div>
    </Modal>
  );
}