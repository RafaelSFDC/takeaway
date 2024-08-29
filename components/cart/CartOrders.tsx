"use client";

import React from "react";
import OrderComponent from "@/components/OrderComponent";
import { useSnapshot } from "valtio";
import { store } from "@/app/orders";
const CartOrders = () => {
  const orders = useSnapshot(store).items;
  return (
    <div className="grid gap-4 py-4 overflow-auto max-h-[75vh]">
      {orders.map((order) => (
        <OrderComponent key={order.title} {...order} />
      ))}
    </div>
  );
};

export default CartOrders;
