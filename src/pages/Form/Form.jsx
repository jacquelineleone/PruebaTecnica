import "./Form.css";
import React, { useState } from "react";
//components
import Menu from "../../components/Menu/Menu";
import FirstStep from "./Steps/FirstStep/FirstStep";
import SecondStep from "./Steps/SecondStep/SecondStep";
import ThirdStep from "./Steps/ThirdStep/ThirdStep";
import Modal from "../../components/Modal/Modal";
//hooks
import { useForm } from "../../hooks/useForm";
import { useModal } from "../../hooks/useModal";

export default function Form() {
  const [page, setPage] = useState(0);
  const [isOpen, openModal, closeModal] = useModal(false);

  const initialForm = {
    authorName: "",
    authorLastname: "",
    book: "",
    editorial: "",
    categories: [],
    description: "",
    publishDate: "",
    isbn: "",
  };

  const { form, errors, response, handleChange, handleSubmit } =
    useForm(initialForm);

  const FormPages = ["Page 1", "Page 2", "Page 3"];

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstStep form={form} handleChange={handleChange} />;
    } else if (page === 1) {
      return <SecondStep form={form} handleChange={handleChange} />;
    } else {
      return <ThirdStep form={form} handleChange={handleChange} />;
    }
  };

  return (
    <div className="page-container">
      <Menu />
      <div>{PageDisplay()}</div>
      <div className="button-container">
        {page !== 0 && (
          <button
            className="blue-button"
            onClick={() => setPage((currentPage) => currentPage - 1)}
          >
            Atrás
          </button>
        )}
        <button
          className={page === 0 ? "blue-button long-button" : "border-button"}
          onClick={(e) => {
            if (page === FormPages.length - 1) {
              handleSubmit(e);
              openModal(e);
            } else {
              setPage((currentPage) => currentPage + 1);
            }
          }}
        >
          {page === FormPages.length - 1 ? "Finalizar" : "Continuar"}
        </button>
      </div>
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
    </div>
  );
}
