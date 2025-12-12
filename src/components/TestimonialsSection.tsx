import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Entregador de aplicativo",
    content: "Aluguei a CG 160 Fan e não me arrependi. Moto econômica e sempre revisada. O atendimento pelo WhatsApp é muito rápido!",
    rating: 5,
  },
  {
    name: "Maria Santos",
    role: "Profissional autônoma",
    content: "Precisava de mobilidade para trabalhar e a ApaRent me salvou. Processo sem burocracia e preço justo. Super recomendo!",
    rating: 5,
  },
  {
    name: "João Oliveira",
    role: "Estudante",
    content: "Excelente opção para quem não quer se preocupar com documentação e manutenção. Moto sempre em dia!",
    rating: 5,
  },
  {
    name: "Ana Rodrigues",
    role: "Comerciante",
    content: "Uso a moto para fazer entregas do meu negócio. A economia no combustível é impressionante. Melhor custo-benefício!",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            O que nossos clientes dizem
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-background rounded-2xl p-8 md:p-12 shadow-lg">
            <Quote className="absolute top-6 left-6 h-12 w-12 text-muted/30" />
            
            <div className="relative z-10">
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-foreground text-foreground" />
                ))}
              </div>
              
              <p className="text-lg md:text-xl text-foreground text-center mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </p>
              
              <div className="text-center">
                <p className="font-display font-semibold text-foreground">
                  {testimonials[currentIndex].name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonials[currentIndex].role}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-foreground w-4"
                        : "bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
