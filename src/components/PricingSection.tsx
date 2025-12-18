import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

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
    price: "R$ 300",
    period: "/semana",
    highlight: false,
  },
  {
    name: "Plano Pro 42",
    price: "R$ 325",
    period: "/semana",
    highlight: true,
  },
  {
    name: "Plano Premium 36",
    price: "R$ 350",
    period: "/semana",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          
          <p className="text-lg font-semibold text-primary mt-4 mb-4">
            ZERO BUROCRACIA 
          </p>
          <p className="text-lg font-semibold text-primary mt-4 mb-4">
            SEM ANÁLISE DE CRÉDITO
          </p>
          <p className="text-muted-foreground text-sm mt-2">
            MOTO HONDA START 2026 
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-foreground">
            {baseFeatures.map((feature, index) => (
              <span key={index} className="flex items-center gap-1">
                <Check className="h-4 w-4 text-whatsapp flex-shrink-0" />
                {feature}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
                  <span className="text-4xl font-display font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
              </CardContent>

            </Card>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          * Valores sujeitos a alteração. Caução de segurança pode ser solicitado.
        </p>
      </div>
    </section>
  );
}