// src/pages/auth/sign-up.tsx
import { useState } from 'react';
import { useSignUp } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useTranslation } from 'react-i18next';

export function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pendingVerification, setPendingVerification] = useState(false);
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const { signUp, isLoaded: clerkLoaded } = useSignUp();
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!clerkLoaded) {
      toast({
        title: t('auth.signup.errors.authSystemNotReady'),
        description: t('auth.signup.errors.tryAgainLater'),
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
        title: t('auth.signup.success.verificationEmailSent'),
        description: t('auth.signup.success.checkEmail'),
      });
    } catch (err: any) {
      console.error('Sign up error:', err);
      toast({
        title: t('auth.signup.errors.error'),
        description:
          err.errors?.[0]?.message || t('auth.signUp.errors.signUpFailed'),
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
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === 'complete') {
        toast({
          title: t('auth.signup.success.accountCreated'),
          description: t('auth.signup.success.redirecting'),
        });
        navigate('/dashboard');
      } else {
        toast({
          title: t('auth.signup.errors.verificationIncomplete'),
          description: t('auth.signup.errors.completeRequiredSteps'),
          variant: 'destructive',
        });
      }
    } catch (err: any) {
      console.error('Verification error:', err);
      toast({
        title: t('auth.signup.errors.verificationFailed'),
        description:
          err.errors?.[0]?.message || t('auth.signup.errors.failedToVerify'),
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
          <h1 className="text-3xl font-bold">{t('auth.signup.heading')}</h1>
          <p className="text-gray-500 dark:text-gray-400">
            {t('auth.signup.subheading')}
          </p>
        </div>

        {!pendingVerification ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email">
                {t('auth.signup.form.labels.email')}
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('auth.signup.form.placeholders.email')}
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="password">
                {t('auth.signup.form.labels.password')}
              </label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t('auth.signup.form.placeholders.password')}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? t('auth.signup.form.buttons.creatingAccount')
                : t('auth.signup.form.buttons.submit')}
            </Button>
          </form>
        ) : (
          <form onSubmit={verifyEmail} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="code">
                {t('auth.signup.form.labels.verificationCode')}
              </label>
              <Input
                id="code"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder={t(
                  'auth.signup.form.placeholders.verificationCode'
                )}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? t('auth.signup.form.buttons.verifying')
                : t('auth.signup.form.buttons.verifyEmail')}
            </Button>
          </form>
        )}

        <div className="text-center">
          <Button variant="link" onClick={() => navigate('/sign-in')}>
            {t('auth.signup.form.buttons.loginRedirect')}
          </Button>
        </div>
      </div>
    </div>
  );
}
