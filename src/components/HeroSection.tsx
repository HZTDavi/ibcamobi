import { Button } from "@/components/ui/button";
const HeroSection = () => {
  return <section id="inicio" className="hero-gradient min-h-[85vh] flex items-center justify-center">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-28 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="flex justify-center mb-6 md:mb-8">
            <img src="/lovable-uploads/1478a7c6-4024-448a-a9b6-77fb24a14385.png" alt="Igreja Batista em Camobi - Uma grande família" className="h-48 sm:h-56 md:h-64 w-auto" />
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 px-4">
            Uma comunidade focada em Jesus, vivendo de forma prática os ensinamentos do Senhor
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 px-4">
            <Button className="bg-church-primary hover:bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg" asChild>
              <a href="#cultos">Nossos Cultos</a>
            </Button>
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white/10 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md text-base sm:text-lg" asChild>
              <a href="#quem-somos">Conheça-nos</a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;