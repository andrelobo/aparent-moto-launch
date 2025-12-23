"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  whatsapp: z.string().min(10, {
    message: "O WhatsApp deve ter pelo menos 10 dígitos.",
  }),
});

const SELLER_WHATSAPP_NUMBER = "5511999999999"; // Substitua pelo número do vendedor

interface SubscriptionFormProps {
  onClose: () => void;
  plan: string;
}

export function SubscriptionForm({ onClose, plan }: SubscriptionFormProps) {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      whatsapp: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    const message = `Olá! Me chamo ${data.name}, meu zap é ${data.whatsapp}, e o plano que quero saber mais é o ${plan}, ok?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${SELLER_WHATSAPP_NUMBER}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
    onClose(); // Fecha o diálogo após o envio
    form.reset(); // Limpa o formulário
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-yellow-400">Nome / Sobrenome</FormLabel>
              <FormControl>
                <Input placeholder="Seu nome completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="whatsapp"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-yellow-400">WhatsApp do Cliente</FormLabel>
              <FormControl>
                <Input placeholder="(99) 99999-9999" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-whatsapp text-whatsapp-foreground">Enviar para WhatsApp</Button>
      </form>
    </Form>
  );
}