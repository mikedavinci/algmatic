// src/pages/auth/sign-in.tsx
import { useState } from 'react';
import { useSignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signIn, isLoaded: clerkLoaded } = useSignIn();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clerkLoaded) {
      toast({
        title: 'Error',
        description: 'Authentication system is not ready. Please try again.',
        variant: 'destructive',
        duration: 3000,
      });
      return;
    }

    try {
      setIsLoading(true);

      const result = await signIn.create({
        identifier: email,
        password,
      });

      if (result.status === 'complete') {
        // Wait for the session to be created
        await new Promise(resolve => setTimeout(resolve, 500));
        
        toast({
          title: 'Success',
          description: 'Successfully signed in!',
          variant: 'default',
          duration: 3000,
        });
        
        // Force navigation to dashboard
        window.location.href = '/dashboard';
      } else {
        toast({
          title: 'Verification Required',
          description: 'Additional verification steps are needed.',
          variant: 'default',
          duration: 5000,
        });
      }
    } catch (err: any) {
      console.error('Sign in error:', err);
      const errorMessage = err.errors?.[0]?.message || 'Failed to sign in. Please try again.';
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your credentials to access your account
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password">Password</label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        <div className="text-center space-y-2">
          <Button variant="link" onClick={() => navigate('/sign-up')}>
            Don't have an account? Sign up
          </Button>

          <Button variant="link" onClick={() => navigate('/forgot-password')}>
            Forgot your password?
          </Button>
        </div>
      </div>
    </div>
  );
}
