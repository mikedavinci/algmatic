import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigationStore } from '@/lib/store';
import { AnimatedLogo } from '@/components/logo/animated-logo';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MobileMenu } from './mobile-menu';
import { useNavigate } from 'react-router-dom';
import { LanguageSelector } from '@/components/language-selector';
import { SignedIn, SignedOut, UserButton, useClerk } from '@clerk/clerk-react';

export function Header() {
  const { toggle } = useNavigationStore();
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navigate = useNavigate();
  const { signOut } = useClerk();

  const navItems = [
    { href: '/', label: ' Auri' },
    { href: '/mind-of-auri', label: t('navbar.items.features') },
    { href: '/features#faq', label: t('navbar.items.faq') },
  ];

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith('/')) {
      const [path, hash] = href.split('#');
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  const handleSignOut = () => {
    signOut();
    navigate('/');
  };

  return (
    <motion.header
      style={{ opacity }}
      className="sticky top-0 z-50 w-full border-b border-white/5 bg-black/50 backdrop-blur"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="/" className="-m-1.5 p-1.5">
            <AnimatedLogo />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="text-white hover:text-white/90"
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navItems.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNavigation(e, href)}
              className="text-sm font-semibold leading-6 text-white hover:text-white/90"
            >
              {label}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6">
          <SignedOut>
            <Button
              variant="ghost"
              className="text-sm font-semibold leading-6 text-white hover:text-white/90"
              onClick={() => navigate('/sign-in')}
            >
              {t('auth.signIn')}
            </Button>
            <Button
              variant="default"
              className="text-sm font-semibold leading-6"
              onClick={() => navigate('/sign-up')}
            >
              {t('auth.signUp')}
            </Button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                className="text-sm font-semibold leading-6 text-white hover:text-white/90"
                onClick={handleSignOut}
              >
                {t('auth.signOut')}
              </Button>
              <UserButton
                afterSignOutUrl="/"
                appearance={{
                  elements: {
                    avatarBox: 'w-10 h-10',
                    userButtonPopoverCard: 'bg-black/90 border border-white/10',
                    userButtonPopoverActions: 'text-white',
                    userButtonPopoverActionButton: 'hover:bg-white/10',
                    userButtonPopoverFooter: 'hidden',
                  },
                }}
              />
            </div>
          </SignedIn>
          <LanguageSelector />
        </div>
      </nav>
      <MobileMenu />
    </motion.header>
  );
}
