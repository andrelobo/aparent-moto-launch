import { Shield, Clock, ThumbsUp, FileCheck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Frota Revisada",
    description: "Todas as motos passam por manutenção preventiva",
  },
  {
    icon: Clock,
    title: "Sem Burocracia",
    description: "Processo rápido e descomplicado",
  },
  {
    icon: ThumbsUp,
    title: "Atendimento Ágil",
    description: "Suporte humanizado via WhatsApp",
  },
  {
    icon: FileCheck,
    title: "Sem Consulta SPC",
    description: "Facilitamos para você começar a rodar",
  },
];

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
              Sobre nós
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-6">
              A ApaRent é a sua parceira de mobilidade em Manaus
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Somos uma locadora de motos comprometida em oferecer a melhor experiência 
              de mobilidade urbana em Manaus. Nossa frota é composta por motos Honda 
              revisadas e prontas para você rodar com segurança e economia.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ideal para entregadores, profissionais que precisam de agilidade no dia a dia, 
              ou qualquer pessoa que busca uma alternativa econômica e prática para se 
              locomover pela cidade.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
