import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

interface FAQProps {
  onRegister: () => void;
}

export function FAQ({ onRegister }: FAQProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-primary">
            Still Unsure? Let’s Bust Some Myths!
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full mb-12">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-xl font-semibold text-left">"What will people say?"</AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground">
              People will talk—why not make them talk about your success? This is a respectable financial profession that builds immense wealth.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-xl font-semibold text-left">"I can’t do marketing."</AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground">
              You don't need to be a salesperson. We train you on relationship-building and consultative selling, not pushy sales tactics.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-xl font-semibold text-left">"Everyone is already insured."</AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground">
              Incorrect. 90% of people are underinsured. The market potential in India is massive and growing every year.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-xl font-semibold text-left">"Too many agents already."</AccordionTrigger>
            <AccordionContent className="text-lg text-muted-foreground">
              There are many agents, but very few PROFESSIONAL Career Advisors who know how to build wealth. We’ll teach you to be in the top 1%.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="text-center">
            <Button 
                onClick={onRegister}
                variant="outline"
                size="lg" 
                className="border-primary text-primary hover:bg-primary hover:text-white font-bold text-lg h-12 px-8"
            >
                Get Your Doubts Cleared – Book Now!
            </Button>
        </div>
      </div>
    </section>
  );
}
