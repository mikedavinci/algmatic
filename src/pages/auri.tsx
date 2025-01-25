import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { CandlestickBackground } from '@/components/animations/candlestick-background';
import { GridPattern } from '@/components/ui/grid-pattern';
import { useNavigate } from 'react-router-dom';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface Step {
  title: string;
  description: string;
}

interface Feature {
  title: string;
  description: string;
}

interface Testimonial {
  content: string;
  author: string;
}

interface Faq {
  question: string;
  answer: string;
}

export function AuriPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = (t('auriTwo.features.items', { returnObjects: true }) ||
    []) as Feature[];
  const steps = (t('auriTwo.how_it_works.steps', { returnObjects: true }) ||
    []) as Step[];
  const testimonials = (t('auriTwo.testimonials.quotes', {
    returnObjects: true,
  }) || []) as Testimonial[];
  const faqs = (t('auriTwo.faq.items', { returnObjects: true }) || []) as Faq[];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background relative overflow-hidden">
      <GridPattern size={50} className="opacity-[0.02]" />
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          className="absolute h-[500px] w-[500px] bg-primary/30 rounded-full blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute h-[800px] w-[800px] bg-secondary/20 rounded-full blur-[120px]"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute h-[600px] w-[600px] bg-accent/20 rounded-full blur-[140px]"
          animate={{
            scale: [0.8, 1, 0.8],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <CandlestickBackground />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/40 to-background/90 pointer-events-none" />
        <div className="container relative z-20">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-12"
            >
              <img
                src="https://res.cloudinary.com/dtgmhmxlx/image/upload/v1737832292/algomatic/DALL_E_2025-01-25_01.19.26_-_Auri_is_a_cute_and_magnetic_humanoid_AI_character_with_an_approachable_and_modern_design._She_has_a_youthful_and_friendly_appearance_with_soft_glowin_avl6ch.webp"
                alt="Auri Logo"
                className="h-32 w-32 object-contain rounded-full"
              />
            </motion.div>
            <motion.h1
              className="mb-8 text-4xl font-bold tracking-wider sm:text-6xl bg-gradient-to-r from-auri-teal via-auri-lavender to-auri-softPink bg-clip-text text-transparent font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t('auriTwo.hero.title')}
            </motion.h1>
            <motion.p
              className="mb-12 text-lg text-muted-foreground sm:text-xl font-sans"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('auriTwo.hero.subtitle')}
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button
                size="lg"
                className="w-full sm:w-auto bg-auri-teal hover:bg-auri-teal/90"
                onClick={() => navigate('/register')}
              >
                {t('auriTwo.hero.cta_primary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              {/* <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t('auriTwo.hero.cta_secondary')}
              </Button> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 relative">
        <GridPattern size={32} className="opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('auriTwo.about.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('auriTwo.about.content')}
            </p>
          </div>
        </div>
      </section>

      {/* Daily Market Briefings Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 backdrop-blur-3xl bg-muted/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('auriTen.dailyMarketBriefings.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('auriTen.dailyMarketBriefings.content')}
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Trade Simulator Section */}
      <section className="py-20 relative">
        <GridPattern size={24} className="opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-accent/5" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('auriTen.interactiveTradeSimulator.title')}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t('auriTen.interactiveTradeSimulator.content')}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 backdrop-blur-3xl bg-muted/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
        <div className="container relative">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            {t('auriTwo.features.title')}
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4 font-heading">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 relative">
        <GridPattern size={16} className="opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5" />
        <div className="container relative">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            {t('auriTwo.how_it_works.title')}
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-6 h-full">
                  <h3 className="text-xl font-semibold mb-4 font-heading">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 backdrop-blur-3xl bg-muted/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
        <div className="container relative">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            {t('auriTwo.testimonials.title')}
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-6 h-full">
                  <p className="text-muted-foreground mb-4 font-sans">
                    "{testimonial.content}"
                  </p>
                  <p className="font-semibold font-mono">
                    - {testimonial.author}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 relative">
        <GridPattern size={20} className="opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5" />
        <div className="container relative">
          <h2 className="text-3xl font-bold text-center mb-12 font-heading">
            {t('auriTwo.faq.title')}
          </h2>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div key={index} variants={item}>
                <Card className="p-6">
                  <h3 className="text-xl font-semibold mb-4 font-heading">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground font-sans">
                    {faq.answer}
                  </p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 backdrop-blur-3xl bg-muted/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="container relative">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              {t('auriTwo.cta_section.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('auriTwo.cta_section.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-auri-teal hover:bg-auri-teal/90"
              >
                {t('auriTwo.cta_section.cta_primary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t('auriTwo.cta_section.cta_secondary')}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
