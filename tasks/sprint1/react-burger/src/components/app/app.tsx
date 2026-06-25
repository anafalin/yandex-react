import React from "react";
import style from "./app.module.css";
import AppHeader from "../appHeader/AppHeader";
import BurgerIngredients from "../ingredients/Ingredients";

class App extends React.Component {
  render() {
    return (
      <div className={`text_type_main-default ${style.app}`}>
        <AppHeader />
        <main className={style.mainWrapper}>
          <BurgerIngredients />
        </main>
      </div>
    );
  }
}

export default App;
