import "./SecondStep.css";
import React from "react";

export default function SecondStep({ form, handleChange }) {
  const categories = [
    "Arte visual/Diseño gráfico",
    "Autoayuda",
    "Astrología",
    "Científico",
    "Cocina",
    "Cómic/Novela gráfica",
    "Cuentos",
    "Deportes",
    "Educativo",
    "Ensayo",
    "Filosofía",
    "Fotografía",
    "Geografía",
    "Historia",
    "Idiomas",
    "Niños/as",
    "Novela",
    "Teatro",
    "Poesía",
    "Periodista",
    "Vehículos",
    "Otros",
  ];

  return (
    <div className="step-container">
      <div>
        <p className="text">Elegí las categorías del libro</p>
        <div className="categories-container">
          {categories &&
            categories.map((category) => (
              <div className="category">
                <p>{category}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
