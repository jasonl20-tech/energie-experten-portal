
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-md mx-auto">
            <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
            <h2 className="text-2xl font-bold text-foreground mb-4">Seite nicht gefunden</h2>
            <p className="text-muted-foreground mb-8">
              Die angeforderte Seite existiert nicht oder wurde verschoben.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="default" size="lg">
                <Link to="/">
                  <Home className="h-4 w-4 mr-2" />
                  Zur Startseite
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg" onClick={() => window.history.back()}>
                <button>
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Zurück
                </button>
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;
