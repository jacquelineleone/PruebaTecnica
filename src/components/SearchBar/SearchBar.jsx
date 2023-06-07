import "./SearchBar.css";
import React, { useState, useEffect } from "react";
//assets
import searchIcon from "../../assets/icons/search.svg";
import filterIcon from "../../assets/icons/filter.svg";
import SortModal from "../Modal/SortModal/SortModal.jsx";
//hooks
import { useModal } from "../../hooks/useModal";

export default function SearchBar({ books, setFilteredBooks }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState(null);
  const [sortAscending, setSortAscending] = useState(true);
  const [isOpen, openModal, closeModal] = useModal(false);

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

    if (sort) {
      const sortedBooks = [...filteredBooks].sort((a, b) => {
        if (sortAscending) {
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        } else {
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        }
      });
      setFilteredBooks(sortedBooks);
    } else {
      setFilteredBooks(filteredBooks);
    }
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="search-bar-container">
        <div className="filter-container" onClick={openModal}>
          <img src={filterIcon} alt="filter-icon" />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="form">
          <input
            type="text"
            placeholder="Buscar"
            onChange={(e) => handleInputChange(e)}
          />
          <button onClick={(e) => handleSubmit(e)}>
            <img src={searchIcon} alt="search-icon" />
          </button>
        </form>
      </div>
      <SortModal
        isOpen={isOpen}
        openModal={openModal}
        closeModal={closeModal}
        setSort={setSort}
        setSortAscending={setSortAscending}
        handleSortSubmit={handleSubmit}
      />
    </div>
  );
}
