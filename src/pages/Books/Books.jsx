import "./Books.css";
import React, { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
//actions
import { getBooks } from "../../redux/actions";
//components
import Menu from "../../components/Menu/Menu";
import SearchBar from "../../components/SearchBar/SearchBar";
import CardBook from "../../components/Card/CardBook";
import { Table } from "../../components/Table/Table";

export default function Books() {
  const dispatch = useDispatch();
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

  const columns = useMemo(
    () => [
      {
        Header: "Title",
        accessor: "name",
      },
      {
        Header: "Author",
        accessor: "authors",
      },
      // Agrega más columnas aquí según tus necesidades
    ],
    []
  );

  return (
    <div>
      <Menu />
      <div>
        <h1 className="subtitle">Todos los libros</h1>
        <div>
          <Table columns={columns} data={filteredBooks} />
        </div>
      </div>
    </div>
  );
}
