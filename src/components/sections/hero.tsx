import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-background/50 pt-24 pb-20 min-h-[80vh] flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/dtgmhmxlx/video/upload/v1737832468/algomatic/hero1_iunlp6.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-background via-background/20 to-background" />
      <div className="container relative z-20">
        <div className="mx-auto max-w-3xl text-center">
          {/* <div className="flex items-center justify-center mb-12">
            <motion.img
              src="https://res.cloudinary.com/dtgmhmxlx/image/upload/v1737832292/algomatic/DALL_E_2025-01-25_01.19.26_-_Auri_is_a_cute_and_magnetic_humanoid_AI_character_with_an_approachable_and_modern_design._She_has_a_youthful_and_friendly_appearance_with_soft_glowin_avl6ch.webp"
              alt="Auri Logo"
              className="h-32 w-32 object-contain rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            />
          </div> */}
          <h1 className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl">
            {t('pageTitle')}
          </h1>
          <p className="mb-12 text-lg sm:text-xl">{t('pageSubtitle')}</p>
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
    </section>
  );
}