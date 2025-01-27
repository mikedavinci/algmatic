// src/pages/auth/sign-up.tsx
import { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const { signUp, isLoaded: clerkLoaded } = useSignUp();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clerkLoaded) {
      toast({
        title: 'Error',
        description: 'Authentication system is not ready. Please try again.',
        variant: 'destructive',
      });
      return;
    }

    try {
      setIsLoading(true);

      await signUp.create({
        emailAddress: email,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' });

      setPendingVerification(true);
      toast({
        title: 'Verification email sent',
        description: 'Please check your email for the verification code.',
      });
    } catch (err: any) {
      console.error('Sign up error:', err);
      toast({
        title: 'Error',
        description: err.errors?.[0]?.message || 'Failed to sign up',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!clerkLoaded) return;

    try {
      setIsLoading(true);
      const result = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (result.status === 'complete') {
        // After verification is complete
        await result.createdSessionId;

        toast({
          title: 'Email verified!',
          description: 'Your account has been created successfully.',
        });

        navigate('/sign-in');
      } else {
        toast({
          title: 'Verification incomplete',
          description: 'Please complete all required steps',
          variant: 'destructive',
        });
      }
    } catch (err: any) {
      console.error('Verification error:', err);
      toast({
        title: 'Verification failed',
        description: err.errors?.[0]?.message || 'Failed to verify email',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-md p-6">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Create an Account</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Enter your information to get started
          </p>
        </div>

        {!pendingVerification ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">Email</label>
              <Input
                id="email"
                type="email"
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
              {isLoading ? 'Creating account...' : 'Sign Up'}
            </Button>
          </form>
        ) : (
          <form onSubmit={verifyEmail} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="code">Verification Code</label>
              <Input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter verification code"
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? 'Verifying...' : 'Verify Email'}
            </Button>
          </form>
        )}

        <div className="text-center">
          <Button variant="link" onClick={() => navigate('/sign-in')}>
            Already have an account? Sign in
          </Button>
        </div>
      </div>
    </div>
  );
}
