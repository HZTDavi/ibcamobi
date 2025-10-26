
import { Card, CardContent } from "@/components/ui/card";
import { Book, Calendar, Church, Globe, Users } from "lucide-react";

const AboutSection = () => {
  const beliefs = [
    {
      icon: <Book className="h-8 w-8 text-church-secondary" />,
      text: "A Bíblia é a única regra de fé e prática.",
    },
    {
      icon: <Church className="h-8 w-8 text-church-secondary" />,
      text: "O Senhor Jesus como nosso único e suficiente salvador.",
    },
    {
      icon: <Users className="h-8 w-8 text-church-secondary" />,
      text: "A ação do Espírito Santo nos dias de hoje.",
    },
    {
      icon: <Globe className="h-8 w-8 text-church-secondary" />,
      text: "Os dons espirituais para nos capacitar a exercer nossos vários ministérios.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-church-secondary" />,
      text: "A Trindade: Deus pai e Deus filho e Deus Espírito Santo.",
    },
  ];

  return (
    <section id="quem-somos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
            Quem Somos
          </h2>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Uma igreja Focada em Jesus buscando viver de forma prática tudo aquilo que o Senhor Jesus 
            nos ensina na Sua palavra.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Primeira linha - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {beliefs.slice(0, 3).map((belief, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{belief.icon}</div>
                  <p className="text-lg">{belief.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Segunda linha - 2 cards centralizados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {beliefs.slice(3, 5).map((belief, index) => (
              <Card key={index + 3} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4">{belief.icon}</div>
                  <p className="text-lg">{belief.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
