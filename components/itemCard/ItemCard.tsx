"use client";
import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Image from "next/image";
import { store } from "@/app/orders";
import { useState } from "react";
import { toast } from "sonner";
import { useSnapshot } from "valtio";
import { cartState } from "@/app/store";

export default function ItemCard({
  src,
  alt,
  title,
  price,
  paragraph,
}: {
  src: string;
  alt: string;
  title: string;
  price: number;
  paragraph: string;
}) {
  const [quantity, setQuantity] = useState(1);

  const snap = useSnapshot(cartState);

  const addToCart = () => {
    const existingItem = store.items.find((item) => item.title === title);
    if (existingItem) {
      toast.success(`${title} added to cart`);
      existingItem.quantity += 1;
    } else {
      store.items.push({ src, alt, title, price, quantity });
    }
    setQuantity(1);
    cartState.open = true;
  };

  return (
    <div className="flex gap-4 w-full min-w-[300px] max-w-[560px] border p-6 rounded-md hover:border-primary focus:border-primary cursor-pointer transition-all">
      <Image
        src={src}
        alt={alt}
        width={120}
        height={120}
        className="rounded-md"
      />
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between items-center gap-2">
          <h4 className="text-xl font-bold">{title}</h4>
          <span className="text-primary">
            $ {""}
            {price.toFixed(2)}
          </span>
        </div>
        <p>{paragraph}</p>
        <div className="flex gap-4">
          <Input
            type="number"
            className="max-w-[60px]"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <Button onClick={() => addToCart()}>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
