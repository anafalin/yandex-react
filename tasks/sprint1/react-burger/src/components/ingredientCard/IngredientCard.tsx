import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./ingredientCard.module.css";

type IngredientCardProps = {
  title: string;
  proteins: number;
  image: string;
};

const IngredientCard = (props: IngredientCardProps) => {
  const { title, proteins, image } = props;
  return (
    <div className={style.wrapperCard}>
      <h4>{title}</h4>
      <span className={`text_type_digits-default ${style.proteinsWrapper}`}>
        {proteins}
        <CurrencyIcon type="primary" />
      </span>
      <div className={style.imgWrapper}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default IngredientCard;
