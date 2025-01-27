import { useNavigationStore } from "@/lib/store";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LanguageSelector } from '@/components/language-selector';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

export function MobileMenu() {
  const { isOpen, toggle } = useNavigationStore();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navItems = [
    { href: '/', label: 'Meet Auri' },
    { href: '/mind-of-auri', label: t('navbar.items.features') },
    { href: '/features#faq', label: t('navbar.items.faq') },
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      const [path, hash] = href.split('#');
      navigate(path);
      if (hash) {
        setTimeout(() => {
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      toggle();
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>{t('navbar.brand')}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="w-full justify-start"
              onClick={() => handleNavigation(item.href)}
            >
              {item.label}
            </Button>
          ))}
          <SignedOut>
            <Button
              variant="ghost"
              className="w-full justify-start"
              onClick={() => {
                navigate('/sign-in');
                toggle();
              }}
            >
              Sign In
            </Button>
            <Button
              variant="default"
              className="w-full justify-start"
              onClick={() => {
                navigate('/sign-up');
                toggle();
              }}
            >
              Sign Up
            </Button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center justify-center">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Language</p>
            <div className="flex justify-center">
              <LanguageSelector />
            </div>
          </div>
          <Button
            className="w-full"
            onClick={() => {
              navigate('/sign-up');
              toggle();
            }}
          >
            {t('navbar.ctaButton')}
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}