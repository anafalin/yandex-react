import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ingredientCard.module.css";

type IngredientCardProps = {
  title: string;
  price: number;
  image: string;
};

const IngredientCard = (props: IngredientCardProps) => {
  const { title, price, image } = props;
  return (
    <div className={style.wrapperCard}>
      <h4>{title}</h4>
      <span className={`text_type_digits-default ${style.priceWrapper}`}>
        {price}
        <CurrencyIcon type="primary" />
      </span>
      <div className={style.imgWrapper}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default IngredientCard;
