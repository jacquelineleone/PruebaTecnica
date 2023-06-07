import "./CardBook.css";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//actions
import { getOneBook } from "../../redux/actions";
//assets
import cover from "../../assets/cover/cover.png";

export default function CardBook({ id }) {
  const dispatch = useDispatch();
  const book = useSelector((state) => state.books.currentBook);

  return (
    <div className="cardbook">
      <img alt="book-cover" src={cover} />
    </div>
  );
}
