import React from "react";
import style from "./app.module.css";
import AppHeader from "../appHeader/AppHeader";
import Ingredients from "../ingredients/Ingredients";
import Bucket from "../Bucket/Bucket";

class App extends React.Component {
  render() {
    return (
      <div className={`text_type_main-default ${style.app}`}>
        <AppHeader />
        <main className={style.mainWrapper}>
          <Ingredients />
          <Bucket />
        </main>
      </div>
    );
  }
}

export default App;
