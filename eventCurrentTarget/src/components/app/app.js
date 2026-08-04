import React from "react";
import styles from "./app.module.css";

function DissatisfiedButton() {
  // 1. Обработчик на фазе захвата (onClickCapture)
  function handleCaptureClick() {
    console.log(
      "🔽 1. Что-то мне подсказывает, что на кнопку сейчас надавят...",
    );
  }

  // 2. Обычный обработчик на div (фаза всплытия)
  function handleClickBubble() {
    console.log("🔼 3. Поймаю событие после handleAgressiveButtonClick!");
  }

  // 3. Обработчик на кнопке
  function handleAgressiveButtonClick(e) {
    // Раскомментируйте следующую строку, чтобы увидеть эффект stopPropagation()
    // останавливает процессы всплытия и захвата на данном элементе
    // e.stopPropagation();

    // иногда e.stopPropagation() не достаточно - за некоторыми элементами закреплено событие по умолчанию
    // например, при отправлке формы или клике по активному чекбоксу происходят стандартные браузерные события
    // для их остановки используют метод preventDefault()
    console.log("👆 2. Не дави на меня!");
    console.log(
      "  элемент, который вызывает обработку события - e.target:",
      e.target.tagName,
    );
    console.log(
      "  элемент с добавленным случателем событий - e.currentTarget:",
      e.currentTarget.tagName,
    );
  }

  return (
    <div
      onClick={handleClickBubble}
      onClickCapture={handleCaptureClick}
      className={styles.container}
    >
      <h3>📦 Контейнер div (кликни на него)</h3>
      <button onClick={handleAgressiveButtonClick} className={styles.btn}>
        <span>🎮 Поиграй со мной!</span>
      </button>
    </div>
  );
}

export default DissatisfiedButton;
