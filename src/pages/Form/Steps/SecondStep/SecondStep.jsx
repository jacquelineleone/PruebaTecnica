import "./SecondStep.css";
import React, { useState, useEffect } from "react";

export default function SecondStep({ form, handleChange, send, errors }) {
  console.log('se mantuvo?', form)
  const [selectedCategories, setSelectedCategories] = useState([...form.categories]);
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

  const handleCategorySelect = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((cat) => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  useEffect(() => {
    handleChange({ target: { name: 'categories', value: selectedCategories } });
  }, [selectedCategories]);

  console.log(form.categories);

  return (
    <div className="step-container">
      <div>
        <p className="text">Elegí las categorías del libro</p>
        <div className="categories-container">
          {categories &&
            categories.map((category) => (
              <div className={`category ${selectedCategories.includes(category) ? 'selected' : ''}`} onClick={() => handleCategorySelect(category)}>
                <p>{category}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
