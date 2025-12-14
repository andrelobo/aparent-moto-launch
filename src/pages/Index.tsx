import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { PricingSection } from "@/components/PricingSection";
import { Footer } from "@/components/Footer";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { InstagramWidget } from "@/components/InstagramWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <PricingSection />
      </main>
      <Footer />
      <WhatsAppWidget />
      <InstagramWidget />
    </div>
  );
};

export default Index;
