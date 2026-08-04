import React from "react";

import formStyles from "./form.module.css";

import Input from "../input/input";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmit: false,
      value: "",
    };

    this.emailInput = React.createRef();
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    if (this.emailInput && this.emailInput.current) {
      this.emailInput.current.focus();
    }
  }

  handleFormSubmit(e) {
    e.preventDefault();
    this.setState({
      ...this.state,
      isSubmit: true,
      value: this.emailInput.current.value,
    });
  }

  render() {
    return (
      <div className={formStyles.root}>
        <form className={formStyles.form} onSubmit={this.handleFormSubmit}>
          <Input
            ref={this.emailInput}
            type="email"
            placeholder={"Введите свой e-mail"}
          />
          <button className={formStyles.button} type={"submit"}>
            Подписаться
          </button>
        </form>
        <p className={formStyles.message}>
          {this.state.isSubmit && this.state.value && (
            <>
              <span>
                Почта {this.state.value} успешно подписана на рассылку
              </span>
              <span>Но это не точно</span>
            </>
          )}
        </p>
      </div>
    );
  }
}

export default Form;
