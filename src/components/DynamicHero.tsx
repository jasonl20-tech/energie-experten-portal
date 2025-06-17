
import { useState, useEffect } from 'react';
import { TrendingDown, Users, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';

interface ContentItem {
  key: string;
  value: string;
}

const DynamicHero = () => {
  const [heroContent, setHeroContent] = useState<ContentItem[]>([]);
  const [statsContent, setStatsContent] = useState<ContentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadContent();
  }, []);

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('section, key, value');

      if (error) throw error;

      const hero = data?.filter(item => item.section === 'hero') || [];
      const stats = data?.filter(item => item.section === 'stats') || [];

      setHeroContent(hero);
      setStatsContent(stats);
    } catch (error) {
      console.error('Error loading content:', error);
      // Fallback zu Standard-Inhalten
      setHeroContent([
        { key: 'title', value: 'Bis zu 40% Stromkosten sparen' },
        { key: 'subtitle', value: 'Professionelle Energieberatung für Unternehmen. Wir finden günstigere Stromverträge und optimieren Ihre Energiekosten – komplett kostenlos und unverbindlich.' },
        { key: 'cta_primary', value: 'Kostenlose Beratung starten' },
        { key: 'cta_secondary', value: 'Mehr erfahren' }
      ]);
      setStatsContent([
        { key: 'savings', value: '40%' },
        { key: 'customers', value: '5.000+' },
        { key: 'experience', value: '15 Jahre' }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const getContent = (items: ContentItem[], key: string, fallback: string) => {
    return items.find(item => item.key === key)?.value || fallback;
  };

  if (loading) {
    return (
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-16 bg-muted rounded mb-6"></div>
              <div className="h-8 bg-muted rounded mb-8 max-w-4xl mx-auto"></div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <div className="h-12 bg-muted rounded w-64"></div>
                <div className="h-12 bg-muted rounded w-48"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-black text-foreground mb-6 leading-tight tracking-tight">
            {getContent(heroContent, 'title', 'Bis zu 40% Stromkosten sparen').split(' ').map((word, index, words) => {
              if (word.includes('%')) {
                return (
                  <span key={index} className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                    {word}{index < words.length - 1 ? ' ' : ''}
                  </span>
                );
              }
              return word + (index < words.length - 1 ? ' ' : '');
            })}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
            {getContent(heroContent, 'subtitle', 'Professionelle Energieberatung für Unternehmen. Wir finden günstigere Stromverträge und optimieren Ihre Energiekosten – komplett kostenlos und unverbindlich.')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white rounded-none font-bold text-lg px-8 py-4"
            >
              <Link to="/contact">
                {getContent(heroContent, 'cta_primary', 'Kostenlose Beratung starten')}
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-foreground text-foreground rounded-none font-bold text-lg px-8 py-4 hover:bg-foreground hover:text-background"
            >
              <Link to="/about">{getContent(heroContent, 'cta_secondary', 'Mehr erfahren')}</Link>
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-card border-2 border-border p-6 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 dark:bg-blue-900 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                Bis zu {getContent(statsContent, 'savings', '40%')}
              </h3>
              <p className="text-muted-foreground">Kosteneinsparung bei Stromverträgen</p>
            </div>
            
            <div className="bg-card border-2 border-border p-6 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 dark:bg-green-900 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                {getContent(statsContent, 'customers', '5.000+')}
              </h3>
              <p className="text-muted-foreground">Zufriedene Unternehmenskunden</p>
            </div>
            
            <div className="bg-card border-2 border-border p-6 rounded-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 dark:bg-purple-900 w-16 h-16 rounded-none flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-card-foreground mb-2">
                {getContent(statsContent, 'experience', '15 Jahre')}
              </h3>
              <p className="text-muted-foreground">Erfahrung im Energiemarkt</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DynamicHero;
