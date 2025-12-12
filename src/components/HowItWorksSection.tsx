import { Bike, FileCheck, CreditCard, Key } from "lucide-react";

const steps = [
  {
    icon: Bike,
    step: "01",
    title: "Escolha sua moto",
    description: "Navegue pela nossa frota e escolha o modelo ideal para você",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "Envie seus documentos",
    description: "CNH válida (categoria A) e comprovante de residência",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Realize o pagamento",
    description: "Pague a primeira parcela + caução de segurança",
  },
  {
    icon: Key,
    step: "04",
    title: "Retire sua moto",
    description: "Pronto! Retire sua moto e comece a rodar pela cidade",
  },
];

export function HowItWorksSection() {
  return (
    <section id="como-funciona" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Passo a passo
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Como funciona o aluguel?
          </h2>
          <p className="text-muted-foreground text-lg">
            Processo simples e rápido. Em poucos passos você já está rodando.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
              )}
              
              <div className="relative bg-background p-6 rounded-xl text-center">
                <div className="w-24 h-24 mx-auto mb-4 relative">
                  <div className="absolute inset-0 bg-foreground rounded-full flex items-center justify-center">
                    <item.icon className="h-10 w-10 text-background" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-secondary border-2 border-foreground rounded-full flex items-center justify-center text-xs font-bold text-foreground">
                    {item.step}
                  </span>
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
