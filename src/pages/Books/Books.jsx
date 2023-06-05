import React from "react";
//components
import Menu from "../../components/Menu/Menu";
import SearchBar from "../../components/SearchBar/SearchBar";

export default function Books() {
    return (
        <div>
            <Menu />
            <SearchBar />
            <h1 className="subtitle">Descubrí</h1>
            <h1 className="subtitle">Todos los libros</h1>
        </div>
    )
}