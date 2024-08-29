import { proxy, subscribe, useSnapshot } from "valtio";
import Cookies from "js-cookie";

type Order = {
  src: string;
  alt: string;
  title: string;
  price: number;
  quantity: number;
};

export const store = proxy({
  items: Cookies.get("items")
    ? (JSON.parse(Cookies.get("items") as string) as Order[])
    : [],
});

subscribe(store, () => {
  const newValue = store.items; // substitua por uma propriedade do seu store
  Cookies.set("items", JSON.stringify(newValue));
});
