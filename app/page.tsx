import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Goals from "@/components/Goals";
import WhyInMotion from "@/components/WhyInMotion";
import Classes from "@/components/Classes";
import Plans from "@/components/Plans";
import FreeTrial from "@/components/FreeTrial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Header />
      <Hero />
      <Goals />
      <WhyInMotion />
      <Classes />
      <Plans />
      <FreeTrial />
      <Footer />
    </main>
  );
}