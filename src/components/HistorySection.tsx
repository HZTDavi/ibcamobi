const HistorySection = () => {
  return <section id="historia" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-church-primary mb-4">
              Nossa História
            </h2>
            <div className="h-1 w-24 bg-church-secondary mb-8"></div>
            <p className="text-lg mb-6">
              A Igreja Batista em Camobi iniciou sua jornada de fé em <strong>06 de setembro de 2003</strong>, quando um 
              grupo de fiéis comprometidos com a propagação da palavra de Deus se reuniu para estabelecer 
              uma comunidade cristã no bairro de Camobi.
            </p>
            <p className="text-lg mb-6">
              Desde então, nossa congregação tem crescido em número e em espírito, sempre mantendo o 
              compromisso de servir a Deus e à comunidade local através de adoração sincera, ensino bíblico 
              e serviço amoroso.
            </p>
            <p className="text-lg">
              Ao longo destes anos, temos experimentado as bênçãos de Deus em nossa trajetória, 
              expandindo nossos ministérios e impactando positivamente a vida das pessoas ao nosso redor.
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img alt="Igreja Batista em Camobi" className="w-full h-auto object-cover" src="/lovable-uploads/783a7d05-e565-4153-9e45-fae088b5271e.jpg" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HistorySection;