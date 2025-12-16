import { Button } from "@/components/ui/button";
import motoqueiroHero1 from "@/assets/motos/motoqueiro_hero1.png";
import testeHero1 from "@/assets/testeHero1.png";
import parceiros from "@/assets/parceiros.png";

export function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen bg-black pt-16 md:pt-20 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 h-full min-h-[calc(100vh-4rem)] flex flex-col justify-center">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col justify-center">
          <div className="container mx-auto px-4">
            {/* Text Content Block */}
            <div className="text-left mb-8">
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-white mb-4 leading-tight">
                Conquiste seus sonhos.<br />
                Alugue sua moto.
              </h1>
              <div className="flex justify-start">
                <img src={parceiros} alt="Nossos parceiros" className="w-full max-w-[336px]" />
              </div>
            </div>

            {/* Image Content Block */}
            <div className="grid grid-cols-2 gap-8 items-center">
              {/* Left Side - Motoqueiro Image */}
              <div className="relative flex items-center justify-start h-full force-align-left">
                <img 
                  src={motoqueiroHero1} 
                  alt="Motoqueiro" 
                  className="max-w-[550px] h-full object-contain"
                />
              </div>
              {/* Right Side - Motorcycles */}
              <div className="relative flex items-center justify-end h-full">
                <img 
                  src={testeHero1} 
                  alt="Motos" 
                  className="max-w-[550px] h-full object-contain drop-shadow-2xl animate-slide-in"
                />
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

          {/* Motoqueiro Image - Mobile */}
          <div className="flex justify-start px-4 mb-6">
            <img 
              src={motoqueiroHero1} 
              alt="Motoqueiro" 
              className="w-96 sm:w-[512px] object-contain animate-fade-in"
            />
          </div>

          {/* Motorcycles Grid - Mobile */}
          <div className="flex-1 container mx-auto px-4 pb-8 flex justify-end items-end h-[200px]">
            <div className="flex justify-end items-end w-full max-w-lg">
              <img 
                src={testeHero1} 
                alt="Motos" 
                className="w-full h-full object-contain drop-shadow-lg animate-slide-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
