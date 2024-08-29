import { Button } from "@/components/ui/button";
import Image from "next/image";
import BrowseMenu from "./BrowseMenu";

export default function Home() {
  return (
    <main className="flex gap-44 w-full h-full flex-col">
      <PageContainer>
        <div className="flex gap-8 flex-col max-w-[500px]">
          <h1 className="text-6xl font-bold">
            Beautiful food & <span className="text-primary">delivered</span> to
            your door.
          </h1>
          <p className="pb-8 text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>

          <Button className="w-fit px-8 py-6 text-md">Order Now</Button>

          <div className="flex flex-col gap-4">
            <Image src="/Star.svg" alt="logo" width={100} height={100} />
            <p>
              <span className="text-primary">4.8 out of 5 based</span> on 2000+
              reviews
            </p>
          </div>
        </div>
        <Image
          src="/Hero-Image.png"
          alt="logo"
          width={600}
          height={550}
          className="-mr-[14.5%]"
        />
      </PageContainer>
      <PageContainer>
        <Image
          src="/Hero-Image.png"
          alt="logo"
          width={600}
          height={550}
          className="-mr-[14.5%]"
        />
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

          <Button className="w-fit px-8 py-6 text-md">Learn about us</Button>
        </div>
      </PageContainer>
      <div className="flex gap-12 w-full flex-col">
        <h3 className="text-6xl font-bold text-primary text-center w-full">
          How it works.
        </h3>
        <div className="flex gap-4 justify-between w-full">
          <PageCard
            img="/cardItem-1.png"
            alt="logo"
            title="Order"
            paragraph="Place an order for pickup or delivery"
          />
          <PageCard
            img="/cardItem-2.png"
            alt="logo"
            title="Delivery"
            paragraph="Your food will be delivered to your door"
          />
          <PageCard
            img="/cardItem-3.png"
            alt="logo"
            title="Pickup"
            paragraph="Pick up your order at your door"
          />
        </div>
      </div>
      <BrowseMenu />
      <PageContainer>
        <div className="flex gap-8 flex-col max-w-[500px]">
          <h3 className="text-6xl font-bold text-primary">
            Order online with our simple checkout.
          </h3>
          <p className="pb-8 text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>

          <Button className="w-fit px-8 py-6 text-md">See our FAQ</Button>
        </div>
        <Image
          src="/Hero-Image.png"
          alt="logo"
          width={600}
          height={550}
          className="-mr-[14.5%]"
        />
      </PageContainer>
      <PageContainer>
        <Image
          src="/Hero-Image.png"
          alt="logo"
          width={600}
          height={550}
          className="-mr-[14.5%]"
        />
        <div className="flex gap-8 flex-col max-w-[500px]">
          <h3 className="text-6xl font-bold text-primary">
            Call our store and takeaway when it suits you best.
          </h3>
          <p className="pb-8 text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500.
          </p>

          <Button className="w-fit px-8 py-6 text-md">Ph. +61 233 2333</Button>
        </div>
      </PageContainer>
      <PageContainer>
        <div className="flex gap-8 flex-col max-w-[500px]">
          <h3 className="text-6xl font-bold text-primary">
            Support good food and local business.
          </h3>
          <p className="pb-8 text-slate-500">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
          <Button className="w-fit px-8 py-6 text-md">Order Now</Button>
        </div>
        <Image src="/Landing-Page-1.png" alt="logo" width={600} height={300} />
      </PageContainer>
    </main>
  );
}

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-between max-h-[500px]">{children}</div>
  );
}

function PageCard({
  img,
  alt,
  title,
  paragraph,
}: {
  img: string;
  alt: string;
  title: string;
  paragraph: string;
}) {
  return (
    <div className="w-full flex flex-col gap-8 max-w-[500px] justify-center items-center">
      <Image src={img} alt={alt} width={300} height={300} />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-bold text-center">{title}</h3>
        <p className="text-slate-500 text-center">{paragraph}</p>
      </div>
    </div>
  );
}
