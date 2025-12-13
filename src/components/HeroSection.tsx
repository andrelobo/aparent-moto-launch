import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero01.png";

export function HeroSection() {
  return (
    <section id="inicio" className="relative h-screen min-h-[600px] pt-16 md:pt-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-foreground/40 z-10" />
        <img
          src={heroImage}
          alt="Aluguel de motos em Manaus - ApaRent"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6 leading-tight">
              Alugue sua moto em Manaus
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-8 max-w-xl">
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
                <Button size="lg" variant="outline" className="border-background bg-transparent text-background hover:bg-background hover:text-foreground text-lg px-8">
                  Ver motos disponíveis
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
