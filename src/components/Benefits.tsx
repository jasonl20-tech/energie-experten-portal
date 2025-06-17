
import { Shield, TrendingUp, Clock, Users, Award, Zap } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "Bis zu 40% Kosteneinsparung",
      description: "Durchschnittliche Ersparnis unserer Kunden durch optimierte Stromverträge und Tarifwechsel.",
      stat: "40%",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Shield,
      title: "100% Kostenfrei",
      description: "Unsere Beratung ist vollständig kostenlos. Sie zahlen nur, wenn Sie sparen.",
      stat: "0€",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: Clock,
      title: "Schnelle Umsetzung",
      description: "Durchschnittlich 48 Stunden von der Analyse bis zur Vertragsoptimierung.",
      stat: "48h",
      color: "from-purple-500 to-violet-600"
    },
    {
      icon: Users,
      title: "5.000+ zufriedene Kunden",
      description: "Über 5.000 Unternehmen vertrauen bereits auf unsere Expertise.",
      stat: "5000+",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Award,
      title: "15+ Jahre Erfahrung",
      description: "Langjährige Expertise im Energiesektor und tiefes Marktverständnis.",
      stat: "15+",
      color: "from-teal-500 to-cyan-600"
    },
    {
      icon: Zap,
      title: "Garantierte Ergebnisse",
      description: "Wir garantieren messbare Einsparungen oder Sie zahlen nichts.",
      stat: "100%",
      color: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Warum <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">FIRMENSTROM</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Über 5.000 Unternehmen vertrauen bereits auf unsere Expertise. Entdecken Sie die Vorteile einer Zusammenarbeit mit FIRMENSTROM.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div key={index} className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className={`text-3xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>
                    {benefit.stat}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-card-foreground mb-4">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Bereit für Ihre kostenlose Energieberatung?</h3>
            <p className="text-blue-100 mb-6">
              Kontaktieren Sie uns noch heute und erfahren Sie, wie viel Ihr Unternehmen sparen kann.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Jetzt Beratung anfordern
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
