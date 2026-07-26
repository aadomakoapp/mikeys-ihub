import { useState } from "react";
import { TopBar } from "@/components/TopBar";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { Categories } from "@/components/Categories";
import { Featured } from "@/components/Featured";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar query={query} onQueryChange={setQuery} />
      <main>
        <Hero />
        <TrustStrip />
        <Categories />
        <Featured query={query} onQueryChange={setQuery} />
        <HowItWorks />
        <Testimonials />
        <Visit />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
