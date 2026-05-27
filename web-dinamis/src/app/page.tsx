import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BeritaSection from "@/components/BeritaSection";

export default function Home() {
  return (
    <main>
      <Navbar />
      {/* Pastikan HeroSection di dalamnya berisi teks "Diamond Store" */}
      <HeroSection /> 
      <BeritaSection />
    </main>
  );
}