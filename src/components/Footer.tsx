
import { Mail, MessageSquare } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-church-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <img 
              src="/lovable-uploads/1478a7c6-4024-448a-a9b6-77fb24a14385.png" 
              alt="Igreja Batista em Camobi - Uma grande família" 
              className="h-16 w-auto mb-4"
            />
            <p className="mb-4">
              Uma comunidade focada em Jesus, vivendo de forma prática os ensinamentos do Senhor.
            </p>
          </div>
          
          <div className="mb-8 md:mb-0">
            <h4 className="text-xl font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#inicio" className="hover:text-church-accent transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#quem-somos" className="hover:text-church-accent transition-colors">
                  Quem Somos
                </a>
              </li>
              <li>
                <a href="#historia" className="hover:text-church-accent transition-colors">
                  História
                </a>
              </li>
              <li>
                <a href="#cultos" className="hover:text-church-accent transition-colors">
                  Cultos
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xl font-bold mb-4">Contato</h4>
            <address className="not-italic">
              <p className="mb-2">Av. João Machado Soares, 1010</p>
              <p className="mb-2">Bairro Camobi</p>
              <p className="mb-2">Santa Maria - RS</p>
              <p className="mb-4">CEP: 97110-000</p>
              
              <div className="flex items-center mb-2">
                <Mail className="mr-2 h-5 w-5" />
                <a href="mailto:contato@ibcamobi.com.br" className="hover:text-church-accent transition-colors">
                  contato@ibcamobi.com.br
                </a>
              </div>
              
              <div className="flex items-center">
                <MessageSquare className="mr-2 h-5 w-5" />
                <a href="tel:+5555123456789" className="hover:text-church-accent transition-colors">
                  (55) 12345-6789
                </a>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {currentYear} Igreja Batista em Camobi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
