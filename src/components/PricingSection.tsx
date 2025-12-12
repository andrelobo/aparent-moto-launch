import { Check, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const plans = [
  {
    name: "Plano Semanal",
    price: "R$ 180",
    period: "/semana",
    description: "Ideal para quem quer testar antes de fechar",
    features: [
      "Moto revisada",
      "Documentação inclusa",
      "Suporte WhatsApp",
      "Retirada no mesmo dia",
    ],
    highlight: false,
  },
  {
    name: "Plano Mensal",
    price: "R$ 600",
    period: "/mês",
    description: "O mais escolhido pelos nossos clientes",
    features: [
      "Moto revisada",
      "Documentação inclusa",
      "Manutenção inclusa",
      "Suporte 24h",
      "Desconto progressivo",
    ],
    highlight: true,
  },
  {
    name: "Plano Trimestral",
    price: "R$ 500",
    period: "/mês",
    description: "Melhor custo-benefício para uso contínuo",
    features: [
      "Moto revisada",
      "Documentação inclusa",
      "Manutenção inclusa",
      "Suporte 24h",
      "Desconto de 17%",
      "Prioridade na troca",
    ],
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="planos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Planos e Preços
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-muted-foreground text-lg">
            Valores transparentes e sem surpresas. Todos os planos incluem IPVA e licenciamento.
          </p>
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
                <p className="text-muted-foreground text-sm mt-1">
                  {plan.description}
                </p>
              </CardHeader>
              <CardContent className="text-center pb-6">
                <div className="mb-6">
                  <span className="text-4xl font-display font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm">
                      <Check className="h-4 w-4 text-whatsapp flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <a
                  href={`https://wa.me/5592999999999?text=Olá! Tenho interesse no ${plan.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    className={`w-full gap-2 ${
                      plan.highlight
                        ? "bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground"
                        : ""
                    }`}
                    variant={plan.highlight ? "default" : "outline"}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Quero esse plano
                  </Button>
                </a>
              </CardFooter>
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
