import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TargetAudienceProps {
  onRegister: () => void;
}

export function TargetAudience({ onRegister }: TargetAudienceProps) {
  return (
    <section id="target-audience" className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
              Is This Career Right for You?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              We are looking for ambitious individuals who are ready to take control of their financial destiny.
            </p>
            <Button
              onClick={onRegister}
              variant="secondary"
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg h-14 px-8"
            >
              See If You Qualify
            </Button>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Perfect if you:</h3>
            <ul className="space-y-4">
              {[
                "Are between 22-30 years old",
                "Are a graduate or higher",
                "Have good communication skills",
                "Are self-motivated & tech-savvy",
                "Want financial freedom & entrepreneurship"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-lg">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
