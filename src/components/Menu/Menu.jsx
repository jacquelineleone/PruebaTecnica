import "./Menu.css";
import React from "react";
//assets
import logo from "../../assets/img/mobile/menu/small-logo.svg";
import burger from "../../assets/img/mobile/menu/burger.svg";

export default function Menu() {
  return (
    <div className="menu-container">
      <a href="/"><img src={logo} alt="logo-booking" /></a>
      <img src={burger} alt="burger-menu" />
    </div>
  );
}
