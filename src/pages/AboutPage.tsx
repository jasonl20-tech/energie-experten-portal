
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Users, Award, Target, Lightbulb } from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { label: "Zufriedene Kunden", value: "5.000+", icon: Users },
    { label: "Jahre Erfahrung", value: "15+", icon: Award },
    { label: "Durchschnittliche Ersparnis", value: "40%", icon: Target },
    { label: "Beratungsprojekte", value: "12.000+", icon: Lightbulb }
  ];

  const team = [
    {
      name: "Dr. Michael Weber",
      role: "Geschäftsführer & Energieexperte",
      description: "15+ Jahre Erfahrung im Energiesektor, promovierter Wirtschaftsingenieur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Klein",
      role: "Leiterin Kundenberatung",
      description: "Spezialistin für B2B-Energielösungen mit über 10 Jahren Branchenerfahrung",
      image: "https://images.unsplash.com/photo-1494790108755-2616b7e4a2c4?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Thomas Müller",
      role: "Senior Energieberater",
      description: "Experte für Vertragsoptimierung und nachhaltige Energielösungen",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Über <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">FIRMENSTROM</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Seit über 15 Jahren der vertrauensvolle Partner für Energieoptimierung und nachhaltige Kosteneinsparungen.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-2xl flex items-center justify-center">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-foreground mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Unsere Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Wir revolutionieren die Art, wie Unternehmen ihre Energiekosten verwalten. Durch innovative 
                Technologien und jahrelange Expertise helfen wir Firmen dabei, nicht nur Kosten zu senken, 
                sondern auch nachhaltige Energielösungen zu implementieren.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Unser Ziel ist es, jedem Unternehmen den Zugang zu optimalen Energietarifen zu ermöglichen 
                und dabei transparente, ehrliche Beratung zu bieten.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop" 
                alt="Moderne Bürogebäude" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">Unser Expertenteam</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Lernen Sie die Experten kennen, die hinter FIRMENSTROM stehen
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-card rounded-2xl p-8 text-center border border-border hover:shadow-xl transition-all duration-300">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-card-foreground mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
