
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
              FIRMENSTROM
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Ihr unabhängiger Partner für Energieoptimierung. Seit über 15 Jahren helfen wir Unternehmen dabei, 
              ihre Stromkosten zu senken und nachhaltige Energielösungen zu finden.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-600" />
                <span className="text-muted-foreground">+49 30 123 456 789 (kostenfrei)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-600" />
                <span className="text-muted-foreground">beratung@firmenstrom.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-600" />
                <span className="text-muted-foreground">Energiestraße 123, 10115 Berlin</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Leistungen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Vertragsanalyse</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Tarifvergleich</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Energieberatung</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Vertragsoptimierung</Link></li>
              <li><Link to="/services" className="hover:text-blue-600 transition-colors">Grüne Energie</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Unternehmen</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">Über uns</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Kontakt</Link></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Zertifikate</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Partner</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 FIRMENSTROM GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors text-sm">Impressum</a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors text-sm">Datenschutz</a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors text-sm">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
