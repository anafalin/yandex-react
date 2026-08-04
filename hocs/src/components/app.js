import React from "react";
import withFetch from "./hocs/with-fetch";
import Film from "./film";
import styles from "../styles.module.css";

const WithFetchFilm = withFetch("https://api.nomoreparties.co/beatfilm-movies")(
  Film,
);

class App extends React.Component {
  render() {
    return (
      <div className={styles.app}>
        <WithFetchFilm />
      </div>
    );
  }
}
export default App;
