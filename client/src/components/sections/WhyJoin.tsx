import { Check, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function WhyJoin() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Why Should You Consider This Career?
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto">
            It's not just a job—it's a wealth-building system.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <motion.div 
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="bg-red-50 border-red-100 h-full">
              <CardHeader>
                <CardTitle className="text-destructive flex items-center gap-2 text-2xl">
                  <X className="h-8 w-8" /> The Old Way
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center gap-2"><X className="h-5 w-5 text-destructive" /> Limited Salary</li>
                  <li className="flex items-center gap-2"><X className="h-5 w-5 text-destructive" /> Boring 9-5 Routine</li>
                  <li className="flex items-center gap-2"><X className="h-5 w-5 text-destructive" /> Constant Boss Pressure</li>
                  <li className="flex items-center gap-2"><X className="h-5 w-5 text-destructive" /> No Control Over Time</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div 
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="bg-blue-50 border-blue-100 h-full shadow-lg">
              <CardHeader>
                <CardTitle className="text-primary flex items-center gap-2 text-2xl">
                  <Check className="h-8 w-8" /> The LIC Way
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-lg text-gray-700">
                  <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-600" /> Unlimited Income Potential</li>
                  <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-600" /> Be Your Own Boss</li>
                  <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-600" /> Financial Freedom & Growth</li>
                  <li className="flex items-center gap-2"><Check className="h-5 w-5 text-green-600" /> Lifetime Royalty Income</li>
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
