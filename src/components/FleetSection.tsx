import { Fuel, Gauge, Settings, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

const motorcycles = [
  {
    name: "Honda CG 160 Start",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    features: ["160cc", "Econômica", "Ideal para iniciantes"],
    highlight: "Mais econômica",
  },
  {
    name: "Honda CG 160 Fan",
    image: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=600&q=80",
    features: ["160cc", "Versátil", "Ótimo custo-benefício"],
    highlight: "Mais popular",
  },
  {
    name: "Honda CG 160 Titan",
    image: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80",
    features: ["160cc", "Potente", "Conforto superior"],
    highlight: "Mais completa",
  },
];

export function FleetSection() {
  return (
    <section id="motos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-muted-foreground font-medium uppercase tracking-wider text-sm">
            Nossa Frota
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
            Motos disponíveis para locação
          </h2>
          <p className="text-muted-foreground text-lg">
            Escolha a moto ideal para suas necessidades. Todas revisadas e prontas para rodar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motorcycles.map((moto, index) => (
            <Card key={index} className="group overflow-hidden border-border hover:border-foreground/20 transition-colors">
              <CardHeader className="p-0 relative">
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-foreground text-background text-xs font-semibold px-3 py-1 rounded-full">
                    {moto.highlight}
                  </span>
                </div>
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={moto.image}
                    alt={moto.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="text-xl font-display font-bold text-foreground mb-4">
                  {moto.name}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Gauge className="h-4 w-4" />
                    <span>{moto.features[0]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Fuel className="h-4 w-4" />
                    <span>{moto.features[1]}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Settings className="h-4 w-4" />
                    <span>{moto.features[2]}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <a
                  href={`https://wa.me/5592999999999?text=Olá! Tenho interesse na ${moto.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button className="w-full bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Quero essa moto
                  </Button>
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
