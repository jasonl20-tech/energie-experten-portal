
import { Calculator, FileSearch, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Kostenlose Vertragsanalyse",
      description: "Wir prüfen Ihren aktuellen Stromvertrag und identifizieren Einsparpotentiale – ohne Kosten für Sie.",
      color: "blue"
    },
    {
      icon: Calculator,
      title: "Tarifvergleich & Optimierung",
      description: "Vergleich von über 1.000 Stromtarifen und Auswahl des besten Angebots für Ihr Unternehmen.",
      color: "green"
    },
    {
      icon: TrendingUp,
      title: "Langfristige Betreuung",
      description: "Kontinuierliche Überwachung des Energiemarkts und proaktive Optimierung Ihrer Verträge.",
      color: "purple"
    },
    {
      icon: Shield,
      title: "Rechtssichere Abwicklung",
      description: "Professionelle Vertragsgestaltung und rechtssichere Abwicklung aller Formalitäten.",
      color: "orange"
    },
    {
      icon: Clock,
      title: "Schnelle Umsetzung",
      description: "Zügige Bearbeitung Ihrer Anfrage und zeitnahe Umsetzung der Energieoptimierung.",
      color: "red"
    },
    {
      icon: CheckCircle,
      title: "Garantierte Einsparungen",
      description: "Wir garantieren messbare Kosteneinsparungen oder Sie zahlen nichts für unsere Beratung.",
      color: "teal"
    }
  ];

  const colorMap = {
    blue: "bg-blue-100 text-blue-600",
    green: "bg-green-100 text-green-600",
    purple: "bg-purple-100 text-purple-600",
    orange: "bg-orange-100 text-orange-600",
    red: "bg-red-100 text-red-600",
    teal: "bg-teal-100 text-teal-600"
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Unsere <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Leistungen</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Umfassende Energieberatung und -optimierung für Ihr Unternehmen. Von der Analyse bis zur Umsetzung – alles aus einer Hand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 ${colorMap[service.color]}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
