
import { Award, Users, TrendingUp, Shield } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "5.000+",
      label: "Zufriedene Kunden",
      description: "Unternehmen vertrauen auf unsere Expertise"
    },
    {
      icon: Award,
      number: "15 Jahre",
      label: "Markterfahrung",
      description: "Fundiertes Wissen im Energiesektor"
    },
    {
      icon: TrendingUp,
      number: "40%",
      label: "Durchschnittliche Einsparung",
      description: "Messbare Kostensenkung für unsere Kunden"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Transparenz",
      description: "Keine versteckten Kosten oder Gebühren"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ihr vertrauensvoller <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Partner</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Seit über 15 Jahren helfen wir Unternehmen dabei, ihre Energiekosten zu senken. 
            Als unabhängiger Energieberater finden wir die besten Stromtarife und begleiten Sie 
            bei der kompletten Vertragsoptimierung – kostenlos und unverbindlich.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="bg-gradient-to-r from-blue-100 to-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <IconComponent className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</h4>
                <p className="text-gray-600 text-sm">{stat.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Unser Versprechen an Sie</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>Kostenlose Beratung:</strong> Unsere Expertenberatung ist für Sie völlig kostenfrei</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>Unabhängige Beratung:</strong> Wir arbeiten herstellerunabhängig und empfehlen nur die besten Tarife</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>Persönliche Betreuung:</strong> Ein fester Ansprechpartner für alle Ihre Fragen</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  </div>
                  <p className="text-gray-700"><strong>Langfristige Partnerschaft:</strong> Kontinuierliche Überwachung und Optimierung Ihrer Verträge</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-600 to-green-600 p-8 rounded-xl text-white">
              <h4 className="text-2xl font-bold mb-4">Zertifizierte Qualität</h4>
              <p className="mb-6 text-blue-100">
                Wir sind zertifizierter Energieberater und Mitglied im Bundesverband der Energie- und Wasserwirtschaft (BDEW).
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">TÜV-zertifizierte Beratung</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">BDEW-Mitgliedschaft</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Shield className="h-5 w-5 text-blue-200" />
                  <span className="text-blue-100">ISO 9001 Qualitätsmanagement</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
