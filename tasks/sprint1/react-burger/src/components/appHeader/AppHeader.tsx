import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./appHeader.module.css";

const AppHeader = () => {
  return (
    <header className={`text text_type_main-default ${style.header}`}>
      <nav>
        <div className={style.leftNav}>
          <div className={style.wrapperLink}>
            <BurgerIcon type="primary" />
            <p>Конструктор</p>
          </div>
          <div className={`text_color_inactive ${style.wrapperLink}`}>
            <ListIcon type="secondary" />
            <p>Лента заказов</p>
          </div>
        </div>

        <div className={style.wrapperLogo}>
          <Logo />
        </div>

        <div className={style.rightNav}>
          <div className={`text_color_inactive ${style.wrapperLink}`}>
            <ProfileIcon type="secondary" />
            <p>Личный кабинет</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
