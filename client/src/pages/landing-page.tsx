import { useState } from "react";
import { Hero } from "@/components/sections/Hero";
import { WhyJoin } from "@/components/sections/WhyJoin";
import { Earnings } from "@/components/sections/Earnings";
import { TargetAudience } from "@/components/sections/TargetAudience";
import { Curriculum } from "@/components/sections/Curriculum";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { RegistrationModal } from "@/components/RegistrationModal";
import { Header } from "@/components/Header";

export default function LandingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  return (
    <main className="min-h-screen font-sans text-foreground bg-background scroll-smooth">
      <Header />
      <Hero onRegister={openModal} />
      <WhyJoin />
      <Earnings onRegister={openModal} />
      <TargetAudience onRegister={openModal} />
      <Curriculum onRegister={openModal} />
      <Testimonials onRegister={openModal} />
      <FAQ onRegister={openModal} />
      <FinalCTA onRegister={openModal} />

      <RegistrationModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
        <div className="container">
          <p>© {new Date().getFullYear()} LIC Career Advisory Program. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
