import "./Form.css";
import React, { useState } from "react";
//components
import Menu from "../../components/Menu/Menu";
import FirstStep from "./Steps/FirstStep/FirstStep";
import SecondStep from "./Steps/SecondStep/SecondStep";
import ThirdStep from "./Steps/ThirdStep/ThirdStep";
//hooks
import { useForm } from "../../hooks/useForm";

export default function Form() {
  const [page, setPage] = useState(0);

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

  const {form, errors, response, handleChange, handleSubmit} = useForm(initialForm);
  
  const FormPages = ["Page 1", "Page 2", "Page 3"];

  const PageDisplay = () => {
    if (page === 0) {
        return <FirstStep form={form} handleChange={handleChange}/>
    } else if (page === 1) {
        return <SecondStep form={form} handleChange={handleChange}/>
    } else {
        return <ThirdStep form={form} handleChange={handleChange}/>
    }
  };

  return (
    <div className="page-container">
      <Menu />
      <div>{PageDisplay()}</div>
      <div>
        <button
          disabled={page === 0}
          onClick={() => setPage((currentPage) => currentPage - 1)}
        >
          Atrás
        </button>
        <button
          disabled={page === FormPages.length - 1}
          onClick={() => setPage((currentPage) => currentPage + 1)}
        >
          Continuar
        </button>
      </div>
    </div>
  );
}
