
import { Book } from "lucide-react";
import { Button } from "@/components/ui/button";

const CoursesSection = () => {
  return (
    <section id="cursos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Book className="h-8 w-8 text-church-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary">
              Cursos do PET
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <p className="text-lg mb-8 text-center">
            Vários cursos são oferecidos pela igreja através do Projeto de Estudo Teológico (PET). 
            Entre em contato conosco para saber mais sobre os cursos disponíveis e os horários.
          </p>
          
          <div className="flex justify-center">
            <Button 
              className="bg-church-secondary hover:bg-church-accent text-white px-8 py-3 rounded-md text-lg"
              asChild
            >
              <a href="https://wa.me/5555997046505" target="_blank" rel="noopener noreferrer">
                Entre em Contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
