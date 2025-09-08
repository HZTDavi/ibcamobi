
import { MessageSquare } from "lucide-react";
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
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const FeedbackSection = () => {
  const [loading, setLoading] = useState(false);
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      feedback: "",
    }
  });

  const onSubmit = (data: any) => {
    setLoading(true);
    
    // Format the WhatsApp message with line breaks
    const name = data.name ? `de ${data.name}` : "";
    const email = data.email ? `\nEmail para contato: ${data.email}` : "";
    
    const whatsappMessage = encodeURIComponent(
      `Feedback ${name}:${email}\n\n${data.feedback}`
    );
    
    const whatsappUrl = `https://wa.me/5555997046505?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Reset the form and show success message
    form.reset();
    setLoading(false);
    toast.success("Redirecionando para WhatsApp...");
  };

  return (
    <section id="feedback" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MessageSquare className="h-8 w-8 text-church-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary">
              Deixe sua Opinião
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Sua opinião é importante para nós! Compartilhe suas sugestões, elogios ou críticas.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome (opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="Digite seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email (opcional)</FormLabel>
                    <FormControl>
                      <Input 
                        type="email" 
                        placeholder="seu@email.com" 
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="feedback"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Sua Opinião</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Compartilhe suas sugestões, elogios ou críticas"
                        className="min-h-[150px]"
                        {...field} 
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-2 text-center">
                <Button 
                  type="submit"
                  className="bg-church-secondary hover:bg-church-accent text-white px-8 py-3 text-lg"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar Feedback"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
