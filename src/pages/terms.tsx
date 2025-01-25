import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ScrollText } from 'lucide-react';

export function TermsPage() {
  const { t } = useTranslation();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  const sections = [
    { title: 'section1_title', content: 'section1_content' },
    { title: 'section2_title', content: 'section2_content' },
    { title: 'section3_title', content: 'section3_content' },
    { title: 'section4_title', content: 'section4_content' },
    { title: 'section5_title', content: 'section5_content' },
    { title: 'section6_title', content: 'section6_content' },
    { title: 'section7_title', content: 'section7_content' },
    { title: 'section8_title', content: 'section8_content' },
    { title: 'section9_title', content: 'section9_content' },
    { title: 'section10_title', content: 'section10_content' },
    { title: 'section11_title', content: 'section11_content' },
    { title: 'section12_title', content: 'section12_content' },
    { title: 'section13_title', content: 'section13_content' },
    { title: 'section14_title', content: 'section14_content' },
    { title: 'section15_title', content: 'section15_content' },
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
                <ScrollText className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{t('TermsOfServicePage.title')}</h1>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>{t('TermsOfServicePage.overview')}</p>
              <p>{t('TermsOfServicePage.acceptance')}</p>
              <p>{t('TermsOfServicePage.agreement')}</p>
              <p>{t('TermsOfServicePage.modification')}</p>
            </div>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={item} className="space-y-8">
            {sections.map((section, index) => (
              <section key={index} className="bg-card rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold mb-4">
                  {t(`TermsOfServicePage.${section.title}`)}
                </h2>
                <p className="text-muted-foreground whitespace-pre-wrap">
                  {t(`TermsOfServicePage.${section.content}`)}
                </p>
              </section>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}