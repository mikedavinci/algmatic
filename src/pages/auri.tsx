import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  ArrowRight,
  Brain,
  BookOpen,
  LineChart,
  BarChart,
  Shield,
} from 'lucide-react';
import { CandlestickBackground } from '@/components/animations/candlestick-background';

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

export function AuriPage() {
  const { t } = useTranslation();

  const features = [
    { icon: LineChart, key: 'Advanced Market Signals' },
    { icon: BookOpen, key: 'Educational Tutorials' },
    { icon: Brain, key: 'Trade Feedback' },
    { icon: BarChart, key: 'Real-Time Data Analysis' },
    { icon: Shield, key: 'Risk Management' },
  ];

  const steps = (t('auri.sections.how_it_works.steps', { returnObjects: true }) || []) as Step[];

  return (
    <div className="min-h-screen bg-auri-gradient">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-20 min-h-[80vh] flex items-center">
        <div className="container relative z-10">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-12"
            >
              <img
                src="https://res.cloudinary.com/dtgmhmxlx/image/upload/v1737791264/algomatic/cropped-one_m9ifgz.png"
                alt="Auri Logo"
                className="h-24 w-24 object-contain"
              />
            </motion.div>
            <motion.h1
              className="mb-8 text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-auri-teal via-auri-lavender to-auri-softPink bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {t('auri.hero.title')}
            </motion.h1>
            <motion.p
              className="mb-12 text-lg text-muted-foreground sm:text-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {t('auri.hero.subtitle')}
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
              >
                {t('auri.hero.cta_primary')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                {t('auri.hero.cta_secondary')}
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <CandlestickBackground />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-card/5">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={item} className="text-3xl font-bold mb-6">
              {t('auri.sections.about.title')}
            </motion.h2>
            <motion.p variants={item} className="text-lg text-muted-foreground">
              {t('auri.sections.about.content')}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-3xl font-bold mb-6">
              {t('auri.sections.features.title')}
            </motion.h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div variants={item} key={index}>
                  <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-auri-teal/20 hover:border-auri-teal/40 transition-colors">
                    <div className="mb-4 w-12 h-12 rounded-lg bg-auri-teal/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-auri-teal" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">
                      {t(`auri.sections.features.items.${index}.title`)}
                    </h3>
                    <p className="text-muted-foreground">
                      {t(`auri.sections.features.items.${index}.description`)}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-20 bg-card/5">
        <div className="container">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2 variants={item} className="text-3xl font-bold mb-6">
              {t('auri.sections.how_it_works.title')}
            </motion.h2>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {steps.map((step: Step, index: number) => (
              <motion.div variants={item} key={index} className="relative">
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm border-auri-lavender/20 hover:border-auri-lavender/40 transition-colors">
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-auri-lavender text-background flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3 mt-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
