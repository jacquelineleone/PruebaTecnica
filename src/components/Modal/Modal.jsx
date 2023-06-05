import "./Modal.css";
import React from "react";

export default function Modal({ children, isOpen, closeModal, width, height }) {
  const handleModalClick = (e) => e.stopPropagation();

  return (
    <div className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
      <div
        className="modal-container"
        onClick={handleModalClick}
        style={{ width: width, height: height }}
      >
        {children}
      </div>
    </div>
  );
}
