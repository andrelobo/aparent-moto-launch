import { MapPin, Phone, Clock, MessageCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    content: "Manaus, Amazonas",
    subtitle: "Brasil",
  },
  {
    icon: Phone,
    title: "Telefone",
    content: "(92) 99999-9999",
    subtitle: "WhatsApp disponível",
  },
  {
    icon: Clock,
    title: "Horário",
    content: "Seg - Sáb: 8h às 18h",
    subtitle: "Domingo: Fechado",
  },
  {
    icon: Mail,
    title: "E-mail",
    content: "contato@aparent.com.br",
    subtitle: "Respondemos em até 24h",
  },
];

export function ContactSection() {
  return (
    <section id="contato" className="py-20 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-background/70 font-medium uppercase tracking-wider text-sm">
              Contato
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-6">
              Entre em contato conosco
            </h2>
            <p className="text-background/80 text-lg mb-8 leading-relaxed">
              Estamos prontos para atender você! Tire suas dúvidas, solicite um 
              orçamento ou agende uma visita. Nosso atendimento é rápido e humanizado.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 bg-background/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">{info.title}</p>
                    <p className="text-background/90">{info.content}</p>
                    <p className="text-background/60 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/5592999999999?text=Olá! Gostaria de mais informações sobre locação de motos."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground gap-2">
                <MessageCircle className="h-5 w-5" />
                Fale conosco pelo WhatsApp
              </Button>
            </a>
          </div>

          {/* Map */}
          <div className="h-[400px] rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.19036281522!2d-60.10927295!3d-3.1190275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926c1bc8b37647b7%3A0x2b9282e4fca2e1a8!2sManaus%2C%20AM!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização ApaRent em Manaus"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
