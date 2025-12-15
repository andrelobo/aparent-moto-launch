import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-72 bg-background rounded-xl shadow-2xl border border-border overflow-hidden animate-slide-in">
          {/* Header */}
          <div className="bg-whatsapp p-4 text-primary-foreground">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold">ApaRent</p>
                <p className="text-xs opacity-90">Normalmente responde em minutos</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-background/20 rounded"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>
          
          {/* Body */}
          <div className="p-4 bg-secondary">
            <div className="bg-background p-3 rounded-lg shadow-sm">
              <p className="text-sm text-foreground">
                Olá! 👋 Como podemos ajudar você hoje? Clique no botão abaixo para 
                iniciar uma conversa.
              </p>
            </div>
          </div>
          
          {/* CTA */}
          <div className="p-4">
            <a
              href="https://wa.me/5592999999999?text=Olá! Vim pelo site e gostaria de mais informações."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-whatsapp hover:bg-whatsapp/90 text-primary-foreground py-3 rounded-lg font-medium transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Iniciar conversa
            </a>
          </div>
        </div>
      )}

      {/* Float Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-whatsapp hover:bg-whatsapp/90 rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-blink"
        aria-label="Abrir WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </div>
  );
}
