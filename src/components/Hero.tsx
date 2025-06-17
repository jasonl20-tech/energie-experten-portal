
import { TrendingDown, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight">
            Bis zu <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">40% Stromkosten</span> sparen
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            Professionelle Energieberatung für Unternehmen. Wir finden günstigere Stromverträge und optimieren Ihre Energiekosten – komplett kostenlos und unverbindlich.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-none font-bold text-lg px-8 py-4"
            >
              <Link to="/contact">
                Kostenlose Beratung starten
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-foreground rounded-none font-bold text-lg px-8 py-4 hover:bg-foreground hover:text-background"
            >
              <Link to="/about">Mehr erfahren</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border-2 border-border p-6 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">Bis zu 40%</h3>
              <p className="text-muted-foreground">Kosteneinsparung bei Stromverträgen</p>
            </div>
            
            <div className="bg-card border-2 border-border p-6 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">5.000+</h3>
              <p className="text-muted-foreground">Zufriedene Unternehmenskunden</p>
            </div>
            
            <div className="bg-card border-2 border-border p-6 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">15 Jahre</h3>
              <p className="text-muted-foreground">Erfahrung im Energiemarkt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
