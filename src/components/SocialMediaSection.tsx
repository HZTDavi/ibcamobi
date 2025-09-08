
import { Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialMediaSection = () => {
  const socialLinks = [
    {
      name: "Youtube",
      url: "https://www.youtube.com/@IBCamobi",
      icon: Youtube,
      description: "Os cultos gravados ficam salvos no Youtube"
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/share/148xmt3GWd/",
      icon: Facebook,
      description: "Siga nossa página no Facebook"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/ibc_sm?igsh=dTQwbmR4aTl5YnFy",
      icon: Instagram,
      description: "Acompanhe as novidades no Instagram"
    }
  ];

  return (
    <section id="redes-sociais" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
            Redes Sociais
          </h2>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Conecte-se conosco através das nossas redes sociais
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-4xl mx-auto">
          {socialLinks.map((social, index) => (
            <div key={index} className="text-center">
              <a 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex flex-col items-center group"
              >
                <div className="p-6 bg-church-primary rounded-full text-white mb-4 group-hover:bg-church-secondary transition-colors">
                  <social.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-church-primary mb-2">{social.name}</h3>
                <p className="text-gray-600 mb-4">{social.description}</p>
                <Button className="bg-church-secondary hover:bg-church-accent text-white">
                  Visitar
                </Button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;
