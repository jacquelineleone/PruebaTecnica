import React from "react";
import Modal from "../Modal";

export default function SuccessModal({ isOpen, openModal, closeModal}) {
  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="modal-content">
        <div>
          <h1 className="subtitle">¡Genial!</h1>
          <p className="text">El libro fue registrado con éxito</p>
        </div>
        <button onClick={closeModal} className="border-button">
          Cerrar
        </button>
      </div>
    </Modal>
  );
}
