import React from "react";

import styles from "./input.module.css";

const Input = React.forwardRef((props, ref) => {
  const { type, placeholder } = props;
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      ref={ref}
    />
  );
});

export default Input;
