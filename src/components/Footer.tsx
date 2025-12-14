import { Instagram, MessageCircle } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import logoBlack from "@/assets/logo-black.png";
import logoWhite from "@/assets/logo-white.png";

const socialLinks = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/5592999999999", label: "WhatsApp" },
];

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

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-xs">
            © {new Date().getFullYear()} ApaRent
          </p>
        </div>
      </div>
    </footer>
  );
}
