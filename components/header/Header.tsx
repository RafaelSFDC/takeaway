import Link from "next/link";
import NavBarLinks from "./NavbarLinks";
import Cart from "@/components/Cart";
import { GiFoodTruck } from "react-icons/gi";

export default function Header() {
  return (
    <div className="flex h-16 w-full items-center justify-between">
      <GiFoodTruck size={50} className="text-primary" />
      <div className="flex gap-8">
        <ul className="flex-row gap-8 none md:flex items-center">
          <NavBarLinks href="/" label="Home" />
          <NavBarLinks href="/order" label="Order" />
          <NavBarLinks href="/about" label="About" />
          <NavBarLinks href="/about" label="FAQ" />
          <NavBarLinks href="/contact" label="Contact" />
        </ul>
        <Cart />
      </div>
    </div>
  );
}
