import { useTheme } from "@/components/ThemeProvider";
import logoNatalina from "@/assets/logo_natalina.png";
import { Mail, Phone } from "lucide-react"; // Importando ícones

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <footer className="bg-secondary py-3 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-4">
          {/* Logo */}
          <img
            src={logoNatalina}
            alt="ApaRent - Locadora de Motos"
            className="h-8 w-auto"
          />

          {/* Contact Information - TUDO ALINHADO À ESQUERDA */}
          <div className="flex flex-col gap-2 text-muted-foreground text-xs">
            {/* Telefone com ícone */}
            <div className="flex items-center gap-2">
              <Phone className="h-3 w-3" />
              <span>92 98116-0563 / 99159-4210</span>
            </div>
            
            {/* Email com ícone */}
            <div className="flex items-center gap-2">
              <Mail className="h-3 w-3" />
              <span>contato@apalocadora.com</span>
            </div>
            
            {/* Nome da empresa */}
            <div>
              <span>Apa Locadora Ltda</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}