"use client";

import { store } from "@/app/orders";
import React from "react";
import { useSnapshot } from "valtio";

const CartNumberIcon = () => {
  const snap = useSnapshot(store);
  const total = snap.items.length || 0;
  return (
    <div className="absolute right-[-7px] top-[-5px] bg-white text-primary w-6 h-6 flex justify-center items-center rounded-full">
      {total}
    </div>
  );
};

export default CartNumberIcon;
