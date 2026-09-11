import Header from "@/components/Header";
import Schedule from "@/components/Schedule";
import Footer from "@/components/Footer";

export default function HorariosPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <div className="pt-20">
        <Schedule />
      </div>

      <Footer />
    </main>
  );
}