"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBarLinks({
  href,
  label,
}: {
  href: string;
  label: string;
}) {
  const pathname = usePathname();
  return (
    <li>
      <Link
        href={href}
        className={`hover:text-primary active:text-primary ${
          pathname === href ? "text-primary" : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
