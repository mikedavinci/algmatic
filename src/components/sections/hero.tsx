import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, LineChart } from 'lucide-react';
import { CandlestickBackground } from '@/components/animations/candlestick-background';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background/50 pt-24 pb-20 min-h-[80vh] flex items-center"
    >
      <div className="container relative z-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center mb-8">
            <LineChart className="h-16 w-16 text-primary" />
          </div>
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">
            {t('pageTitle')}
          </h1>
          <p className="mb-12 text-lg text-muted-foreground sm:text-xl">
            {t('pageSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => navigate('/register')}
            >
              {t('navbar.ctaButton')}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-10 pointer-events-none">
        <CandlestickBackground />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-background via-background/20 to-background" />
    </section>
  );
}