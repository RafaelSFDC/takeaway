import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Company() {
  return (
    <div className="flex flex-col gap-44 w-full">
      <div className="w-full flex justify-center">
        <h1 className="text-6xl font-bold max-w-[700px] text-center">
          Our company focuses on{" "}
          <span className="text-primary">food and people.</span>
        </h1>
      </div>

      <PageContainer>
        <div className="flex gap-8 flex-col max-w-[500px]">
          <h3 className="text-6xl font-bold text-primary">
            The home of fresh products
          </h3>
          <p className="pb-8 text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>

          <Button className="w-fit px-8 py-6 text-md" asChild>
            <Link href="/about">Learn about us</Link>
          </Button>
        </div>
        <Image src="/About.png" alt="about" width={600} height={550} />
      </PageContainer>
      <div className="relative md:ml-[-17.4%] w-[100vw] bg-black py-44">
        <div className=" text-white flex justify-center gap-28 z-10 relative">
          <AboutItems number="300+" text="Happy Customers" />
          <AboutItems number="400+" text="Online Orders" />
          <AboutItems number="800" text="Food Delivered" />
          <AboutItems number="500+" text="Stores Open" />
        </div>
        <Image
          src="/Landing-Page-1.png"
          alt="logo"
          fill
          className="opacity-40"
        />
      </div>
    </div>
  );
}

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-between max-h-[500px]">{children}</div>
  );
}

function AboutItems({
  number,
  text,
}: {
  number: number | string;
  text: string;
}) {
  return (
    <div className="flex gap-8 flex-col max-w-[500px] items-center">
      <p className="text-6xl font-bold">{number}</p>
      <Image src="/Wave.svg" alt="wave" width={80} height={80} />
      <p className="text-lg">{text}</p>
    </div>
  );
}
