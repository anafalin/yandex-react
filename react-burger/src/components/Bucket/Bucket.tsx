import BucketList from "../BucketList/BucketList";
import { products } from "../utils/data";
import style from "./bucket.module.css";
import {
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const items = [products[0], products[3], products[5]];

const Bucket = () => {
  return (
    <div className={style.bucket}>
      <BucketList items={items} />
      <div className={style.order}>
        <div className="text_type_digits-medium">
          610 <CurrencyIcon type="primary" />
        </div>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
};

export default Bucket;
