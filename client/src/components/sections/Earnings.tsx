import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { year: "Year 1", income: 15, label: "15K" },
  { year: "Year 2", income: 45, label: "45K" },
  { year: "Year 3", income: 100, label: "1 Lakh" },
  { year: "Year 5", income: 250, label: "2.5 Lakhs" },
  { year: "Year 10", income: 800, label: "8 Lakhs+" },
];

interface EarningsProps {
  onRegister: () => void;
}

export function Earnings({ onRegister }: EarningsProps) {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            How Much Can You Earn? 💰
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Your income grows exponentially with your effort and renewal commissions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-primary mb-6">Income Milestones</h3>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-primary font-bold text-xl">1</span>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">₹1 Lakh Per Month</h4>
                      <p className="text-muted-foreground">Achievable within 3 years with consistent effort.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-secondary font-bold text-xl">2</span>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">₹1 Crore Per Year</h4>
                      <p className="text-muted-foreground">Possible with smart scaling and team building.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold text-xl">3</span>
                    <div>
                      <h4 className="font-bold text-xl text-gray-900">Lifetime Royalty</h4>
                      <p className="text-muted-foreground">Earn renewal income even when you stop working.</p>
                    </div>
                  </li>
                </ul>
             </div>
             <Button 
                onClick={onRegister}
                size="lg" 
                className="w-full sm:w-auto bg-destructive hover:bg-destructive/90 text-white font-bold text-lg h-14"
              >
                Learn the Exact Roadmap
              </Button>
          </div>

          <div className="h-[400px] w-full bg-white p-4 rounded-xl shadow-lg border">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#004AAD" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#004AAD" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="year" axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#6b7280'}} tickFormatter={(value) => `₹${value}k`} />
                <Tooltip 
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  formatter={(value: number) => [`₹${value},000+`, "Monthly Income"]}
                />
                <Area 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#004AAD" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorIncome)" 
                />
              </AreaChart>
            </ResponsiveContainer>
            <p className="text-center text-sm text-muted-foreground mt-4">Projected monthly income trajectory over time</p>
          </div>
        </div>
      </div>
    </section>
  );
}
