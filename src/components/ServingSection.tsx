
import { List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

const ServingSection = () => {
  const handleWhatsAppRedirect = () => {
    const message = "Olá, gostaria de informações sobre como servir na igreja em um dos ministérios";
    const whatsappUrl = `https://wa.me/5555997046505?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Redirecionando para WhatsApp...");
  };

  return (
    <section id="servir" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <List className="h-8 w-8 text-church-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary">
              Sirva Conosco
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Descubra como você pode servir e fazer parte ativa do corpo de Cristo em nossa igreja
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-church-primary mb-6 text-center">
            Áreas para Servir
          </h3>
          
          <ul className="mb-8 space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-church-secondary rounded-full mt-2 mr-3"></span>
              <span>Ministério de Louvor (músicos, cantores, técnicos de som)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-church-secondary rounded-full mt-2 mr-3"></span>
              <span>Ministério Infantil (professores, auxiliares)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-church-secondary rounded-full mt-2 mr-3"></span>
              <span>Recepção e Acolhimento</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-church-secondary rounded-full mt-2 mr-3"></span>
              <span>Mídia e Comunicação</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-church-secondary rounded-full mt-2 mr-3"></span>
              <span>Intercessão e Aconselhamento</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-2 h-2 bg-church-secondary rounded-full mt-2 mr-3"></span>
              <span>Projetos Sociais</span>
            </li>
          </ul>
          
          <div className="text-center">
            <Button 
              className="bg-church-secondary hover:bg-church-accent text-white px-6 py-3 text-lg"
              onClick={handleWhatsAppRedirect}
            >
              Entre em Contato para Servir
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServingSection;
