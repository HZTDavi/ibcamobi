
import { Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const MinistriesSection = () => {
  const ministries = [
    {
      name: "PGM",
      description: "Pequenos Grupos Multiplicadores (igreja nas casas)"
    },
    {
      name: "PET",
      description: "Projeto de Estudo Teológico"
    },
    {
      name: "Desperta Déboras",
      description: "Projeto onde as mulheres da igreja estão em intercessão pelos seus filhos"
    },
    {
      name: "Adolescentes",
      description: "Ministério voltado para adolescentes"
    },
    {
      name: "Jovens",
      description: "Ministério voltado para jovens"
    },
    {
      name: "Embaixadores do Rei",
      description: "Ministério infantil para meninos"
    },
    {
      name: "Mensageiras do Rei",
      description: "Ministério infantil para meninas"
    },
  ];

  return (
    <section id="ministerios" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center mb-4">
            <Users className="h-6 sm:h-8 w-6 sm:w-8 text-church-secondary mr-2 sm:mr-3" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-church-primary">
              Ministérios
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-6 md:mb-8 px-4">
            Servindo a Deus e à comunidade através de diferentes áreas de atuação.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ministries.map((ministry, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-5 md:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-church-primary mb-2 md:mb-3">{ministry.name}</h3>
                <p className="text-sm sm:text-base">{ministry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;
