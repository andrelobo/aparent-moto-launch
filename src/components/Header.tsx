import { useState } from "react";
import { Menu, X, MessageCircle, Instagram } from "lucide-react"; // Removed Moon, Sun, added Instagram
import { Button } from "@/components/ui/button";
// Removed import { useTheme } from "@/components/ThemeProvider";
import logoNatalina from "@/assets/logo_natalina.png";

const navItems = [
  { label: "Aplicativo", href: "#" },
  { label: "Empresa", href: "#" },
  { label: "Aventureiro", href: "#" },
];

export function Header() {
  // Removed const { theme, setTheme } = useTheme();
  // Removed const isDark = theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  // Removed const toggleTheme = () => { setTheme(isDark ? "light" : "dark"); };

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
        <div className="flex items-center justify-between h-12 md:h-14">
          {/* Logo */}
          <a href="#inicio" className="flex-shrink-0">
            <img
              src={logoNatalina} // Always use white logo for dark theme
              alt="ApaRent - Locadora de Motos"
              className="h-10 md:h-12 w-auto"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="flex items-center gap-2 md:gap-8">
            {navItems.map((item) => (
              <button
                key={item.label} // Changed key to item.label as href is now always "#"
                onClick={() => scrollToSection(item.href)}
                className="text-[8px] md:text-base font-medium text-black dark:text-white hover:opacity-80 transition-opacity"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a
              href="https://wa.me/5592999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            </a>
            <a
              href="https://instagram.com/aparent.rent"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-6 w-6 sm:h-8 sm:w-8 rounded-full"
              style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}
            >
              <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
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
