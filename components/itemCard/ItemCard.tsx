import { Input } from "@/components/ui/input";
import { Button } from "../ui/button";
import Image from "next/image";

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
  price: string;
  paragraph: string;
}) {
  return (
    <div className="flex gap-4 w-full min-w-[300px] max-w-[490px] border p-6 rounded-md hover:border-primary cursor-pointer">
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
          <span className="text-primary">{price}</span>
        </div>
        <p>{paragraph}</p>
        <div className="flex gap-4">
          <Input type="number" className="max-w-[60px]" value="1" />
          <Button>Add to cart</Button>
        </div>
      </div>
    </div>
  );
}
