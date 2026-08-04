import React, { useReducer, useState } from "react";
import styles from "./app.module.css";
import { Title } from "../../ui/title/title";
import { Cart } from "../cart";
import { TotalPrice } from "../common/total-price";

import { TotalPriceContext, DiscountContext } from "../../services/appContext";

const discountInitialState = { discount: null };

function reducer(state, action) {
  switch (action.type) {
    case "set":
      return { discount: action.payload };
    case "reset":
      return discountInitialState;
    default:
      throw new Error(`Wrong type of type: ${action.type}`);
  }
}

function App() {
  const [discountState, discountDispatcher] = useReducer(
    reducer,
    discountInitialState,
    undefined,
  );
  const [totalPrice, setTotalPrice] = useState(0);

  return (
    <div className={styles.app}>
      <TotalPriceContext.Provider value={{ totalPrice, setTotalPrice }}>
        <DiscountContext.Provider value={{ discountState, discountDispatcher }}>
          <Title text={"Корзина"} />
          <Cart />
          <TotalPrice />
        </DiscountContext.Provider>
      </TotalPriceContext.Provider>
    </div>
  );
}

export default App;
