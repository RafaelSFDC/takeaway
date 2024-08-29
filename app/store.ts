import { proxy, useSnapshot } from "valtio";

export const cartState = proxy({
  open: false,
});
