import { Wrench, FileText, CheckCircle, Headphones, Zap, DollarSign } from "lucide-react";

const benefits = [
  {
    icon: Wrench,
    title: "Manutenção Inclusa",
    description: "Todas as manutenções preventivas e corretivas por nossa conta",
  },
  {
    icon: FileText,
    title: "IPVA e Documentação",
    description: "Documentação sempre em dia, sem preocupações extras",
  },
  {
    icon: CheckCircle,
    title: "Motos Revisadas",
    description: "Frota passa por revisão completa antes de cada locação",
  },
  {
    icon: Headphones,
    title: "Suporte 24h",
    description: "Atendimento via WhatsApp para qualquer emergência",
  },
  {
    icon: Zap,
    title: "Retirada Rápida",
    description: "Processo simplificado, retire sua moto no mesmo dia",
  },
  {
    icon: DollarSign,
    title: "Preço Justo",
    description: "Valores competitivos e transparentes, sem taxas ocultas",
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-background/70 font-medium uppercase tracking-wider text-sm">
            Benefícios
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4">
            Por que alugar com a ApaRent?
          </h2>
          <p className="text-background/80 text-lg">
            Oferecemos muito mais do que apenas uma moto. Confira nossos diferenciais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-xl bg-background/5 hover:bg-background/10 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-background/10 rounded-lg flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-background" />
                </div>
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-background/70 text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
