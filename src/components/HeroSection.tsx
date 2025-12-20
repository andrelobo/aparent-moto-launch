import { Button } from "@/components/ui/button";
import motoqueiroEMotos from "@/assets/motos/motoqueiro-e-motos.png";
import parceiros from "@/assets/parceiroscoloridos.png";
import { SubscriptionForm } from "./SubscriptionForm";

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-black pt-8 md:pt-14 pb-0 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        {/* Mobile/Tablet Layout */}
        <div className="flex lg:hidden flex-col flex-1">
          {/* Text Content */}
          <div className="container mx-auto px-4 pt-8 text-left">
            <span className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight animate-slide-in">
              Renda Extra ?
            </span>
            <div className="flex flex-col sm:flex-row gap-3 justify-start my-4">
              <img src={parceiros} alt="Nossos parceiros" className="w-full max-w-[101px]" />
            </div>
            <span className="text-lg sm:text-xl font-display text-white leading-tight animate-slide-in whitespace-nowrap">
              Alugue sua moto e comece hoje.
            </span>
            <div className="mt-6">
              <SubscriptionForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
