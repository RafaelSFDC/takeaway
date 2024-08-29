import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemCard from "@/components/itemCard/ItemCard";
import { burguers, drinks, sides } from "./constant";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BrowseMenu = ({ full = false }) => {
  const fullMenu = [...burguers, ...sides, ...drinks];
  return (
    <div className="flex flex-col gap-10 w-full">
      {!full && (
        <>
          <h3 className="text-6xl font-bold text-primary text-center">
            Browse our menu
          </h3>

          <p className="text-center">
            Use our menu to place an order online, or phone our store to place a
            pickup order. Fast and fresh food.
          </p>
        </>
      )}

      <Tabs
        defaultValue={!full ? "burguers" : "full"}
        className={full ? "mt-20" : ""}
      >
        <TabsList className="flex justify-center gap-10 mb-8 w-full">
          {full && <TabsTrigger value="full">Full Menu</TabsTrigger>}
          <TabsTrigger value="burguers">Burguers</TabsTrigger>
          <TabsTrigger value="sides">Sides</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>
        <TabsContent value="full" className="w-full">
          <TabContentContainer>
            {fullMenu.map((item) => (
              <ItemCard key={item.title} {...item} />
            ))}
          </TabContentContainer>
        </TabsContent>
        <TabsContent value="burguers" className="w-full">
          <TabContentContainer>
            {burguers.map((item) => (
              <ItemCard key={item.title} {...item} />
            ))}
          </TabContentContainer>
        </TabsContent>
        <TabsContent value="sides">
          <TabContentContainer>
            {sides.map((item) => (
              <ItemCard key={item.title} {...item} />
            ))}
          </TabContentContainer>
        </TabsContent>
        <TabsContent value="drinks">
          <TabContentContainer>
            {drinks.map((item) => (
              <ItemCard key={item.title} {...item} />
            ))}
          </TabContentContainer>
        </TabsContent>
      </Tabs>

      {!full && (
        <div className="flex justify-center">
          <Link href="/order">
            <Button className="bg-primary text-white">Order Online</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrowseMenu;

function TabContentContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex gap-6 flex-wrap justify-between">
      {children}
    </div>
  );
}
