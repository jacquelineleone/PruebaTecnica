import React from "react";

export default function ThirdStep({ form, handleChange }) {
  return (
    <div className="step-container">
      <form className="third-step-form">
        <section className="long-section">
          <p className="highlight-text">Descripción</p>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Tu respuesta"
          ></textarea>
        </section>
        <section className="long-section">
          <label>
            <p className="highlight-text">Fecha de publicación</p>
            <input
              type="text"
              name="publishDate"
              value={form.publishDate}
              onChange={handleChange}
              placeholder="Tu respuesta"
            />
          </label>
        </section>
        <section className="long-section">
          <label>
            <p className="highlight-text">ISBN</p>
            <input
              type="text"
              name="isbn"
              value={form.isbn}
              onChange={handleChange}
              placeholder="Tu respuesta"
            />
          </label>
        </section>
      </form>
    </div>
  );
}
