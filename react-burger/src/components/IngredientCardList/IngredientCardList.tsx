import IngredientCard from "../ingredientCard/IngredientCard";
import { product } from "../utils/types";
import style from "./imgredientCardList.module.css";

type IngredientCardListProps = {
  title: string;
  items: product[];
};

const IngredientCardList = (props: IngredientCardListProps) => {
  const { title, items } = props;

  return (
    <>
      <h3 className="text_type_main-medium">{title}</h3>
      <div className={style.listWrapper}>
        {items.map((item) => (
          <IngredientCard
            key={item._id}
            title={item.name}
            proteins={item.proteins}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
};

export default IngredientCardList;
