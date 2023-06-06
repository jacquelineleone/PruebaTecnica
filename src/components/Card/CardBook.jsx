import "./CardBook.css";
import React from "react";
//assets
import cover from "../../assets/cover/cover.png";

export default function CardBook({ title, author, position }) {
  return (
    <div className="cardbook" onClick={() => console.log(position)}>
      <img alt="book-cover" src={cover} />
      <div className="cardbook-data">
        <h1 className="highlight-text">{title}</h1>
        <p className="input-text">{author}</p>
      </div>
    </div>
  );
}
