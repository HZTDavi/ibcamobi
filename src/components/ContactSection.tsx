
import { Mail, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "@/components/ui/sonner";

const ContactSection = () => {
  const [loading, setLoading] = useState(false);
  
  const form = useForm({
    defaultValues: {
      name: "",
      message: "",
    }
  });

  const onSubmit = (data: { name: string; message: string }) => {
    setLoading(true);
    
    // Format the WhatsApp message with line breaks
    const whatsappMessage = encodeURIComponent(
      `Pedido de oração de ${data.name}:\n\n${data.message}`
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
    <section id="contato" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Mail className="h-6 sm:h-8 w-6 sm:w-8 text-church-secondary mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-church-primary">
              Contato
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-6 md:mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-church-primary mb-4 md:mb-6">Envie-nos um pedido de oração</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Seu Nome</FormLabel>
                      <FormControl>
                        <Input placeholder="Digite seu nome" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pedido de Oração</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Digite seu pedido de oração" 
                          className="min-h-[120px]" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="bg-church-secondary hover:bg-church-accent text-white w-full"
                  disabled={loading}
                >
                  {loading ? "Enviando..." : "Enviar via WhatsApp"}
                </Button>
                
                <FormDescription className="text-center">
                  Seu pedido será enviado diretamente para o WhatsApp da igreja.
                </FormDescription>
              </form>
            </Form>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-church-primary mb-4 md:mb-6">Informações de Contato</h3>
            
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              <div className="flex items-center">
                <MessageSquare className="mr-2 sm:mr-3 h-5 w-5 flex-shrink-0 text-church-secondary" />
                <div>
                  <p className="font-medium text-sm sm:text-base">WhatsApp (Principal)</p>
                  <a href="https://wa.me/5555997046505" className="text-sm sm:text-base text-church-secondary hover:underline">
                    (55) 99704-6505
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <Mail className="mr-2 sm:mr-3 h-5 w-5 flex-shrink-0 text-church-secondary" />
                <div>
                  <p className="font-medium text-sm sm:text-base">Email</p>
                  <a href="mailto:ibcamobi@hotmail.com" className="text-sm sm:text-base text-church-secondary hover:underline break-all">
                    ibcamobi@hotmail.com
                  </a>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold text-church-primary mb-3 md:mb-4">Pastores</h3>
            
            <div className="space-y-3 md:space-y-4">
              <div>
                <p className="font-medium text-sm sm:text-base">Pr. Ailton Moraes</p>
                <a href="https://wa.me/5555991077937" className="text-sm sm:text-base text-church-secondary hover:underline">
                  WhatsApp: (55) 99107-7937
                </a>
              </div>
              
              <div>
                <p className="font-medium text-sm sm:text-base">Pr. Leandro Caberia</p>
                <a href="https://wa.me/5555981063417" className="text-sm sm:text-base text-church-secondary hover:underline">
                  WhatsApp: (55) 98106-3417
                </a>
              </div>
              
              <div>
                <p className="font-medium text-sm sm:text-base">Seminarista Felipe</p>
                <a href="https://wa.me/5555991824421" className="text-sm sm:text-base text-church-secondary hover:underline">
                  WhatsApp: (55) 99182-4421
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
