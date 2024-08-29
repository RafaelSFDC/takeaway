"use client";
import { Button } from "@/components/ui/button";
import { ImCart } from "react-icons/im";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import CartOrders from "./CartOrders";
import CartPrice from "./CartPrice";
import CartNumberIcon from "./CartNumberIcon";

export default function Cart() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="py-6 px-4 flex items-center align-center rounded-lg relative">
          <ImCart size={20} />
          <CartNumberIcon />
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col justify-between">
        <div>
          <SheetHeader>
            <SheetTitle>Your Order</SheetTitle>
          </SheetHeader>
          <div className="grid gap-4 py-4">
            <CartOrders />
          </div>
        </div>

        <SheetFooter>
          <div className="flex flex-col gap-4 w-full mt-auto">
            <div className="flex justify-between items-center">
              <p>Subtotal</p>
              <span className="font-bold">
                $ {""}
                <CartPrice />
              </span>
            </div>
            <SheetClose asChild>
              <Button type="submit" className="w-full">
                Continue to Checkout
              </Button>
            </SheetClose>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
