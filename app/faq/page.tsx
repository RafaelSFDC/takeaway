import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Faq() {
  return (
    <div className="flex flex-col gap-44 w-full">
      <div className="w-full flex justify-center">
        <h1 className="text-6xl font-bold max-w-[700px] text-center">
          Frequently Asked <span className="text-primary">Questions.</span>
        </h1>
      </div>

      <Tabs defaultValue="food">
        <TabsList className="flex justify-center gap-10 mb-8 w-full">
          <TabsTrigger value="food">Our Food</TabsTrigger>
          <TabsTrigger value="delivery">Our Delivery</TabsTrigger>
          <TabsTrigger value="company">Our Company</TabsTrigger>
        </TabsList>
        <TabsContent value="food">
          <Accordion type="multiple" className="text-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primary font-bold pb-10">
                Do you offer any vegan options?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary font-bold pb-10">
                Do you offer any gluten free options?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary font-bold">
                Can I clone these sections?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="delivery">
          <Accordion type="multiple" className="text-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primary font-bold pb-10">
                Do you offer any vegan options?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary font-bold pb-10">
                Do you offer any gluten free options?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary font-bold">
                Can I clone these sections?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
        <TabsContent value="company">
          <Accordion type="multiple" className="text-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-primary font-bold pb-10">
                Do you offer any vegan options?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-primary font-bold pb-10">
                Do you offer any gluten free options?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-primary font-bold">
                Can I clone these sections?
              </AccordionTrigger>
              <AccordionContent className="text-lg text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Suspendisse varius enim in eros elementum
                tristique. Duis cursus, mi quis viverra ornare, eros dolor
                interdum nulla, ut commodo diam libero vitae erat. Aenean
                faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut
                sem vitae risus tristique posuere.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PageContainer({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex justify-between max-h-[500px]">{children}</div>
  );
}
