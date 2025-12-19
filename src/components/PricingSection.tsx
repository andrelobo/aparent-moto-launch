import { Check, Star } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Autoplay, // Import Autoplay
} from "@/components/ui/carousel";

const baseFeatures = [
  "IPVA incluso",
  "Rastreamento",
  "Seguro",
  "Manutenção Preventiva",
  "Moto Substituta",
];

const plans = [
  {
    name: "Plano Start 48",
    weeklyPrice: 300,
    highlight: false,
  },
  {
    name: "Plano Pro 42",
    weeklyPrice: 325,
    highlight: true,
  },
  {
    name: "Plano Premium 36",
    weeklyPrice: 350,
    highlight: false,
  },
];

export function PricingSection() {
  const autoplayPlugin = [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ];

  return (
    <section id="planos" className="pt-0 pb-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">          
          
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative overflow-hidden transition-all hover:shadow-lg ${
                plan.highlight
                  ? "border-foreground shadow-xl scale-105"
                  : "border-border"
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                  <Star className="h-3 w-3 fill-current" />
                  Mais popular
                </div>
              )}
              <CardHeader className="text-center pb-4">
                <h3 className="font-display font-bold text-xl text-foreground">
                  {plan.name}
                </h3>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <div className="mb-6">
                  <div className="text-4xl font-display text-foreground font-extrabold"> {/* Weekly, extrabold, large */}
                    <span>R$ {plan.weeklyPrice}</span>
                    <span className="text-foreground text-base"> /semana</span>
                  </div>
                  <div className="text-lg text-muted-foreground mt-1"> {/* Monthly, not bold, smaller */}
                    <span>R$ {plan.weeklyPrice * 4}</span>
                    <span className="text-muted-foreground text-sm"> /mês</span>
                  </div>
                </div>
              </CardContent>

            </Card>
          ))}
        </div>

        <div className="md:hidden w-full">
        <Carousel
            opts={{
              align: "start",
              startIndex: 1, // Start with "Plano Pro 42"
            }}
            plugins={autoplayPlugin}
            className="w-full max-w-xs mx-auto"
          >
            <CarouselContent>
              {plans.map((plan, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <Card
                      className={`h-full relative overflow-hidden transition-all ${
                        plan.highlight
                          ? "border-foreground shadow-xl"
                          : "border-border"
                      }`}
                    >
                      {plan.highlight && (
                        <div className="absolute top-0 right-0 bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-bl-lg flex items-center gap-1">
                          <Star className="h-3 w-3 fill-current" />
                          Mais popular
                        </div>
                      )}
                      <CardHeader className="text-center pb-4">
                        <h3 className="font-display font-bold text-xl text-foreground">
                          {plan.name}
                        </h3>
                      </CardHeader>
                      <CardContent className="text-center pb-6">
                        <div className="mb-6">
                          <div className="text-4xl font-display text-foreground font-extrabold"> {/* Weekly, extrabold, large */}
                            <span>R$ {plan.weeklyPrice}</span>
                            <span className="text-foreground text-base"> /semana</span>
                          </div>
                          <div className="text-lg text-muted-foreground mt-1"> {/* Monthly, not bold, smaller */}
                            <span>R$ {plan.weeklyPrice * 4}</span>
                            <span className="text-muted-foreground text-sm"> /mês</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Moved div below carousel */}
        <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground">
          {baseFeatures.map((feature, index) => (
            <span key={index} className="flex items-center gap-1">
              <Check className="h-4 w-4 text-whatsapp flex-shrink-0" />
              {feature}
            </span>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Valores sujeitos a alteração. Caução de segurança pode ser solicitado.
        </p>
      </div>
    </section>
  );
}