import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import maleTestimonial from "@/assets/testimonial-male.jpg";
import femaleTestimonial from "@/assets/testimonial-female.jpg";

interface TestimonialsProps {
  onRegister: () => void;
}

export function Testimonials({ onRegister }: TestimonialsProps) {
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Real People, Real Success! 🌟
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <div className="p-1">
                  <Card className="border-none shadow-lg h-full">
                    <CardContent className="flex flex-col items-center p-8 text-center h-full">
                      <div className="h-24 w-24 rounded-full overflow-hidden mb-6 ring-4 ring-blue-100">
                        <img src={maleTestimonial} alt="Rahul S." className="h-full w-full object-cover" />
                      </div>
                      <Quote className="h-8 w-8 text-secondary mb-4 opacity-50" />
                      <p className="text-lg text-gray-700 italic mb-6 flex-grow">
                        "In just 2 years, I built a 6-figure income! This training changed my life completely."
                      </p>
                      <div>
                        <h4 className="font-bold text-xl text-primary">Rahul S.</h4>
                        <p className="text-sm text-muted-foreground">LIC Advisor, 2 Years</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <div className="p-1">
                  <Card className="border-none shadow-lg h-full">
                    <CardContent className="flex flex-col items-center p-8 text-center h-full">
                      <div className="h-24 w-24 rounded-full overflow-hidden mb-6 ring-4 ring-blue-100">
                        <img src={femaleTestimonial} alt="Sneha M." className="h-full w-full object-cover" />
                      </div>
                      <Quote className="h-8 w-8 text-secondary mb-4 opacity-50" />
                      <p className="text-lg text-gray-700 italic mb-6 flex-grow">
                        "I now earn more than I ever imagined, and I control my time & future. The freedom is real."
                      </p>
                      <div>
                        <h4 className="font-bold text-xl text-primary">Sneha M.</h4>
                        <p className="text-sm text-muted-foreground">LIC Advisor, 3 Years</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>

          <div className="text-center mt-12">
            <Button
              onClick={onRegister}
              className="bg-destructive hover:bg-destructive/90 text-white font-bold text-lg h-12 px-8"
            >
              Be Our Next Success Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
