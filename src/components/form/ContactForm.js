import { React, useState } from "react";
import Style from './Style.css';

export default function ContactForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    if (person !== "") {
      props.handleSubmit(person);
      setPerson("");
    }
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <button type="submit">Add</button>
    </form>
  );

}
