import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter nome limpo para alugar?",
    answer: "Não! Não fazemos consulta ao SPC/Serasa. Nosso processo é simplificado para facilitar sua locação.",
  },
  {
    question: "Quais documentos são necessários?",
    answer: "Você precisa apresentar CNH válida com categoria A, comprovante de residência recente e documento de identificação (RG ou CNH).",
  },
  {
    question: "Posso usar a moto para aplicativos de delivery?",
    answer: "Sim! Muitos de nossos clientes utilizam as motos para trabalhar com aplicativos de entrega. As motos são ideais para esse tipo de uso.",
  },
  {
    question: "Como funciona a manutenção?",
    answer: "Todas as manutenções preventivas e corretivas são por nossa conta. Basta nos avisar quando necessário que resolvemos rapidamente.",
  },
  {
    question: "Qual o valor do caução?",
    answer: "O valor do caução varia de acordo com o plano escolhido. Entre em contato pelo WhatsApp para mais detalhes sobre condições específicas.",
  },
  {
    question: "Posso trocar de moto durante o contrato?",
    answer: "Sim, é possível trocar de modelo durante o período de locação. Consulte-nos para verificar disponibilidade e condições.",
  },
  {
    question: "Vocês entregam a moto?",
    answer: "Sim, podemos combinar a entrega em local de sua preferência em Manaus, mediante taxa adicional. Consulte disponibilidade.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Perguntas e Respostas
          </h2>
          <p className="text-muted-foreground text-lg">
            Tire suas dúvidas sobre nossos serviços de locação de motos
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-secondary rounded-lg px-6 border-none"
              >
                <AccordionTrigger className="text-left font-display font-semibold hover:no-underline py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
