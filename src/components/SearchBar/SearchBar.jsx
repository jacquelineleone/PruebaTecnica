import "./SearchBar.css";
import React, { useState } from "react";
//assets
import searchIcon from "../../assets/icons/search.svg";

export default function SearchBar({ books, setFilteredBooks }) {
  const [search, setSearch] = useState("");

  function handleInputChange(e) {
    e.preventDefault();
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const filteredBooks = books.filter((book) => {
      const bookMatch = book.name.toLowerCase().includes(search.toLowerCase());
      const authorMatch = book.authors.some((author) =>
        author.toLowerCase().includes(search.toLowerCase())
      );
      return bookMatch || authorMatch;
    });
    setFilteredBooks(filteredBooks);
    setSearch("");
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="search-bar-container">
        <input
          type="text"
          placeholder="Buscar"
          onChange={(e) => handleInputChange(e)}
        />
        <button onClick={(e) => handleSubmit(e)}>
          <img src={searchIcon} />
        </button>
      </div>
    </div>
  );
}
