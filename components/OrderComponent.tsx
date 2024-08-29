"use client";
import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { IoTrashBin } from "react-icons/io5";
import Image from "next/image";
import { useSnapshot } from "valtio";
import { store } from "@/app/orders";

const OrderComponent = ({
  src,
  alt,
  title,
  price,
  quantity,
}: {
  src: string;
  alt: string;
  title: string;
  price: number;
  quantity: number;
}) => {
  const snap = useSnapshot(store);
  return (
    <div className="w-full flex gap-4">
      <div className="relative h-full w-20">
        <Image src={src} fill alt={alt} className="rounded" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <p className="text-sm">
            $ {""}
            {price.toFixed(2)}
          </p>
        </div>
        <div className="flex gap-2 h-full">
          <Input
            defaultValue={quantity}
            className="w-14 h-full"
            type="number"
            onChange={(e) => {
              const index = snap.items.findIndex(
                (item) => item.title === title
              );
              if (index !== -1) {
                if (parseInt(e.target.value) < 0) {
                  store.items[index].quantity = 0;
                } else if (parseInt(e.target.value) === 0) {
                  store.items.splice(index, 1);
                }
                store.items[index].quantity = parseInt(e.target.value);
              }
            }}
          />
          <Button
            variant="destructive"
            className="h-full"
            onClick={() => {
              const index = snap.items.findIndex(
                (item) => item.title === title
              );
              if (index !== -1) {
                store.items.splice(index, 1);
              }
            }}
          >
            <IoTrashBin size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderComponent;
