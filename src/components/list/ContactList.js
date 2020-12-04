import React from "react";
import Style from "./Style.css";

export default function ContactList(props) {
  const arr = props.data;

  const listItems =
    arr.length > 0 ? (
      arr.map((val, index) => (
        <li key={index}>
          {val}
          <button className="btn" onClick={() => props.removeContact(index)}>X</button>
        </li>
      ))
    ) : (
      <p>No contacts</p>
    );

  return <ul>{listItems}</ul>;
}
