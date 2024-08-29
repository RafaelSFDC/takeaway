"use client";
import { store } from "@/app/orders";
import React from "react";
import { useSnapshot } from "valtio";

const CartPrice = () => {
  const snap = useSnapshot(store);
  const total = snap.items
    .reduce((total, order) => total + order.price * order.quantity, 0)
    .toFixed(2);
  return <>{total}</>;
};

export default CartPrice;
