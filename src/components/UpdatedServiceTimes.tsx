import { Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
const UpdatedServiceTimes = () => {
  const services = [{
    name: "Culto da Família",
    day: "Domingo",
    times: ["9:00", "19:30"],
    description: "Culto de celebração para toda a família (o culto das 19:30 tem transmissão ao vivo pelo YouTube)"
  }, {
    name: "Culto de Estudo da Palavra",
    day: "Quarta-feira",
    times: ["20:00"],
    description: "Aprofundamento no conhecimento das Escrituras"
  }, {
    name: "Adolescentes",
    day: "Sexta-feira",
    times: ["19:00"],
    description: "Encontro especial para adolescentes"
  }, {
    name: "Jovens",
    day: "Sábado",
    times: ["20:00"],
    description: "Encontro da juventude"
  }];
  return <section id="cultos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Calendar className="h-8 w-8 text-church-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary">
              Cultos e Horários
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Venha nos visitar e participar de nossos encontros semanais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-church-primary mb-2">
                  {service.name}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-lg font-medium text-church-secondary">
                    {service.day} · {service.times.join(" e ")}
                  </span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>)}
        </div>

        
      </div>
    </section>;
};
export default UpdatedServiceTimes;