
import { Phone, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Leistungen', href: '/services' },
    { name: 'Über uns', href: '/about' },
    { name: 'Kontakt', href: '/contact' },
  ];

  const isActivePage = (href: string) => {
    if (href === '/' && location.pathname === '/') return true;
    if (href !== '/' && location.pathname.startsWith(href)) return true;
    return false;
  };

  return (
    <header className="bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <h1 className="text-2xl font-black text-black dark:text-white tracking-tight">
                FIRMENSTROM
              </h1>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 rounded-none text-sm font-medium transition-all duration-200 border-b-2 ${
                  isActivePage(item.href)
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted border-transparent hover:border-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>0800 123 4567</span>
            </div>
            <ThemeToggle />
            <Button 
              asChild
              className="bg-black hover:bg-gray-800 text-white rounded-none font-bold border-2 border-black hover:border-gray-800"
            >
              <Link to="/contact">Kostenlose Beratung</Link>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-none text-sm font-medium transition-all duration-200 border-l-4 ${
                    isActivePage(item.href)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted border-transparent hover:border-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                asChild
                className="bg-black hover:bg-gray-800 text-white rounded-none font-bold border-2 border-black hover:border-gray-800 mt-4"
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  Kostenlose Beratung
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
