import { IProducts } from "@/shared/types/product";

export const cartProductCountSelector = (cardList: IProducts[], id: number) => {
  const findedCard = cardList.find((elem) => elem.id === id);
  return findedCard?.count;
};
