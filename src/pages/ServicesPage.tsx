
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calculator, FileSearch, TrendingUp, Shield, Clock, CheckCircle, Zap, BarChart3 } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: FileSearch,
      title: "Kostenlose Vertragsanalyse",
      description: "Umfassende Prüfung Ihres aktuellen Stromvertrags mit detaillierter Analyse aller Kosten und Konditionen.",
      features: ["Vollständige Vertragsprüfung", "Kostentransparenz", "Einsparpotential-Analyse"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Calculator,
      title: "Intelligenter Tarifvergleich",
      description: "Vergleich von über 2.000 Stromtarifen mit KI-gestützter Auswahl des optimalen Angebots.",
      features: ["2.000+ Tarife", "KI-Optimierung", "Branchen-spezifisch"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: TrendingUp,
      title: "Langfristige Energieberatung",
      description: "Strategische Beratung für nachhaltige Energieoptimierung und Kostenkontrolle.",
      features: ["Marktüberwachung", "Proaktive Optimierung", "Trend-Analyse"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Shield,
      title: "Rechtssichere Vertragsgestaltung",
      description: "Professionelle Vertragsgestaltung mit vollständiger rechtlicher Absicherung.",
      features: ["Juristische Prüfung", "Risikominimierung", "Compliance"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Zap,
      title: "Schnelle Umsetzung",
      description: "Express-Service für zeitkritische Projekte mit garantierten Bearbeitungszeiten.",
      features: ["48h Express-Service", "Prioritäts-Bearbeitung", "Sofort-Umsetzung"],
      color: "from-red-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Performance Monitoring",
      description: "Kontinuierliche Überwachung und Optimierung Ihrer Energiekosten mit detailliertem Reporting.",
      features: ["Real-time Monitoring", "Detaillierte Reports", "Trend-Analysen"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Unsere <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Leistungen</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive Energielösungen für Ihr Unternehmen - von der ersten Analyse bis zur langfristigen Optimierung.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-card-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
