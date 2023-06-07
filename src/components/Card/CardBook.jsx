import "./CardBook.css";
import React from "react";
//assets
import cover from "../../assets/cover/cover.png";

export default function CardBook() {
  return (
    <div className="cardbook">
      <img alt="book-cover" src={cover} />
    </div>
  );
}
