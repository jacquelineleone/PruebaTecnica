import "./Home.css";
import React from "react";
import { useSelector } from "react-redux";
//components
import Menu from "../../components/Menu/Menu";
//assets
import image from "../../assets/img/mobile/home/home.svg";

export default function Home() {
  function redirect(e) {
    e.preventDefault();
    window.location.href = "/Libros";
  }
  return (
    <div>
      <Menu />
      <div className="home-container">
        <div>
          <h1 className="title">
            Lo que lees, <b>importa</b>
          </h1>
          <p className="input-text">
            Tu próxima lectura se encuentra a tan solo unos clicks
          </p>
          <button className="border-button" onClick={(e) => redirect(e)}>
            <p>Empezá ahora</p>
          </button>
        </div>
        <img src={image}/>
      </div>
    </div>
  );
}
