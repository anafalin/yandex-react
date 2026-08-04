import React from "react";
import formStyles from "./form.module.css";
import Modal from "../modal/Modal";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      value: "",
      isModalOpen: false,
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.emailInput = React.createRef();
    this.closeModal = this.closeModal.bind(this); // привязка метода к экземпляру класса, чтобы при передаче метода в дочерние компоненты не терялась связь или можно использовать стрелочную функцию как на строке 43
  }

  componentDidMount() {
    // this.emailInput.current - ссылка на реальный DOM-элемент
    this.emailInput.current.focus();
  }

  handleFormSubmit(e) {
    e.preventDefault(); // функция блокирует стандартное поведение браузера при отправке формы, чтобы страница не перезагружалась

    const emailValue = this.emailInput.current.value; // Получаем значение из input через ref
    this.setState({
      ...this.state,
      isSubmit: true,
      value: emailValue,
      isModalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      ...this.state,
      isModalOpen: false,
    });
  }

  // Стрелочная функция → this привязан автоматически
  // closeModal = () => {
  //   this.setState({
  //     isModalOpen: false,
  //   });
  // }

  render() {
    return (
      <div className={formStyles.root}>
        <form className={formStyles.form} onSubmit={this.handleFormSubmit}>
          <input
            className={formStyles.input}
            type="email"
            placeholder={"Введите свой e-mail"}
            ref={this.emailInput} // связываем инпут с рефом
          />
          <button className={formStyles.button} type={"submit"}>
            Подписаться
          </button>
        </form>

        <Modal
          isOpen={this.state.isModalOpen}
          onClose={this.closeModal}
          text={`Почта ${this.state.value} успешно подписана на рассылку.`}
        />
      </div>
    );
  }
}

export default Form;
