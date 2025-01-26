import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { AnimatedLogo } from '@/components/logo/animated-logo';

interface FooterSection {
  title: string;
  description?: string;
  links: Array<{
    title: string;
    url: string;
  }>;
}

interface FooterSections {
  about: FooterSection;
  resources?: FooterSection;
  trade?: FooterSection;
  support?: FooterSection;
  legal?: FooterSection;
  followus?: FooterSection;
}

export function Footer() {
  const { t } = useTranslation();
  const sections = t('footer.sections', {
    returnObjects: true,
  }) as FooterSections;

  return (
    <footer className="py-12 bg-muted">
      <div className="container">
        <div className="grid gap-8 mb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {/* About Section */}
          <div className="space-y-4 xl:col-span-2">
            <div className="flex items-center mb-4 space-x-2">
              <AnimatedLogo />
              <span className="text-xl font-bold text-transparent bg-gradient-to-r from-primary via-primary/80 to-primary/40 bg-clip-text">
                {t('navbar.brand')}
              </span>
            </div>
          </div>

          {/* Trade Section */}
          <div>
            <h3 className="mb-4 font-semibold">{sections.trade?.title}</h3>
            <ul className="space-y-2">
              {sections.trade?.links.map((link) => (
                <li key={link.title}>
                  <Link
                    to={link.url.startsWith('#') ? '/' + link.url : link.url}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="mb-4 font-semibold">{sections.support?.title}</h3>
            <ul className="space-y-2">
              {sections.support?.links.map((link) => (
                <li key={link.title}>
                  <Link
                    to="/support"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h3 className="mb-4 font-semibold">{sections.legal?.title}</h3>
            <ul className="space-y-2">
              {sections.legal?.links.map((link) => (
                <li
                  key={link.title}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {link.title === 'Política de Privacidad' ||
                  link.title === 'Privacy Policy' ? (
                    <Link
                      to="/privacy-policy"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  ) : link.title === 'Términos de Servicio' ||
                    link.title === 'Terms of Service' ? (
                    <Link
                      to="/terms-of-service"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  ) : (
                    <Link
                      to="/disclaimer"
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {link.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-muted-foreground/10">
          <p className="text-sm text-center text-muted-foreground">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}