import { Button } from "@/components/ui/button";
import { Timer } from "lucide-react";

interface FinalCTAProps {
  onRegister: () => void;
}

export function FinalCTA({ onRegister }: FinalCTAProps) {
  return (
    <section id="contact" className="py-24 bg-primary text-white text-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>

      <div className="container px-4 md:px-6 relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
          This Is Your Moment – Take Charge of Your Future! 🚀
        </h2>

        <div className="flex flex-col items-center justify-center gap-4 mb-10">
          <div className="bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20 flex items-center gap-2 animate-pulse">
            <Timer className="h-5 w-5 text-secondary" />
            <span className="font-semibold text-blue-100">Limited Slots Available for this Month</span>
          </div>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
            Don’t let doubt stop you from achieving financial freedom.
          </p>
        </div>

        <Button
          onClick={onRegister}
          size="lg"
          className="bg-secondary hover:bg-secondary/90 text-white font-bold text-xl md:text-2xl h-20 px-12 rounded-full shadow-[0_0_40px_-10px_rgba(244,160,36,0.6)] transform hover:scale-105 transition-all duration-300"
        >
          YES! I Want to Build a ₹1 Crore Career!
        </Button>
      </div>
    </section>
  );
}
