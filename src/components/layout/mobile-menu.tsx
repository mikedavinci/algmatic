import { useNavigationStore } from "@/lib/store";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import { AnimatedLogo } from '@/components/logo/animated-logo';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useNavigate } from 'react-router-dom';

export function MobileMenu() {
  const { isOpen, toggle } = useNavigationStore();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const navItems = [
    { href: '#hero', label: t('navbar.items.home') },
    { href: '#features', label: t('navbar.items.features') },
    { href: '#faq', label: t('navbar.items.faq') }
  ];

  const scrollToSection = (href: string) => {
    if (window.location.hash !== '#/') {
      navigate('/', { state: { scrollTo: href.substring(1) } });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    toggle();
  };

  return (
    <Sheet open={isOpen} onOpenChange={toggle}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader className="text-center">
          <div className="flex flex-col items-center justify-center space-y-2">
            <AnimatedLogo />
            <SheetTitle className="text-xl font-bold bg-gradient-to-r from-primary via-primary/80 to-primary/40 bg-clip-text text-transparent">
              {t('navbar.brand')}
            </SheetTitle>
          </div>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="w-full justify-start"
              onClick={() => scrollToSection(item.href)}
            >
              {item.label}
            </Button>
          ))}
          <Button
            className="w-full"
            onClick={() => {
              navigate('/register');
              toggle();
            }}
          >
            {t('navbar.ctaButton')}
          </Button>
          <div className="mb-4">
            <p className="text-sm font-medium mb-2">Language</p>
            <Select value={i18n.language} onValueChange={changeLanguage}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="es">Español</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}