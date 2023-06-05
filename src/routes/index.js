import React from "react";
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";
import Home from "../pages/Home/Home";
import Form from "../pages/Form/Form";
import Detail from "../pages/Detail/Detail";
import Books from "../pages/Books/Books";

export default function Rutas() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/Libros" element={<Books />}/>
                    <Route path="/Libro/:id" element={<Detail />}/>
                    <Route path="/Formulario" element={<Form />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}