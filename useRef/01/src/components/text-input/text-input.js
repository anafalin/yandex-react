import React from "react";

import inputStyles from "./text-input.module.css";

export default function TextInput(props) {
  return (
    <input
      type="email"
      placeholder="Введите свой e-mail"
      required
      className={inputStyles.input}
      ref={props.inputElement}
    />
  );
}
