import "./SortModal.css";
import React, { useState } from "react";
//components
import Modal from "../Modal";

export default function SortModal({ isOpen, openModal, closeModal, setSort, setSortAscending, handleSortSubmit }) {
  const [option, setOption] = useState("Seleccioná una opción");

  function handleChange(e) {
    e.preventDefault();
    setOption(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (option === "AtoZ") {
      setSortAscending(true);
      setSort(true);
    } else if (option === "ZtoA") {
      setSort(true);
      setSortAscending(false);
    } else {
      return;
    }
    setOption("Seleccioná una opción");
    closeModal(e);
  }

  return (
    <Modal isOpen={isOpen} closeModal={closeModal}>
      <div className="sort-modal">
        <div className="close-modal">
          <div onClick={closeModal}>
            <p>X</p>
          </div>
        </div>
        <form className="sort-form" onSubmit={(e) => handleSubmit(e)}>
          <section>
            <p>Ordenar libros</p>
            <div className="select-container">
              <select value={option} onChange={handleChange}>
                <option
                  disabled
                  defaultValue={"Seleccioná una opción"}
                  style={{ display: "none" }}
                >
                  Seleccioná una opción
                </option>
                <option value="AtoZ">De la A a la Z</option>
                <option value="ZtoA">De la Z a la A</option>
              </select>
            </div>
          </section>
          <button className="border-button" onClick={(e) => handleSubmit(e)}>
            <p>Aplicar orden</p>
          </button>
        </form>
      </div>
    </Modal>
  );
}
