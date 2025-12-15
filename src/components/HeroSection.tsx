import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCouple from "@/assets/hero-couple.png";
import motoAzul from "@/assets/motos/honda-fan-azul.png";
import motoCinza from "@/assets/motos/honda-titan-cinza.png";
import motoVermelha from "@/assets/motos/honda-start-vermelha.png";
import parceiros from "@/assets/parceiros.png";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-black pt-16 md:pt-20 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 h-full min-h-[calc(100vh-4rem)] flex flex-col">
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-1 items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 gap-8 items-center">
              {/* Left Side - Couple + Text */}
              <div className="relative flex flex-col items-start">
                <div className="relative z-10 mb-6">
                  
                  <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-white mb-4 leading-tight">
                    Conquiste seus sonhos.<br />
                    Alugue sua moto.
                  </h1>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <img src={parceiros} alt="Nossos parceiros" className="w-full max-w-[336px]" />
                    <a href="#motos">
                      <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-black text-lg px-8 invisible">
                        Ver motos disponíveis
                      </Button>
                    </a>
                  </div>
                </div>
                {/* Couple Image */}
                <img 
                  src={heroCouple} 
                  alt="Casal de motociclistas felizes" 
                  className="w-full max-w-md xl:max-w-lg object-contain animate-fade-in"
                />
              </div>

              {/* Right Side - Motorcycles */}
              <div className="relative flex items-center justify-center h-full">
                <div className="relative w-full flex justify-center items-end gap-2 h-[400px] xl:h-[450px]">
                  {/* Moto Azul */}
                  <img 
                    src={motoAzul} 
                    alt="Honda Fan Azul" 
                    className="max-w-[340px] h-full object-contain drop-shadow-2xl animate-slide-in"
                    style={{ animationDelay: '0.1s' }}
                  />
                  {/* Moto Vermelha */}
                  <img 
                    src={motoVermelha} 
                    alt="Honda Start Vermelha" 
                    className="max-w-[340px] h-full object-contain drop-shadow-2xl animate-slide-in"
                    style={{ animationDelay: '0.2s' }}
                  />
                  {/* Moto Cinza */}
                  <img 
                    src={motoCinza} 
                    alt="Honda Titan Cinza" 
                    className="max-w-[340px] h-full object-contain drop-shadow-2xl animate-slide-in"
                    style={{ animationDelay: '0.3s' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile/Tablet Layout */}
        <div className="flex lg:hidden flex-col flex-1">
          {/* Text Content */}
          <div className="container mx-auto px-4 pt-8 text-left">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight animate-slide-in">
              Conquiste seus sonhos.<br />
              Alugue sua moto.
            </h1>
            <div className="flex flex-col sm:flex-row gap-3 justify-start mb-8">
              <img src={parceiros} alt="Nossos parceiros" className="w-full max-w-[180px]" />
              <a href="#motos">
                <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-black w-full sm:w-auto invisible">
                  Ver motos
                </Button>
              </a>
            </div>
          </div>

          {/* Couple Image - Mobile */}
          <div className="flex justify-start px-4 mb-6">
            <img 
              src={heroCouple} 
              alt="Casal de motociclistas felizes" 
              className="w-96 sm:w-[512px] object-contain animate-fade-in"
            />
          </div>

          {/* Motorcycles Grid - Mobile */}
          <div className="flex-1 container mx-auto px-4 pb-8 flex justify-center items-end h-[200px]">
            <div className="grid grid-cols-3 gap-1 sm:gap-2 w-full max-w-lg">
              {/* Moto Azul */}
              <img 
                src={motoAzul} 
                alt="Honda Fan Azul" 
                className="w-full h-full object-contain drop-shadow-lg animate-slide-in"
                style={{ animationDelay: '0.1s' }}
              />
              {/* Moto Vermelha */}
              <img 
                src={motoVermelha} 
                alt="Honda Start Vermelha" 
                className="w-full h-full object-contain drop-shadow-lg animate-slide-in scale-125"
                style={{ animationDelay: '0.2s' }}
              />
              {/* Moto Cinza */}
              <img 
                src={motoCinza} 
                alt="Honda Titan Cinza" 
                className="w-full h-full object-contain drop-shadow-lg animate-slide-in scale-125"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
