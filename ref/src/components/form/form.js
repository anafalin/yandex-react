import React from "react";
import formStyles from "./form.module.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      value: "",
    };

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.emailInput = React.createRef();
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
    });
  }

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

        {this.state.isSubmit && this.state.value && (
          <p className={formStyles.message}>
            <>
              <span>
                Почта {this.state.value} успешно подписана на рассылку.
              </span>
              <span>Но это не точно</span>
            </>
          </p>
        )}
      </div>
    );
  }
}

export default Form;
