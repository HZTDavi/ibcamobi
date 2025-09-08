
import { CalendarPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

const EventsSection = () => {
  const events = [
    {
      title: "Retiro de Jovens",
      description: "Um tempo especial de comunhão e crescimento espiritual para nossa juventude",
      message: "Olá, gostaria de informações sobre o Retiro de Jovens"
    },
    {
      title: "Conexão",
      description: "Evento de integração e relacionamento para toda a igreja",
      message: "Olá, gostaria de informações sobre o evento Conexão"
    },
    {
      title: "Retiro Restaurar",
      description: "Momento de restauração espiritual e renovação",
      message: "Olá, gostaria de informações sobre o Retiro Restaurar"
    }
  ];

  const handleWhatsAppRedirect = (message: string) => {
    const whatsappUrl = `https://wa.me/5555997046505?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para WhatsApp...");
  };

  return (
    <section id="eventos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <CalendarPlus className="h-8 w-8 text-church-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary">
              Eventos
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Confira os próximos eventos da igreja e entre em contato para mais informações
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {events.map((event, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-church-primary mb-3">{event.title}</h3>
                <p className="text-gray-600 mb-6">{event.description}</p>
                <Button 
                  className="bg-church-secondary hover:bg-church-accent text-white mt-auto"
                  onClick={() => handleWhatsAppRedirect(event.message)}
                >
                  Mais Informações
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
