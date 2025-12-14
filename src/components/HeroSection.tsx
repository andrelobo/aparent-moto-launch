import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCouple from "@/assets/hero-couple.png";
import motoAzul from "@/assets/motos/honda-fan-azul.png";
import motoCinza from "@/assets/motos/honda-titan-cinza.png";
import motoVermelha from "@/assets/motos/honda-start-vermelha.png";

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
                    Alugue sua moto em Manaus
                  </h1>
                  <p className="text-lg xl:text-xl text-white/90 mb-6 max-w-md">
                    Liberdade para rodar pela cidade com economia e praticidade
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://wa.me/5592999999999?text=Olá! Gostaria de alugar uma moto."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground gap-2 text-lg px-8">
                        <MessageCircle className="h-5 w-5" />
                        Alugue agora pelo WhatsApp
                      </Button>
                    </a>
                    <a href="#motos">
                      <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-black text-lg px-8">
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
                <div className="relative w-full h-[500px] xl:h-[600px]">
                  {/* Moto Azul - Top Left */}
                  <img 
                    src={motoAzul} 
                    alt="Honda Fan Azul" 
                    className="absolute top-0 left-0 w-[55%] object-contain drop-shadow-2xl animate-slide-in"
                    style={{ animationDelay: '0.1s' }}
                  />
                  {/* Moto Cinza - Top Right */}
                  <img 
                    src={motoCinza} 
                    alt="Honda Titan Cinza" 
                    className="absolute top-4 right-0 w-[55%] object-contain drop-shadow-2xl animate-slide-in"
                    style={{ animationDelay: '0.2s' }}
                  />
                  {/* Moto Vermelha - Bottom Center */}
                  <img 
                    src={motoVermelha} 
                    alt="Honda Start Vermelha" 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[60%] object-contain drop-shadow-2xl animate-slide-in"
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
          <div className="container mx-auto px-4 pt-8 text-center">
            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4 leading-tight animate-slide-in">
              Alugue sua moto em Manaus
            </h1>
            <p className="text-base sm:text-lg text-white/90 mb-6 max-w-md mx-auto">
              Liberdade para rodar pela cidade com economia e praticidade
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <a
                href="https://wa.me/5592999999999?text=Olá! Gostaria de alugar uma moto."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground gap-2 w-full sm:w-auto">
                  <MessageCircle className="h-5 w-5" />
                  Alugue pelo WhatsApp
                </Button>
              </a>
              <a href="#motos">
                <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-black w-full sm:w-auto">
                  Ver motos
                </Button>
              </a>
            </div>
          </div>

          {/* Couple Image - Mobile */}
          <div className="flex justify-center px-4 mb-6">
            <img 
              src={heroCouple} 
              alt="Casal de motociclistas felizes" 
              className="w-48 sm:w-64 object-contain animate-fade-in"
            />
          </div>

          {/* Motorcycles Grid - Mobile */}
          <div className="flex-1 container mx-auto px-4 pb-8">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 items-end h-full max-h-[300px]">
              <img 
                src={motoAzul} 
                alt="Honda Fan Azul" 
                className="w-full object-contain drop-shadow-lg animate-slide-in"
                style={{ animationDelay: '0.1s' }}
              />
              <img 
                src={motoVermelha} 
                alt="Honda Start Vermelha" 
                className="w-full object-contain drop-shadow-lg animate-slide-in"
                style={{ animationDelay: '0.2s' }}
              />
              <img 
                src={motoCinza} 
                alt="Honda Titan Cinza" 
                className="w-full object-contain drop-shadow-lg animate-slide-in"
                style={{ animationDelay: '0.3s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
