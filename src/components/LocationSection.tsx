
import { MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const LocationSection = () => {
  return (
    <section id="endereco" className="section-padding bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <MapPin className="h-8 w-8 text-church-secondary mr-3" />
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary">
              Endereço
            </h2>
          </div>
          <div className="h-1 w-24 bg-church-secondary mx-auto mb-8"></div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <p className="text-xl mb-2">Av. João Machado Soares, 1010</p>
              <p className="text-xl mb-2">Bairro Camobi</p>
              <p className="text-xl mb-6">Santa Maria - RS</p>
              
              <div className="rounded-lg overflow-hidden shadow-lg h-96 mx-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.6312491824224!2d-53.80319958457013!3d-29.703981582000982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9503cf7bcc505a95%3A0x5c6eaad4f600b8d9!2sAv.%20Jo%C3%A3o%20Machado%20Soares%2C%201010%20-%20Camobi%2C%20Santa%20Maria%20-%20RS%2C%2097105-910!5e0!3m2!1sen!2sbr!4v1715486976633!5m2!1sen!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Igreja Batista em Camobi - Endereço"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
