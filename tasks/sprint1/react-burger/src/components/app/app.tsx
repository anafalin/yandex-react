import React from "react";
import style from "./app.module.css";
import AppHeader from "../appHeader/AppHeader";

class App extends React.Component {
  render() {
    return (
      <div className={style.app}>
        <AppHeader />
      </div>
    );
  }
}

export default App;
