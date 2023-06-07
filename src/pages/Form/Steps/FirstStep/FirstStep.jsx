import "../../Form.css";
import React from "react";

export default function FirstStep({ form, handleChange, send, errors }) {
  return (
    <div className="step-container">
      <div>
        <h1 className="subtitle subtitle-space">Registra un libro</h1>
        <p className="text">
          Completá el siguiente formulario para registrar el libro en nuestra
          página.
        </p>
      </div>
      <form className="first-step-form">
        <div className="author-inputs-container">
          <section className="short-section">
            <label>
              <p className="highlight-text">Nombre del autor</p>
              <input
                type="text"
                name="authorName"
                value={form.authorName}
                onChange={handleChange}
                placeholder="Tu respuesta"
              />
            </label>
          </section>
          <section className="short-section">
            <label>
              <p className="highlight-text">Apellido del autor</p>
              <input
                type="text"
                name="authorLastname"
                value={form.authorLastname}
                onChange={handleChange}
                placeholder="Tu respuesta"
              />
            </label>
          </section>
        </div>
        <section className="long-section">
          <label>
            <p className="highlight-text">Nombre del libro</p>
            <input
              type="text"
              name="book"
              value={form.book}
              onChange={handleChange}
              placeholder="Tu respuesta"
            />
          </label>
        </section>
        <section className="long-section">
          <label>
            <p className="highlight-text">Editorial del libro</p>
            <input
              type="text"
              name="editorial"
              value={form.editorial}
              onChange={handleChange}
              placeholder="Tu respuesta"
            />
          </label>
        </section>
      </form>
    </div>
  );
}
