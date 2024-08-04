import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ItemCard from "@/components/itemCard/ItemCard";
import { burguers, drinks, sides } from "./constant";

const BrowseMenu = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-6xl font-bold text-primary text-center">
        Browse our menu
      </h3>
      <p className="text-center">
        Use our menu to place an order online, or phone our store to place a
        pickup order. Fast and fresh food.
      </p>
      <Tabs defaultValue="burguers">
        <TabsList className="flex justify-center gap-10 mb-8">
          <TabsTrigger value="burguers">Burguers</TabsTrigger>
          <TabsTrigger value="sides">Sides</TabsTrigger>
          <TabsTrigger value="drinks">Drinks</TabsTrigger>
        </TabsList>
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
