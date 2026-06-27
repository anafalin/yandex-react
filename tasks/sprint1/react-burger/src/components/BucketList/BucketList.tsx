import BucketItem from "../BucketItem/BucketItem";
import { product } from "../utils/types";
import style from "./bucketList.module.css";

type BucketListProps = {
  items: product[];
};

const BucketList = (props: BucketListProps) => {
  const { items } = props;
  return (
    <div className={style.bucketList}>
      {items.map((item) => (
        <BucketItem
          key={item._id}
          title={item.name}
          proteins={item.proteins}
          image={item.image_mobile}
          type={item.type}
        />
      ))}
    </div>
  );
};

export default BucketList;
