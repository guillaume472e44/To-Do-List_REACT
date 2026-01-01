import { useState } from "react";
import "./Form.css";

export default function Form({ addTask }) {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTask(text);
    setText("");
  }

  return (
    <form className="form__container" onSubmit={handleSubmit}>
      <label className="form__label" htmlFor="new-input">
        Ajoutez une chose à faire
      </label>
      <input
        className="form__input"
        type="text"
        id="new-input"
        autoComplete="off"
        value={text}
        onChange={handleChange}
      />
      <button className="form__btn" type="submit">
        Ajouter
      </button>
    </form>
  );
}
