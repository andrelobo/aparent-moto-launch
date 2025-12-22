import { Button } from "@/components/ui/button";
import motoqueiroEMotos from "@/assets/motos/motoqueiro-e-motos.png";
import parceiros from "@/assets/parceiroscoloridos.png";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative bg-black pt-4 md:pt-7 pb-0 overflow-hidden"
    >
      <div className="relative z-10 w-full">
        
        {/* DESKTOP */}
        <div className="hidden lg:flex w-full">
          <div className="w-full px-4">
            
            {/* BLOCO TEXTO + PARCEIROS */}
            <div className="flex flex-col items-start">
              <div className="my-4 ml-[-1rem]">
                <img
                  src={parceiros}
                  alt="Nossos parceiros"
                  className="block max-w-[217px]"
                />
              </div>

              <span className="text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-yellow-400 leading-tight">
                Renda Extra ?
              </span>

              <span className="mt-2 text-4xl xl:text-5xl 2xl:text-6xl font-display font-bold text-white leading-tight">
                Aluguel sua moto sem burocracia.
              </span>
            </div>

            {/* BLOCO IMAGEM MOTO */}
            <div className="mt-8 flex justify-center">
              <img
                src={motoqueiroEMotos}
                alt="Motos"
                className="max-w-[550px] h-full object-contain drop-shadow-2xl animate-slide-in"
              />
            </div>
          </div>
        </div>

        {/* MOBILE / TABLET */}
        <div className="flex lg:hidden flex-col w-full">
          <div className="w-full px-4 pt-8">
            
            <div className="flex flex-col items-start">
              <div className="my-4 ml-[-1rem]">
                <img
                  src={parceiros}
                  alt="Nossos parceiros"
                  className="block max-w-[116px]"
                />
              </div>

              <span className="text-3xl sm:text-4xl font-display font-bold text-yellow-400 leading-tight animate-slide-in">
                Renda Extra?
              </span>

              <span className="mt-2 text-2xl sm:text-3xl font-display font-bold text-white leading-tight animate-slide-in">
                Aluguel sua moto sem burocracia.
              </span>
            </div>
          </div>

          <div className="w-full px-4 mt-6 flex justify-center">
            <img
              src={motoqueiroEMotos}
              alt="Motos"
              className="w-full max-w-lg object-contain drop-shadow-lg animate-slide-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}