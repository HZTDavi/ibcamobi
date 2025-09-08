
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-church-primary shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <img 
                src="/lovable-uploads/1478a7c6-4024-448a-a9b6-77fb24a14385.png" 
                alt="Igreja Batista em Camobi - Uma grande família" 
                className="h-14 w-auto"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-white hover:text-church-accent"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-white hover:text-church-accent transition-colors">
              Início
            </a>
            <a href="#quem-somos" className="text-white hover:text-church-accent transition-colors">
              Quem Somos
            </a>
            <a href="#historia" className="text-white hover:text-church-accent transition-colors">
              História
            </a>
            <a href="#cultos" className="text-white hover:text-church-accent transition-colors">
              Cultos
            </a>
            <a href="#contato" className="text-white hover:text-church-accent transition-colors">
              Contato
            </a>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#inicio" className="text-white hover:text-church-accent transition-colors" onClick={toggleMenu}>
                Início
              </a>
              <a href="#quem-somos" className="text-white hover:text-church-accent transition-colors" onClick={toggleMenu}>
                Quem Somos
              </a>
              <a href="#historia" className="text-white hover:text-church-accent transition-colors" onClick={toggleMenu}>
                História
              </a>
              <a href="#cultos" className="text-white hover:text-church-accent transition-colors" onClick={toggleMenu}>
                Cultos
              </a>
              <a href="#contato" className="text-white hover:text-church-accent transition-colors" onClick={toggleMenu}>
                Contato
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
