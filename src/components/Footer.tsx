
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
              StromProfi
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ihr unabhängiger Partner für Energieoptimierung. Seit über 15 Jahren helfen wir Unternehmen dabei, 
              ihre Stromkosten zu senken und nachhaltige Energielösungen zu finden.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-300">0800 123 4567 (kostenfrei)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-400" />
                <span className="text-gray-300">beratung@stromprofi.de</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-purple-400" />
                <span className="text-gray-300">Energiestraße 123, 12345 Berlin</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Leistungen</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Vertragsanalyse</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Tarifvergleich</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Energieberatung</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Vertragsoptimierung</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Grüne Energie</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Unternehmen</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Über uns</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Karriere</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Presse</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Zertifikate</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Partner</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 StromProfi GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Impressum</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Datenschutz</a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">AGB</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
