
import { Calculator, FileSearch, TrendingUp, Shield, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

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
    blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
    green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
    purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
    orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
    red: "bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400",
    teal: "bg-teal-100 dark:bg-teal-900 text-teal-600 dark:text-teal-400"
  };

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Unsere <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Leistungen</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Umfassende Energieberatung und -optimierung für Ihr Unternehmen. Von der Analyse bis zur Umsetzung – alles aus einer Hand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div key={index} className="bg-card border-2 border-border p-8 rounded-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-none flex items-center justify-center mb-6 ${colorMap[service.color]}`}>
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-black hover:bg-gray-800 text-white rounded-none font-bold text-lg px-8 py-4"
          >
            <Link to="/services">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
