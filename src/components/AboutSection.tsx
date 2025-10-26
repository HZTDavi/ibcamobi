
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  const beliefs = [
    {
      text: "A Bíblia é a única regra de fé e prática.",
    },
    {
      text: "O Senhor Jesus como nosso único e suficiente salvador.",
    },
    {
      text: "A ação do Espírito Santo nos dias de hoje.",
    },
    {
      text: "Os dons espirituais para nos capacitar a exercer nossos vários ministérios.",
    },
    {
      text: "A Trindade: Deus pai e Deus filho e Deus Espírito Santo.",
    },
  ];

  return (
    <section id="quem-somos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-church-primary mb-4 px-4">
            Quem Somos
          </h2>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-6 md:mb-8"></div>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            Uma igreja Focada em Jesus buscando viver de forma prática tudo aquilo que o Senhor Jesus 
            nos ensina na Sua palavra.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Primeira linha - 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            {beliefs.slice(0, 3).map((belief, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <p className="text-base md:text-lg">{belief.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Segunda linha - 2 cards centralizados */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
            {beliefs.slice(3, 5).map((belief, index) => (
              <Card key={index + 3} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <p className="text-base md:text-lg">{belief.text}</p>
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
