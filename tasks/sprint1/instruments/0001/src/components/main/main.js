import React from "react";
import styles from "./main.module.css";

class Main extends React.Component {
  // Опишем внутреннее состояние isLiked
  state = { isLiked: false };

  // Опишем метод изменения состояния isLiked
  onIconClick = () => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  render() {
    const { image, caption, title, description } = this.props.mainData;

    return (
      <main className={styles.main}>
        <img src={image} alt="фото собачек." />
        <button
          onClick={this.onIconClick}
          className={styles.button}
          type="button"
        >
          <svg
            className={styles.icon}
            width="22"
            height="19"
            viewBox="0 0 22 19"
          >
            <path
              d="M20.2991 1.68186C22.567 3.90213 22.567 7.54338 20.2991 9.78586L10.9804 19L1.6841
              9.80806C0.606277 8.72013 0 7.27695 0 5.74496C0 4.21297 0.583823 2.76979 1.6841
              1.68186C3.92957 -0.560619 7.61215 -0.560619 9.88007 1.70406L10.9804 2.792L12.0806
              1.68186C14.3486 -0.560619 18.0311 -0.560619 20.2991 1.68186Z"
              fill={this.state.isLiked ? "red" : "white"}
            />
          </svg>
        </button>
        <span className={styles.caption}>{caption}</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>
      </main>
    );
  }
}

export default Main;
