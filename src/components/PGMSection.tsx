import { Grid3x3, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
const PGMSection = () => {
  const pgmLocations = [{
    name: "PGM PASTOR",
    address: "Rua Manoel Machado, número 60",
    cep: "97105-240",
    description: "Pequeno Grupo Multiplicador coordenado pelo Pastor"
  }, {
    name: "PGM TESTE 1",
    address: "Rua Congonhas, número 153",
    cep: "97105-050",
    description: "Grupo de estudo bíblico e comunhão"
  }, {
    name: "PGM TESTE 2",
    address: "Rua Franklin Bittencourt Filho, número 296",
    cep: "97105-150",
    description: "Encontro semanal para crescimento espiritual"
  }];
  const handleWhatsAppContact = (pgmName: string) => {
    const message = `Olá! Gostaria de saber mais informações sobre o ${pgmName}.`;
    const whatsappUrl = `https://wa.me/5555997046505?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
  return <section id="pgm" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Grid3x3 className="h-8 w-8 text-church-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary">
              PGMs
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Pequenos Grupos Multiplicadores - A igreja nas casas
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto py-[36px]">
          <p className="text-lg mb-8 text-center">
            Confira abaixo os locais onde temos PGMs em Santa Maria. 
            Encontre o grupo mais próximo de você e participe!
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {pgmLocations.map((pgm, index) => <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center text-church-primary">
                    <MapPin className="h-5 w-5 mr-2" />
                    {pgm.name}
                  </CardTitle>
                  
                </CardHeader>
                <CardContent className="flex flex-col h-full py-[5px] my-0">
                  <div className="space-y-2 mb-4 flex-grow">
                    <p className="text-sm font-medium">{pgm.address}</p>
                    <p className="text-sm text-gray-600">CEP: {pgm.cep}</p>
                  </div>
                  <Button onClick={() => handleWhatsAppContact(pgm.name)} className="w-full bg-green-600 hover:bg-green-700 text-white py-[10px] my-[73px]">
                    <Phone className="h-4 w-4 mr-2" />
                    Contatar via WhatsApp
                  </Button>
                </CardContent>
              </Card>)}
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg h-[500px] w-full">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55398.25131349711!2d-53.85256541431139!3d-29.703899332355443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cf7bcc505a95%3A0x5c6eaad4f600b8d9!2sCamobi%2C%20Santa%20Maria%20-%20RS!5e0!3m2!1sen!2sbr!4v1715486871971!5m2!1sen!2sbr" width="100%" height="100%" style={{
            border: 0
          }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Mapa de PGMs - Igreja Batista em Camobi"></iframe>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg">
              Para mais informações sobre os PGMs ou para saber como participar, 
              entre em contato conosco pelo WhatsApp: 
              <a href="https://wa.me/5555997046505" className="text-church-secondary ml-1 hover:underline">
                (55) 99704-6505
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>;
};
export default PGMSection;