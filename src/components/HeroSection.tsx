import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80",
    title: "Alugue sua moto em Manaus",
    subtitle: "Liberdade para rodar pela cidade com economia e praticidade",
  },
  {
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=1920&q=80",
    title: "Mobilidade urbana inteligente",
    subtitle: "Fuja do trânsito e economize tempo no seu dia a dia",
  },
  {
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=1920&q=80",
    title: "Frota revisada e pronta",
    subtitle: "Motos Honda de qualidade com manutenção em dia",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="inicio" className="relative h-screen min-h-[600px] pt-16 md:pt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-foreground/60 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-background mb-6 leading-tight">
              {slides[currentSlide].title}
            </h1>
            <p className="text-lg md:text-xl text-background/90 mb-8 max-w-xl">
              {slides[currentSlide].subtitle}
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

      {/* Navigation */}
      <div className="absolute bottom-8 left-0 right-0 z-20">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-background w-8"
                    : "bg-background/50 hover:bg-background/70"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              className="text-background hover:bg-background/20"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              className="text-background hover:bg-background/20"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
