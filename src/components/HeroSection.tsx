import { Button } from "@/components/ui/button";
import motosJuntas from "@/assets/motos/motos-juntas.jpeg";
import parceiros from "@/assets/parceiros.png";

export function HeroSection() {
  return (
    <section id="inicio" className="relative bg-black pt-16 md:pt-20 pb-16 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col justify-center">
          <div className="container mx-auto px-4">
            {/* Text Content Block */}
            <div className="text-left">
              <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-white mb-4 leading-tight">
                Conquiste seus sonhos.<br />
                Alugue sua moto.
              </h1>
              <div className="flex justify-start">
                <img src={parceiros} alt="Nossos parceiros" className="w-full max-w-[336px]" />
              </div>
            </div>

            {/* Image Content Block */}
            <div className="flex justify-center items-center">
              {/* Right Side - Motorcycles */}
              <div className="relative flex items-center justify-center h-full">
                <img 
                  src={motosJuntas} 
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
            </div>
          </div>

          {/* Motorcycles Grid - Mobile */}
          <div className="container mx-auto px-4 flex justify-center items-center">
            <div className="flex justify-center items-center w-full max-w-lg">
              <img 
                src={motosJuntas} 
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
