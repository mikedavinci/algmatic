import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

export function PrivacyPage() {
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
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">{t('PrivacyNotice.title')}</h1>
            <p className="text-lg text-muted-foreground">{t('PrivacyNotice.content')}</p>
          </motion.div>

          {/* Main Content */}
          <motion.div variants={item} className="space-y-8">
            {/* Children Section */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.Children.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.Children.content')}</p>
            </section>

            {/* Data Privacy Officer */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.DataPrivacyOfficer.title')}</h2>
              <p className="text-muted-foreground mb-4">{t('PrivacyNotice.DataPrivacyOfficer.content')}</p>
              <div className="pl-4 border-l-2 border-primary/20">
                <p className="font-semibold">{t('PrivacyNotice.DataPrivacyOfficer.name')}</p>
              </div>
            </section>

            {/* Personal Information */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.PersonalInformation.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.PersonalInformation.content')}</p>
            </section>

            {/* Sensitive Information */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.SensitiveInformationProcessed.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.SensitiveInformationProcessed.content')}</p>
            </section>

            {/* Legal Bases */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.LegalBases.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.LegalBases.content')}</p>
            </section>

            {/* Processing Purposes */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.ProcessingPurposes.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.ProcessingPurposes.content')}</p>
            </section>

            {/* Disclosure */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.DisclosurePurposes.title')}</h2>
              <p className="text-muted-foreground mb-4">{t('PrivacyNotice.DisclosurePurposes.content')}</p>
              <div className="pl-4 border-l-2 border-primary/20 space-y-2">
                <p className="text-muted-foreground whitespace-pre-line">{t('PrivacyNotice.DisclosureCircumstances.content')}</p>
              </div>
            </section>

            {/* Privacy Rights */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.PrivacyRights.title')}</h2>
              <p className="text-muted-foreground mb-4">{t('PrivacyNotice.PrivacyRights.content')}</p>
              <div className="pl-4 border-l-2 border-primary/20">
                <p className="text-muted-foreground whitespace-pre-line">{t('PrivacyNotice.PrivacyRightsList.content')}</p>
              </div>
            </section>

            {/* Request Submission */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.RequestSubmission.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.RequestSubmission.content')}</p>
            </section>

            {/* Request Limitations */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.RequestLimitations.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.RequestLimitations.content')}</p>
            </section>

            {/* Non-Discrimination */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.NonDiscrimination.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.NonDiscrimination.content')}</p>
            </section>

            {/* Automated Decision Making */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.AutomatedDecisionMaking.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.AutomatedDecisionMaking.content')}</p>
            </section>

            {/* Retention Duration */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.RetentionDuration.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.RetentionDuration.content')}</p>
            </section>

            {/* Cookies */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.Cookies.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.Cookies.content')}</p>
            </section>

            {/* Changes to Policy */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.ChangesToPolicy.title')}</h2>
              <p className="text-muted-foreground">{t('PrivacyNotice.ChangesToPolicy.content')}</p>
            </section>

            {/* Questions or Concerns */}
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h2 className="text-2xl font-bold mb-4">{t('PrivacyNotice.QuestionsConcerns.title')}</h2>
              <p className="text-muted-foreground mb-4">{t('PrivacyNotice.QuestionsConcerns.content')}</p>
              <div className="pl-4 border-l-2 border-primary/20">
                <p className="font-semibold">{t('PrivacyNotice.QuestionsConcerns.name')}</p>
                <p className="text-sm text-muted-foreground mt-4">{t('PrivacyNotice.QuestionsConcerns.lastUpdated')}</p>
              </div>
            </section>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}