
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { Settings, LogIn } from 'lucide-react';

const AdminButton = () => {
  const { user, isAdmin } = useAuth();

  if (!user) {
    return (
      <Button asChild variant="outline" size="sm">
        <Link to="/auth">
          <LogIn className="h-4 w-4 mr-2" />
          Admin Login
        </Link>
      </Button>
    );
  }

  if (isAdmin) {
    return (
      <Button asChild variant="outline" size="sm">
        <Link to="/admin">
          <Settings className="h-4 w-4 mr-2" />
          Admin-Panel
        </Link>
      </Button>
    );
  }

  return null;
};

export default AdminButton;
