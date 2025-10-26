
import { HandHeart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useState, useEffect } from "react";

const SocialProjectsSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const projects = [{
    title: "Alimentoria",
    description: "Alimentos e mentoria espiritual aos sem tetos da nossa cidade",
    image: "/lovable-uploads/alimentoria.jpg"
  }, {
    title: "Jiu Jitsu",
    description: "Projeto gratuito com as crianças da igreja e da comunidade",
    images: ["/lovable-uploads/jiu-1.jpg", "/lovable-uploads/jiu-2.jpg", "/lovable-uploads/jiu-3.jpg"],
    details: "Treino Jiu-jitsu IBC\nTodas as Sextas-feiras, nos seguintes horários:\n\n- kids 1- 04 a 09 anos- das 18 as 18:50h\n- kids 2 -9,5 a 14 anos - das 19 as 20h\n- Infantojuvenil -14,5 a 17 anos (em diante) - das 20h as 21h"
  }];

  const jiuJitsuProject = projects.find(p => p.title === "Jiu Jitsu");
  
  useEffect(() => {
    if (jiuJitsuProject?.images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          (prevIndex + 1) % jiuJitsuProject.images!.length
        );
      }, 3000);

      return () => clearInterval(interval);
    }
  }, [jiuJitsuProject]);

  return <section id="projetos-sociais" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <HandHeart className="h-6 sm:h-8 w-6 sm:w-8 text-church-secondary mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-church-primary">
              Projetos Sociais
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Servindo à comunidade com amor e dedicação, levando esperança e transformação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow overflow-hidden">
              {project.title === "Jiu Jitsu" ? (
                <div className="h-64 relative overflow-hidden">
                  {project.images?.map((image, imageIndex) => (
                    <img 
                      key={imageIndex}
                      src={image} 
                      alt={`${project.title} - Imagem ${imageIndex + 1}`} 
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
                        imageIndex === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.images?.map((_, dotIndex) => (
                      <div 
                        key={dotIndex}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          dotIndex === currentImageIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <div className="h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                </div>
              )}
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-church-primary mb-3">{project.title}</h3>
                <p className="text-lg mb-2">{project.description}</p>
                {project.details && (
                  <div className="mt-4 text-md text-gray-700 whitespace-pre-line">
                    {project.details}
                  </div>
                )}
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};

export default SocialProjectsSection;
