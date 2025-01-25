import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

export function DisclaimerPage() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const sections = [
    { key: 'Disclaimer' },
    { key: 'RiskDisclaimer' },
    { key: 'HypotheticalDisclaimer' },
    { key: 'TestimonialsDisclaimer' },
    { key: 'InvestmentDisclaimer' },
    { key: 'EducationalDisclaimer' },
    { key: 'TradingViewDisclosure' },
  ];

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={item} className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <AlertTriangle className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">
              {t('AlgoMaticTraderDisclaimer.title')}
            </h1>
            <p className="text-lg text-muted-foreground font-semibold">
              {t('AlgoMaticTraderDisclaimer.subtitle')}
            </p>
          </motion.div>

          {/* AlgoMaticTrader Disclaimer */}
          <motion.div variants={item} className="space-y-6 mb-12">
            {Array.from({ length: 7 }).map((_, index) => (
              <p key={index} className="text-muted-foreground">
                {t(`AlgoMaticTraderDisclaimer.paragraph${index + 1}`)}
              </p>
            ))}
          </motion.div>

          {/* Additional Disclaimers */}
          <motion.div variants={item} className="space-y-8">
            {sections.map((section) => (
              <section
                key={section.key}
                className="bg-card rounded-lg p-6 shadow-sm"
              >
                <h2 className="text-2xl font-bold mb-4">
                  {t(`${section.key}.title`)}
                </h2>
                {section.key === 'TestimonialsDisclaimer' ? (
                  <>
                    <p className="text-muted-foreground mb-4">
                      {t(`${section.key}.content`)}
                    </p>
                    <p className="text-muted-foreground">
                      {t(`${section.key}.content2`)}
                    </p>
                  </>
                ) : section.key === 'EducationalDisclaimer' ? (
                  <>
                    <p className="text-muted-foreground mb-4">
                      {t(`${section.key}.content1`)}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t(`${section.key}.content2`)}
                    </p>
                    <p className="text-muted-foreground">
                      {t(`${section.key}.content3`)}
                    </p>
                  </>
                ) : section.key === 'RiskDisclaimer' ? (
                  <>
                    <p className="text-muted-foreground mb-4">
                      {t(`${section.key}.content1`)}
                    </p>
                    <p className="text-muted-foreground mb-4">
                      {t(`${section.key}.content2`)}
                    </p>
                    <p className="text-muted-foreground">
                      {t(`${section.key}.content3`)}
                    </p>
                  </>
                ) : (
                  <p className="text-muted-foreground">
                    {t(`${section.key}.content`)}
                  </p>
                )}
              </section>
            ))}
          </motion.div>

          {/* Footer */}
          <motion.div variants={item} className="text-center mt-12">
            <p className="text-sm text-muted-foreground">
              {t('AlgoMaticTraderDisclaimer.footer')}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
