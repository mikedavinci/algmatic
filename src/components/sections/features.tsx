import { useTranslation } from 'react-i18next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Brain,
  Shield,
  Clock,
  LineChart,
  BarChart4,
  Activity
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    translationKey: 'orchestrator',
  },
  {
    icon: LineChart,
    translationKey: 'signalGuru',
  },
  {
    icon: Activity,
    translationKey: 'tradeNavigator',
  },
  {
    icon: BarChart4,
    translationKey: 'marketVision',
  },
  {
    icon: Shield,
    translationKey: 'riskGuard',
  },
  {
    icon: Clock,
    translationKey: 'sessionGuardian',
  },
];

export function Features() {
  const { t } = useTranslation();

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('behindTheScenesTitle')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t('behindTheScenesDescription')}
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.translationKey} className="border-2 transition-colors hover:border-primary/50">
                <CardHeader>
                  <div className="mb-4 w-fit rounded-lg bg-primary/10 p-2">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{t(`${feature.translationKey}.title`)}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg">
                    {t(`${feature.translationKey}.whatItDoesDescription`)}
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <p className="text-base">
                      {t(`${feature.translationKey}.benefit1`)}
                    </p>
                    <p className="text-base">
                      {t(`${feature.translationKey}.benefit2`)}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}