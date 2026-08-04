import React from "react";
import { Tabs } from "./tabs";
import { ProductsContainer } from "./products-container";

export const Cart = (props) => {
  return (
    <section>
      <Tabs />
      <ProductsContainer
        totalPrice={props.totalPrice}
        setTotalPrice={props.setTotalPrice}
        discount={props.discount}
        setDiscount={props.setDiscount}
      />
    </section>
  );
};
