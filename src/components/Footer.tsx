import { useTheme } from "@/components/ThemeProvider";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";

export function Footer() {
  const { theme } = useTheme();
  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  return (
    <footer className="bg-secondary py-6 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <img
            src={isDark ? logoWhite : logoBlack}
            alt="ApaRent - Locadora de Motos"
            className="h-8 w-auto"
          />

          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            @2025 - Desenvolvido com ❤ por Na Tora Agência Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
