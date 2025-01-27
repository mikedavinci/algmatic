import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

interface RedirectIfAuthenticatedProps {
  children: React.ReactNode;
}

export function RedirectIfAuthenticated({ children }: RedirectIfAuthenticatedProps) {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      navigate('/dashboard');
    }
  }, [isLoaded, isSignedIn, navigate]);

  if (!isLoaded) {
    return <div>Loading...</div>; // Or your custom loading component
  }

  if (isSignedIn) {
    return null;
  }

  return <>{children}</>;
}
