
import { Euro, Zap, Users, Leaf } from 'lucide-react';

const Benefits = () => {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Warum <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">StromProfi?</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full">
                  <Euro className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximale Kosteneinsparung</h3>
                  <p className="text-gray-600">Unsere Experten finden die günstigsten Stromtarife und verhandeln bessere Konditionen für Ihr Unternehmen.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Zap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Herstellerunabhängig</h3>
                  <p className="text-gray-600">Wir arbeiten mit allen seriösen Energieanbietern zusammen und empfehlen nur die besten Tarife.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Persönliche Betreuung</h3>
                  <p className="text-gray-600">Ihr fester Ansprechpartner begleitet Sie von der Beratung bis zur erfolgreichen Umsetzung.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-teal-100 p-3 rounded-full">
                  <Leaf className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Nachhaltige Lösungen</h3>
                  <p className="text-gray-600">Auf Wunsch vermitteln wir auch grüne Stromtarife für eine umweltfreundliche Energieversorgung.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Durchschnittliche Einsparungen</h3>
              <p className="text-gray-600">Basierend auf 5.000+ erfolgreich optimierten Verträgen</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-900">Kleine Unternehmen (bis 50 MWh)</span>
                <span className="text-2xl font-bold text-green-600">25%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-900">Mittlere Unternehmen (50-500 MWh)</span>
                <span className="text-2xl font-bold text-green-600">35%</span>
              </div>
              <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-sm">
                <span className="font-medium text-gray-900">Große Unternehmen (>500 MWh)</span>
                <span className="text-2xl font-bold text-green-600">45%</span>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg text-white text-center">
              <h4 className="text-xl font-bold mb-2">Kostenlose Erstberatung</h4>
              <p className="text-blue-100">Erfahren Sie in 15 Minuten, wie viel Sie sparen können</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
