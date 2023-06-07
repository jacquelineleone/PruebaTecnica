import "./Detail.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
//actions
import { getOneBook } from "../../redux/actions";
//components
import Menu from "../../components/Menu/Menu";
import CardBook from "../../components/Card/CardBook";
import FavoriteButton from "../../components/FavoriteButton/FavoriteButton";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getOneBook(parseInt(id) + 1));
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  const book = useSelector((state) => state.books.currentBook);

  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";

  return (
    <div>
      <Menu />
      {book && (
        <div className="detail-container">
          <div className="detail-header">
            <CardBook key={book.isbn}/>
            <div className="detail-title">
              <div>
                <h1 className="subtitle">{book.name}</h1>
                {book.authors.map((author) => (
                  <p className="input-text">{author}</p>
                ))}
              </div>
              <div>
                <FavoriteButton bookId={id}/>
              </div>
            </div>
          </div>
          <div className="detail-sinopsis">
            <h1 className="highlight-text">Sinopsis</h1>
            <p className="input-text">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
