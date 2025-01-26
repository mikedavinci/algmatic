import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Target, Lightbulb, ArrowRight, Sparkles } from 'lucide-react';
import { CandlestickBackground } from '@/components/animations/candlestick-background';
import { GridPattern } from '@/components/ui/grid-pattern';
import { useNavigate } from 'react-router-dom';

interface WhyAskAuri {
  title: string;
  items: string[];
}

interface Section {
  title: string;
  description: string;
  icon: JSX.Element;
  items: string[];
  outro?: string;
  closing?: string;
  whyAskAuri?: WhyAskAuri;
}

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

export function MindOfAuriPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const sections: Section[] = [
    {
      title: t('auriPageTwo.auriDailyBriefing.greeting'),
      description: t('auriPageTwo.auriDailyBriefing.intro'),
      icon: <Brain className="w-6 h-6" />,
      items: [
        t('auriPageTwo.auriDailyBriefing.items.overnightRecap'),
        t('auriPageTwo.auriDailyBriefing.items.topMovers'),
        t('auriPageTwo.auriDailyBriefing.items.economicEventsCalendar'),
        t('auriPageTwo.auriDailyBriefing.items.marketSentiment'),
        t('auriPageTwo.auriDailyBriefing.items.auriKeyInsights'),
      ],
      outro: t('auriPageTwo.auriDailyBriefing.outro'),
      closing: t('auriPageTwo.auriDailyBriefing.closing'),
    },
    {
      title: t('auriPageTwo.auriPracticeWithoutRisk.title'),
      description: t('auriPageTwo.auriPracticeWithoutRisk.greeting'),
      icon: <Target className="w-6 h-6" />,
      items: [
        t('auriPageTwo.auriPracticeWithoutRisk.items.realisticEnvironment'),
        t('auriPageTwo.auriPracticeWithoutRisk.items.testAndTweak'),
        t('auriPageTwo.auriPracticeWithoutRisk.items.feedbackConfidence'),
        t('auriPageTwo.auriPracticeWithoutRisk.items.financialStressFree'),
        t('auriPageTwo.auriPracticeWithoutRisk.items.gamifyGrowth'),
      ],
      outro: t('auriPageTwo.auriPracticeWithoutRisk.outro'),
    },
    {
      title: t('auriPageTwo.auriTradingMentor.title'),
      description: t('auriPageTwo.auriTradingMentor.greeting'),
      icon: <Lightbulb className="w-6 h-6" />,
      items: [
        t('auriPageTwo.auriTradingMentor.items.askAnything'),
        t('auriPageTwo.auriTradingMentor.items.realTimeGuidance'),
        t('auriPageTwo.auriTradingMentor.items.strategySupport'),
        t('auriPageTwo.auriTradingMentor.items.marketDeepDives'),
        t('auriPageTwo.auriTradingMentor.items.alwaysLearning'),
      ],
      whyAskAuri: {
        title: t('auriPageTwo.auriTradingMentor.whyAskAuri.title'),
        items: [
          t('auriPageTwo.auriTradingMentor.whyAskAuri.items.instantAnswers'),
          t(
            'auriPageTwo.auriTradingMentor.whyAskAuri.items.personalizedInsights'
          ),
          t(
            'auriPageTwo.auriTradingMentor.whyAskAuri.items.accessibleAnywhere'
          ),
        ],
      },
      outro: t('auriPageTwo.auriTradingMentor.outro'),
    },
  ];

  return (
    <div className="relative min-h-screen bg-background">
      <CandlestickBackground className="absolute inset-0 opacity-5" />
      <GridPattern
        className="absolute inset-0 opacity-10"
        width={32}
        height={32}
        x={-1}
        y={-1}
      />

      <div className="relative">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
            >
              The Mind of Auri
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="max-w-2xl mx-auto mt-6 text-lg leading-8 text-muted-foreground"
            >
              Discover how Auri thinks, learns, and evolves to become your
              perfect trading companion
            </motion.p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="mt-16 space-y-8"
          >
            {sections.map((section) => (
              <motion.div
                key={section.title}
                variants={item}
                className="overflow-hidden rounded-2xl border bg-card text-card-foreground shadow transition-colors hover:bg-accent/5"
              >
                <div className="p-6 sm:p-8">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-primary/10 p-2">
                      {section.icon}
                    </div>
                    <h2 className="text-2xl font-semibold">{section.title}</h2>
                  </div>

                  <p className="mt-4 text-muted-foreground">
                    {section.description}
                  </p>

                  <div className="mt-6 space-y-4">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-accent/5"
                      >
                        <div className="flex-shrink-0">
                          <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-sm">{item}</p>
                      </div>
                    ))}
                  </div>

                  {section.outro && (
                    <p className="mt-6 text-muted-foreground italic">
                      {section.outro}
                    </p>
                  )}

                  {section.closing && (
                    <p className="mt-4 text-muted-foreground font-medium">
                      {section.closing}
                    </p>
                  )}

                  {section.whyAskAuri && (
                    <div className="mt-6">
                      <h3 className="font-semibold mb-4">
                        {section.whyAskAuri.title}
                      </h3>
                      <div className="grid gap-3">
                        {section.whyAskAuri.items.map((item) => (
                          <div
                            key={item}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <Button
              size="lg"
              onClick={() => navigate('/register')}
              className="group"
              aria-label="Start your journey with Auri - Navigate to registration"
            >
              Start Your Journey with Auri
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
