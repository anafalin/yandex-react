import ReactDOM from "react-dom";
import style from "./modal.module.css";

const modal = document.getElementById("modal");

const Modal = ({ text, isOpen, onClose }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div className={style.overlay} onClick={onClose}>
        <div className={style.modal} onClick={(e) => e.stopPropagation()}>
          <div className={style.row1}>
            <button className={style.closeBtn} onClick={onClose}>
              X
            </button>
          </div>
          <div className={style.row2}>
            <p className={style.card}>{text}</p>
          </div>
        </div>
      </div>
    </>,
    modal,
  );
};

export default Modal;
