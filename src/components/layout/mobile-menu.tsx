import { useNavigationStore } from "@/lib/store";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useTranslation } from 'react-i18next';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useNavigate } from 'react-router-dom';

export function MobileMenu() {
  const { isOpen, toggle } = useNavigationStore();
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (value: string) => {
    i18n.changeLanguage(value);
  };

  const navItems = [
    { href: '/', label: 'Auri' },
    { href: '/features#features', label: t('navbar.items.features') },
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
          <Button
            className="w-full"
            onClick={() => {
              navigate('/register');
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