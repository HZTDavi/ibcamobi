
import { Card, CardContent } from "@/components/ui/card";

const ServiceTimes = () => {
  const services = [
    {
      name: "Culto de Celebração",
      day: "Domingo",
      time: "19:30",
      description: "Um momento de adoração e ensino da Palavra de Deus.",
    },
    {
      name: "Estudo Bíblico",
      day: "Quarta-feira",
      time: "20:00",
      description: "Aprofundamento no conhecimento das Escrituras.",
    },
    
  ];

  return (
    <section id="cultos" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
            Nossos Cultos
          </h2>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Venha nos visitar e participar de nossos encontros semanais.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-church-primary mb-2">
                  {service.name}
                </h3>
                <div className="flex items-center mb-4">
                  <span className="text-lg font-medium text-church-secondary">
                    {service.day} · {service.time}
                  </span>
                </div>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-church-primary mb-6">Localização</h3>
          <p className="text-lg mb-8">
            Rua Exemplo, 1234 - Bairro Camobi, Santa Maria - RS
          </p>
          <div className="rounded-lg overflow-hidden shadow-lg h-96 max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13815.336610370129!2d-53.83740174449166!3d-29.699982073451372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cf7bcc505a95%3A0x5c6eaad4f600b8d9!2sCamobi%2C%20Santa%20Maria%20-%20RS!5e0!3m2!1sen!2sbr!4v1715453980243!5m2!1sen!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Igreja Batista em Camobi Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceTimes;
