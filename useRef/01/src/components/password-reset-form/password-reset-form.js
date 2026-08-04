import React from "react";
import TextInput from "../text-input/text-input";
import { ReactComponent as PasswordResetLogo } from "../../images/protect.svg";

import formStyles from "./password-reset-form.module.css";

export default function PasswordResetForm() {
  const [email, setEmail] = React.useState("");
  const [isSubmited, setSubmitted] = React.useState(false);

  const emailInput = React.useRef(null);

  React.useEffect(() => {
    emailInput.current.focus();
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setEmail(emailInput.current.value);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleFormSubmit} className={formStyles.form}>
      <PasswordResetLogo className={formStyles.logo} />
      <TextInput inputElement={emailInput} />
      <button type="submit" className={formStyles.submit}>
        Восстановить пароль
      </button>
      {isSubmited && (
        <p className={formStyles.description}>
          Ссылка на восстановление пароля отправлена на {email}
        </p>
      )}
    </form>
  );
}
