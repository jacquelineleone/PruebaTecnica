import "./Menu.css";
import React from "react";
//assets
import logo from "../../assets/img/mobile/menu/small-logo.svg";
import burger from "../../assets/img/mobile/menu/burger.svg";

export default function Menu() {
  return (
    <div className="menu-container">
      <a href="/">
        <img src={logo} alt="logo-booking" />
      </a>
      <div className="links">
        <a href="/Libros">
          <p>Libros</p>
        </a>
        <a href="/Formulario">
          <p>Formulario</p>
        </a>
      </div>
    </div>
  );
}
