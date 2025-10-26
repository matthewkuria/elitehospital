import Hero from "./components/Hero";
import ServicesCard from "./components/ServicesCard";
import TrustedClinicSection from "./components/TrustedClinicSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <ServicesCard />
      <TrustedClinicSection />
    </main>
  );
}
