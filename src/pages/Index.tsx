import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
// Removed import { WhatsAppWidget } from "@/components/WhatsAppWidget";
// Removed import { InstagramWidget } from "@/components/InstagramWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
      </main>
      <Footer />
      {/* Removed <WhatsAppWidget /> */}
      {/* Removed <InstagramWidget /> */}
    </div>
  );
};

export default Index;
