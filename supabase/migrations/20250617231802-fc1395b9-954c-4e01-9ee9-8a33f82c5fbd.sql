
-- Erstelle Benutzerprofile Tabelle
CREATE TABLE public.profiles (
  id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  PRIMARY KEY (id)
);

-- Erstelle Enum für Benutzerrollen
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Erstelle Benutzerrollen Tabelle
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- Erstelle bearbeitbare Inhalte Tabelle
CREATE TABLE public.site_content (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  section TEXT NOT NULL,
  key TEXT NOT NULL,
  value TEXT NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_by UUID REFERENCES auth.users(id),
  UNIQUE (section, key)
);

-- Aktiviere Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_content ENABLE ROW LEVEL SECURITY;

-- Erstelle Funktion zur Rollenprüfung
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies für profiles
CREATE POLICY "Users can view their own profile" 
  ON public.profiles 
  FOR SELECT 
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" 
  ON public.profiles 
  FOR UPDATE 
  USING (auth.uid() = id);

-- RLS Policies für user_roles
CREATE POLICY "Admins can view all roles" 
  ON public.user_roles 
  FOR SELECT 
  USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can manage roles" 
  ON public.user_roles 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies für site_content
CREATE POLICY "Everyone can view site content" 
  ON public.site_content 
  FOR SELECT 
  TO authenticated, anon
  USING (true);

CREATE POLICY "Admins can manage site content" 
  ON public.site_content 
  FOR ALL 
  USING (public.has_role(auth.uid(), 'admin'));

-- Erstelle Trigger für automatische Profilerstellung
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = ''
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (
    new.id, 
    new.email, 
    COALESCE(new.raw_user_meta_data ->> 'full_name', new.email)
  );
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE PROCEDURE public.handle_new_user();

-- Füge Standard-Inhalte ein
INSERT INTO public.site_content (section, key, value) VALUES
('hero', 'title', 'Bis zu 40% Stromkosten sparen'),
('hero', 'subtitle', 'Professionelle Energieberatung für Unternehmen. Wir finden günstigere Stromverträge und optimieren Ihre Energiekosten – komplett kostenlos und unverbindlich.'),
('hero', 'cta_primary', 'Kostenlose Beratung starten'),
('hero', 'cta_secondary', 'Mehr erfahren'),
('stats', 'savings', '40%'),
('stats', 'customers', '5.000+'),
('stats', 'experience', '15 Jahre');
