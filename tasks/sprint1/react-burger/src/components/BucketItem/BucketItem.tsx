import { ProductType } from "../utils/types";
import style from "./bucketItem.module.css";
import {
  CurrencyIcon,
  DeleteIcon,
  DragIcon,
  LockIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

type BuckerItemProps = {
  title: string;
  proteins: number;
  image: string;
  type: string;
};

const BucketItem = (props: BuckerItemProps) => {
  const { title, proteins, image, type } = props;

  return (
    <div className={style.itemCard}>
      {type === ProductType.bun ? (
        <div className={style.notIcon}></div>
      ) : (
        <div className={style.iconWrapper}>
          <DragIcon type="primary" />
        </div>
      )}
      <div className={`${style.rowCard}`}>
        <img src={image} alt={title} />
        <p className={`text_type_main-larde ${style.price}`}>{title}</p>
        <p className={`text_type_digits-default ${style.proteinsWrapper}`}>
          {proteins} <CurrencyIcon type="primary" className="pl-1" />
        </p>
        {type === ProductType.bun ? (
          <LockIcon type="secondary" />
        ) : (
          <DeleteIcon type="primary" />
        )}
      </div>
    </div>
  );
};

export default BucketItem;
