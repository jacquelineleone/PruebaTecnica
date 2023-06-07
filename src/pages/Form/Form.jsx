import "./Form.css";
import React, { useState } from "react";
//components
import Menu from "../../components/Menu/Menu";
import FirstStep from "./Steps/FirstStep/FirstStep";
import SecondStep from "./Steps/SecondStep/SecondStep";
import ThirdStep from "./Steps/ThirdStep/ThirdStep";
import SuccessModal from "../../components/Modal/SuccessModal/SuccessModal";
import ErrorModal from "../../components/Modal/ErrorModal/ErrorModal";
//hooks
import { useForm } from "../../hooks/useForm";
import { useModal } from "../../hooks/useModal";

export default function Form() {
  const [page, setPage] = useState(0);
  const [isOpen, openModal, closeModal] = useModal(false);
  const [isOpenErr, openModalErr, closeModalErr] = useModal(false);

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

  const validationForm = (form) => {
    let errors = {};
    if (form.authorName === "") {
      errors.authorName = "El campo está vacío";
    }
    if (form.authorLastname === "") {
      errors.authorLastname = "El campo está vacío";
    }
    if (form.book === "") {
      errors.book = "El campo está vacío";
    }
    if (form.editorial === "") {
      errors.editorial = "El campo está vacío";
    }
    if (form.categories[0] === undefined) {
      errors.categories = "No seleccionaste ninguna categoría";
    }
    if (form.description === "") {
      errors.description = "El campo está vacío";
    }
    if (form.publishDate === "") {
      errors.publishDate = "El campo está vacío";
    }
    if (form.isbn === "") {
      errors.isbn = "El campo está vacío";
    }
    return errors;
  };

  const { form, errors, response, send, handleChange, handleSubmit } = useForm(
    initialForm,
    validationForm,
    openModal,
    openModalErr
  );

  const FormPages = ["Page 1", "Page 2", "Page 3"];

  const PageDisplay = () => {
    if (page === 0) {
      return <FirstStep form={form} handleChange={handleChange} />;
    } else if (page === 1) {
      return (
        <SecondStep
          form={form}
          handleChange={handleChange}
          selectedCategories={form.categories}
        />
      );
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
            } else {
              setPage((currentPage) => currentPage + 1);
            }
          }}
        >
          {page === FormPages.length - 1 ? "Finalizar" : "Continuar"}
        </button>
      </div>
      <SuccessModal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
      />
      <ErrorModal
        isOpen={isOpenErr}
        openModal={openModalErr}
        closeModal={closeModalErr}
      />
    </div>
  );
}
