
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Settings, Save, LogOut, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

interface SiteContent {
  section: string;
  key: string;
  value: string;
}

const AdminPage = () => {
  const { user, isAdmin, signOut } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [content, setContent] = useState<SiteContent[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user) {
      navigate('/auth');
      return;
    }
    
    if (!isAdmin) {
      navigate('/');
      return;
    }

    loadContent();
  }, [user, isAdmin, navigate]);

  const loadContent = async () => {
    try {
      const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .order('section', { ascending: true });

      if (error) throw error;
      setContent(data || []);
    } catch (error) {
      console.error('Error loading content:', error);
      toast({
        title: 'Fehler',
        description: 'Inhalte konnten nicht geladen werden.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContent = (section: string, key: string, value: string) => {
    setContent(prev => 
      prev.map(item => 
        item.section === section && item.key === key 
          ? { ...item, value }
          : item
      )
    );
  };

  const saveContent = async () => {
    setSaving(true);
    try {
      for (const item of content) {
        const { error } = await supabase
          .from('site_content')
          .upsert({
            section: item.section,
            key: item.key,
            value: item.value,
            updated_by: user?.id
          });

        if (error) throw error;
      }

      toast({
        title: 'Erfolgreich gespeichert',
        description: 'Alle Änderungen wurden erfolgreich gespeichert.',
      });
    } catch (error) {
      console.error('Error saving content:', error);
      toast({
        title: 'Fehler',
        description: 'Änderungen konnten nicht gespeichert werden.',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center py-20">
          <div>Laden...</div>
        </div>
        <Footer />
      </div>
    );
  }

  const heroContent = content.filter(item => item.section === 'hero');
  const statsContent = content.filter(item => item.section === 'stats');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-primary" />
              <div>
                <h1 className="text-3xl font-bold">Admin-Dashboard</h1>
                <p className="text-muted-foreground">Verwalten Sie die Inhalte Ihrer Website</p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <Button onClick={saveContent} disabled={saving}>
                <Save className="h-4 w-4 mr-2" />
                {saving ? 'Speichern...' : 'Änderungen speichern'}
              </Button>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Abmelden
              </Button>
            </div>
          </div>

          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="h-5 w-5" />
                  <span>Hero-Bereich</span>
                </CardTitle>
                <CardDescription>
                  Bearbeiten Sie die Hauptinhalte auf der Startseite
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {heroContent.map((item) => (
                  <div key={`${item.section}-${item.key}`} className="space-y-2">
                    <Label htmlFor={item.key}>
                      {item.key === 'title' && 'Haupttitel'}
                      {item.key === 'subtitle' && 'Untertitel'}
                      {item.key === 'cta_primary' && 'Primärer Button-Text'}
                      {item.key === 'cta_secondary' && 'Sekundärer Button-Text'}
                    </Label>
                    {item.key === 'subtitle' ? (
                      <Textarea
                        id={item.key}
                        value={item.value}
                        onChange={(e) => updateContent(item.section, item.key, e.target.value)}
                        rows={3}
                      />
                    ) : (
                      <Input
                        id={item.key}
                        value={item.value}
                        onChange={(e) => updateContent(item.section, item.key, e.target.value)}
                      />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Statistiken</CardTitle>
                <CardDescription>
                  Bearbeiten Sie die Statistiken im Hero-Bereich
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {statsContent.map((item) => (
                  <div key={`${item.section}-${item.key}`} className="space-y-2">
                    <Label htmlFor={item.key}>
                      {item.key === 'savings' && 'Kosteneinsparung'}
                      {item.key === 'customers' && 'Anzahl Kunden'}
                      {item.key === 'experience' && 'Jahre Erfahrung'}
                    </Label>
                    <Input
                      id={item.key}
                      value={item.value}
                      onChange={(e) => updateContent(item.section, item.key, e.target.value)}
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AdminPage;
