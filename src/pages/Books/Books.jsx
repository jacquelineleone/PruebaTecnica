import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
//actions
import { getBooks } from "../../redux/actions";
//components
import Menu from "../../components/Menu/Menu";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardBook from "../../components/Card/CardBook";

export default function Books() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.allBooks);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getBooks()).then((res) => {
          setFilteredBooks(res.payload);
        });
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleFilter = (filtered) => {
    setFilteredBooks(filtered);
  };

  return (
    <div>
      <Menu />
      <SearchBar books={books} setFilteredBooks={handleFilter} />
      <div>
        <h1 className="subtitle">Todos los libros</h1>
        <div style={{ display: "flex" }}>
          {filteredBooks &&
            filteredBooks.map((book) => (
              <CardBook title={book.name} author={book.authors} />
            ))}
        </div>
      </div>
    </div>
  );
}
