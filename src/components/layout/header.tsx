import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigationStore } from '@/lib/store';
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
    { href: '/', label: 'Meet Auri' },
    { href: '/features#features', label: t('navbar.items.features') },
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
          const element = document.querySelector(`#${hash}`);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <motion.header
      style={{ opacity }}
      className="sticky top-0 z-50 w-full border-b bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-4 flex">
          <Button
            variant="ghost"
            className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 lg:hidden"
            onClick={toggle}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
          <a href="/" className="mr-6 flex items-center space-x-2">
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
              onClick={(e) => handleNavigation(e, item.href)}
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
