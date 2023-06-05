import React, { useState } from "react";
//components
import Menu from "../../components/Menu/Menu";
//hooks
import { useForm } from "../../hooks/useForm";

export default function Form() {
    const [page, setPage] = useState("firstPage");

    const initialForm = {
        authorName: "",
        authorLastname: "",
        book: "",
        editorial: "",
        categories: [],
        description: "",
        publishDate: "",
        ISBN: ""
    };

    return (
        <div>
            <Menu />
            {page === "firstPage" &&
            <div>
                <div>
                    <h1 className="subtitle">Registra un libro</h1>
                    <p className="text">Completá el siguiente formulario para registrar el libro en nuestra página.</p>
                </div>
                <form>

                </form>
            </div>}
        </div>
    )
}