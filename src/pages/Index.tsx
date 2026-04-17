import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Featured } from "@/components/Featured";
import { WhyUs } from "@/components/WhyUs";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Categories />
        <Featured />
        <WhyUs />
        <Visit />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
