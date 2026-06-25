export type product = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};

export enum ProductType {
  bun = "bun",
  sauce = "sauce",
  main = "main",
}

export const ProductTypeText = {
  bun: "Булки",
  sauce: "Соусы",
  main: "Начинки",
};
