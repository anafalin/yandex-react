import React from "react";
import styles from "./total-price.module.css";

export const TotalPrice = ({ extraClass, totalPrice, discount }) => {
  return (
    <div className={`${styles.container} ${extraClass}`}>
      <p className={styles.text}>Итого:</p>
      <p className={styles.cost}>
        {`${(totalPrice - totalPrice * (discount / 100)).toFixed(0)} руб.`}
      </p>
    </div>
  );
};
