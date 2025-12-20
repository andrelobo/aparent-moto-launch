import { useTheme } from "@/components/ThemeProvider";
import logoNatalina from "@/assets/logo_natalina.png";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <footer className="bg-secondary py-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <img
            src={logoNatalina}
            alt="ApaRent - Locadora de Motos"
            className="h-8 w-auto"
          />

          {/* Contact Information */}
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 text-muted-foreground text-xs text-center md:text-right">
            <span>92 98116-0563 / 99159-4210</span>
            <span>contato@apalocadora.com</span>
            <span>Apa Locadora Ltda</span>
          </div>
        </div>
      </div>
    </footer>
  );
}