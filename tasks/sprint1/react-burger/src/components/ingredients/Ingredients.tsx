import style from "./ingredients.module.css";
import { products } from "../utils/data";
import IngredientCardList from "../IngredientCardList/IngredientCardList";
import { ProductType, ProductTypeText } from "../utils/types";

const Ingredients = () => {
  const buns = products.filter((p) => p.type === ProductType.bun);
  const main = products.filter((p) => p.type === ProductType.main);
  const sauce = products.filter((p) => p.type === ProductType.sauce);
  return (
    <div className={style.menuWrapper}>
      <h2 className={style.visuallyHidden}>Меню</h2>
      <p className="text_type_main-large">Собери бургер</p>
      <ul className={style.tabsList}>
        <li>
          <button
            className={`text text_type_main-default ${style.tab} ${style.active}`}
          >
            Булки
          </button>
        </li>
        <li className="text_color_inactive">
          <button
            className={`text text_type_main-default text_color_inactive ${style.tab}`}
          >
            Соусы
          </button>
        </li>
        <li className="text_color_inactive">
          <button
            className={`text text_type_main-default text_color_inactive ${style.tab}`}
          >
            Начинки
          </button>
        </li>
      </ul>
      <IngredientCardList title={ProductTypeText.bun} items={buns} />
      <IngredientCardList title={ProductTypeText.sauce} items={sauce} />
      <IngredientCardList title={ProductTypeText.main} items={main} />
    </div>
  );
};

export default Ingredients;
