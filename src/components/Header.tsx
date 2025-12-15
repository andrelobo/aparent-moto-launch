import { useState } from "react";
import { Menu, X, Moon, Sun, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";

const navItems = [
  { label: "Aplicativo", href: "#" },
  { label: "Empresa", href: "#" },
  { label: "Aventureiro", href: "#" },
];

export function Header() {
  const { theme, setTheme } = useTheme();

  const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  const scrollToSection = (href: string) => {
    // For links with href="#", prevent default scroll behavior
    if (href === "#") {
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0">
            <img
              src={isDark ? logoWhite : logoBlack}
              alt="ApaRent - Locadora de Motos"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-4 ml-auto">
            {navItems.map((item) => (
              <button
                key={item.label} // Changed key to item.label as href is now always "#"
                onClick={() => scrollToSection(item.href)}
                className="text-[8px] font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>

            <a
              href="https://wa.me/5592999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex"
            >
              <Button className="bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground gap-2">
                <MessageCircle className="h-4 w-4" />
                <span className="hidden lg:inline">Alugue Agora</span>
                <span className="lg:hidden">WhatsApp</span>
              </Button>
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
