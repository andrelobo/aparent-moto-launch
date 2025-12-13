import { Instagram } from "lucide-react";

export function InstagramWidget() {
  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Float Button */}
      <a
        href="https://instagram.com/aparent"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse-soft"
        style={{
          background: "linear-gradient(45deg, hsl(25, 95%, 55%), hsl(330, 80%, 55%), hsl(280, 70%, 50%))",
        }}
        aria-label="Siga no Instagram"
      >
        <Instagram className="h-6 w-6" />
      </a>
    </div>
  );
}
