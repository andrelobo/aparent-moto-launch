import { Button } from "@/components/ui/button";
import motoqueiroEMotos from "@/assets/motos/motoqueiro-e-motos.png";
import parceiros from "@/assets/parceiroscoloridos.png";

export function HeroSection() {
  return (

    <section id="inicio" className="relative bg-black pt-4 md:pt-7 pb-0 overflow-hidden">

    {/* Content Container */}
      <div className="relative z-10 flex flex-col">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex flex-col justify-center">
          <div className="container mx-auto px-4">
            {/* Text Content Block */}
            <div className="text-left">
                          <div className="flex justify-start my-4">
                            <img src={parceiros} alt="Nossos parceiros" className="w-full max-w-[189px]" />
                          </div>
                          <div>
                            <span className="text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-yellow-400 leading-tight">
  Renda Extra ?
</span>
                          </div>
                          <div className="mt-2">
                            <span className="text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-white leading-tight">
                              Aluguel sua moto sem burocracia.
                            </span>
                          </div>
            </div>

            {/* Image Content Block */}
            <div className="flex justify-center items-center">
              {/* Right Side - Motorcycles */}
              <div className="relative flex items-center justify-center h-full">
                <img 
                  src={motoqueiroEMotos} 
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
            <div className="flex flex-col sm:flex-row gap-3 justify-start my-4">
              <img src={parceiros} alt="Nossos parceiros" className="w-full max-w-[101px]" />
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-display font-bold text-yellow-400 leading-tight animate-slide-in">
                Renda Extra?
              </span>
            </div>
            <div className="mt-2">
              <span className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight animate-slide-in whitespace-nowrap">
                  Aluguel sua moto sem burocracia.
              </span>
            </div>
          </div>

          {/* Motorcycles Grid - Mobile */}
          <div className="container mx-auto px-4 flex justify-center items-center">
            <div className="flex justify-center items-center w-full max-w-lg">
              <img 
                src={motoqueiroEMotos} 
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