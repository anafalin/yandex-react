import React from "react";
import styles from "./styles.module.css";

const Film = ({ data }) => {
  const image = (
    <img
      src={
        data.image
          ? `https://api.nomoreparties.co${data.image.formats.thumbnail.url}`
          : "https://via.placeholder.com/250x150"
      }
      alt={data.nameRU}
    />
  );
  return (
    <div>
      <div className={styles.img}>{image}</div>
      <p className={styles.name}>{data.nameRU}</p>
      <p className={styles.description}>{`${data.year}, ${data.country}`}</p>
      <p className={styles.description}>{`${data.duration} мин.`}</p>
    </div>
  );
};

const App = () => {
  const [state, setState] = React.useState({
    isLoading: false,
    hasError: false,
    data: [],
  });

  React.useEffect(() => {
    const getFilms = async () => {
      // Используем функциональное обновление
      // setState получает предыдущее состояние как аргумент
      setState((prev) => ({ ...prev, hasError: false, isLoading: true }));

      try {
        const response = await fetch(
          "https://api.nomoreparties.co/beatfilm-movies",
        );
        const data = await response.json();

        // Опять используем prev
        setState((prev) => ({ ...prev, data, isLoading: false }));
      } catch (e) {
        // И здесь тоже
        setState((prev) => ({ ...prev, hasError: true, isLoading: false }));
      }
    };

    getFilms();
  }, []);

  const { data, isLoading, hasError } = state;
  return (
    <div className={`${styles.app} ${styles.grid}`}>
      {isLoading && "Загрузка..."}
      {hasError && "Произошла ошибка"}
      {!isLoading &&
        !hasError &&
        data.length &&
        data.map((film, index) => <Film key={index} data={film} />)}
    </div>
  );
};

export default App;
