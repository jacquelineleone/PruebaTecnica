import "./Books.css";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
//actions
import { getBooks } from "../../redux/actions";
//components
import Menu from "../../components/Menu/Menu";
import { Table } from "../../components/Table/Table";
import CardBook from "../../components/Card/CardBook";

export default function Books() {
  const dispatch = useDispatch();
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

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
      <div>
        <h1 className="subtitle">Favoritos</h1>
        <div className="favorites-container">
          {favorites[0] !== undefined &&
          favorites.map((fav) => (
            <CardBook key={fav}/>
          ))
          }
          {favorites[0] === undefined &&
          <div className="emptyFav">
            <p>Aún no agregaste ningún libro a favoritos</p>
          </div>
          }
        </div>
      </div>
    </div>
  );
}
