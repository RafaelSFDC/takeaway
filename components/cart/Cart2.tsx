"use client";
import { Button } from "@/components/ui/button";
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
import { useSnapshot } from "valtio";
import { cartState } from "@/app/store";

export default function Cart2() {
  const snap = useSnapshot(cartState);
  return (
    <Sheet open={snap.open} onOpenChange={() => (cartState.open = false)}>
      <SheetContent
        className="flex flex-col justify-between"
        onClick={() => (cartState.open = false)}
      >
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
