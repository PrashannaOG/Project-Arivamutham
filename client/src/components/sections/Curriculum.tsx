import { Zap, Target, TrendingUp, Trophy, Users, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import mentorImage from "@/assets/mentor-session.jpg";

interface CurriculumProps {
  onRegister: () => void;
}

export function Curriculum({ onRegister }: CurriculumProps) {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            What Will You Learn in the 121 Session?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Walk away with a clear roadmap to success!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="grid gap-8">
            {[
              { icon: Zap, title: "The Power of Starting Young", desc: "Learn how beginning early gives you an unfair financial advantage." },
              { icon: Target, title: "LIC Career – Your Gateway", desc: "Zero-investment startup with lifetime income potential." },
              { icon: TrendingUp, title: "₹1 Lakh/Month Roadmap", desc: "Proven step-by-step growth strategy." },
              { icon: Trophy, title: "Beating the Competition", desc: "How to stand out & dominate in the market." },
              { icon: ShieldCheck, title: "Handling Objections", desc: "Master client conversations & high-ticket sales." },
              { icon: Users, title: "Exclusive Mentorship", desc: "You're never alone—we guide you every step!" },
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 text-primary">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
            
            <div className="pt-4">
                <Button 
                    onClick={onRegister}
                    size="lg" 
                    className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg"
                >
                    Get Access to This Exclusive Training
                </Button>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src={mentorImage}
                alt="Mentorship Session"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border max-w-[260px]">
              <p className="font-bold text-primary text-lg">"The right mentorship can save you 10 years of struggle."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
