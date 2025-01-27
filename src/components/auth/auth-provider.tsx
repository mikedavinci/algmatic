import { useAuth, useUser } from '@clerk/clerk-react';
import { useEffect } from 'react';
import { useAuthStore } from '@/lib/stores/auth-store';

interface AuthProviderProps {
  children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser();
  const { setAuthenticated, setUser } = useAuthStore();

  useEffect(() => {
    if (isLoaded) {
      setAuthenticated(!!isSignedIn);
      if (isSignedIn && user) {
        setUser({
          id: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          imageUrl: user.imageUrl,
        });
      }
    }
  }, [isLoaded, isSignedIn, user, setAuthenticated, setUser]);

  return <>{children}</>;
}
