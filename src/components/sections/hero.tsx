import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { CandlestickBackground } from '@/components/animations/candlestick-background';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background/50 pt-24 pb-20 min-h-[80vh] flex items-center"
    >
      <div className="container relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center mb-12">
            <motion.img
              src="https://res.cloudinary.com/dtgmhmxlx/image/upload/v1737791264/algomatic/cropped-one_m9ifgz.png"
              alt="Algomatic Logo"
              className="h-24 w-24 object-contain"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
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
      <div className="absolute inset-0 z-10">
        <CandlestickBackground />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-background via-background/20 to-background" />
    </section>
  );
}