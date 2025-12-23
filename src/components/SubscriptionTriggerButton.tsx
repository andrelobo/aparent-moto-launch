import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SubscriptionForm } from "./SubscriptionForm";
import { useState } from "react";

interface SubscriptionTriggerButtonProps {
  plan: string;
}

export function SubscriptionTriggerButton({ plan }: SubscriptionTriggerButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex justify-center items-center h-full"> {/* Added wrapper div */}
          <Button className="bg-whatsapp text-whatsapp-foreground transform scale-75">Quero Saber Mais</Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-yellow-400">Formulário de Contato</DialogTitle>
          <DialogDescription className="text-yellow-400">
            </DialogDescription>
        </DialogHeader>
        <SubscriptionForm onClose={() => setOpen(false)} plan={plan} />
      </DialogContent>
    </Dialog>
  );
}
