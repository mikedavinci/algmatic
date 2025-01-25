import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigationStore } from '@/lib/store';
// import { ThemeToggle } from "@/components/theme/theme-toggle";
import { AnimatedLogo } from '@/components/logo/animated-logo';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MobileMenu } from './mobile-menu';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

export function Header() {
  const { toggle } = useNavigationStore();
  const { t, i18n } = useTranslation();
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navigate = useNavigate();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const navItems = [
    { href: '#hero', label: t('navbar.items.home') },
    { href: '#features', label: t('navbar.items.features') },
    { href: '#faq', label: t('navbar.items.faq') },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (window.location.pathname !== '/') {
      // First navigate to home page
      navigate('/');
      // Wait for the navigation to complete and DOM to update
      setTimeout(() => {
        // After navigation, try to find the element multiple times
        const tryScroll = (attempts = 0) => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          } else if (attempts < 5) {
            // Retry a few times if element not found
            setTimeout(() => tryScroll(attempts + 1), 100);
          }
        };
        tryScroll();
      }, 300); // Increased delay to ensure navigation completes
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.header
      style={{ opacity }}
      className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center">
        <div className="flex items-center justify-between w-full lg:justify-start">
          <Button
            variant="ghost"
            className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            onClick={toggle}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <a href="/" className="absolute left-1/2 -translate-x-1/2 flex items-center space-x-2 lg:static lg:translate-x-0 lg:mr-6">
            <AnimatedLogo />
            <motion.span
              className="font-bold text-xl bg-gradient-to-r from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('navbar.brand')}
            </motion.span>
          </a>
        </div>
        <nav className="hidden lg:flex lg:items-center lg:space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-base font-medium transition-colors hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
            >
              {item.label}
            </a>
          ))}
          <Button onClick={() => navigate('/register')}>
            {t('navbar.ctaButton')}
          </Button>
          <Select value={i18n.language} onValueChange={changeLanguage}>
            <SelectTrigger className="w-[80px] h-8 text-[11px]">
              <SelectValue className="text-[11px]" />
            </SelectTrigger>
            <SelectContent className="min-w-[80px]">
              <SelectItem value="en" className="text-[11px]">
                English
              </SelectItem>
              <SelectItem value="es" className="text-[11px]">
                Español
              </SelectItem>
            </SelectContent>
          </Select>
        </nav>
      </div>
      <MobileMenu />
    </motion.header>
  );
}
