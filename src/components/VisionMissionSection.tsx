
import { Eye, Target } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const VisionMissionSection = () => {
  return (
    <section id="visao-missao" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-church-secondary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-church-primary">
                  Visão da Igreja
                </h2>
              </div>
              <div className="h-1 w-24 bg-church-secondary mb-6"></div>
              <p className="text-lg">
                Uma igreja Focada em Jesus
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-church-secondary mr-3" />
                <h2 className="text-2xl md:text-3xl font-bold text-church-primary">
                  Missão
                </h2>
              </div>
              <div className="h-1 w-24 bg-church-secondary mb-6"></div>
              <p className="text-lg">
                Uma igreja que vive Jesus, aplicando os Seus ensinamentos e vivendo o projeto de Deus para ela.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
