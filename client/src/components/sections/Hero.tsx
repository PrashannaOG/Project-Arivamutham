import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-team.jpg";

interface HeroProps {
  onRegister: () => void;
}

export function Hero({ onRegister }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-blue-100 py-20 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center space-y-8"
          >
            <div className="space-y-4">
              <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary">
                Turn Your 20s into <span className="text-secondary">Crores!</span>
              </h1>
              <p className="max-w-[600px] text-gray-700 md:text-xl font-medium">
                Discover a Proven, Zero-Investment Career Path to <span className="text-primary font-bold">₹1 Lakh/Month</span> & Financial Freedom!
              </p>
              <p className="text-muted-foreground text-lg">
                Join the LIC Career Advisor program. Full mentorship, unlimited earnings.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button 
                onClick={onRegister}
                size="lg" 
                className="bg-secondary hover:bg-secondary/90 text-white font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-orange-500/20 transform hover:-translate-y-1 transition-all"
              >
                Book Your FREE Strategy Session
              </Button>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto aspect-video lg:aspect-square overflow-hidden rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          >
            <img
              alt="Successful Young Professionals"
              className="object-cover w-full h-full"
              src={heroImage}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
