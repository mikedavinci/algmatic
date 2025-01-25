import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { HelpCircle, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Spinner } from '@/components/ui/spinner';
import { ScrollToTop } from '@/components/scroll-to-top';

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  issue: z.string().min(10, 'Please provide more details about your issue'),
});

export function SupportPage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      issue: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://api.AlgoMaticTrader.ai/api/site-forms/submit-support-form',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast({
        title: t('support.toast.success.title'),
        description: t('support.toast.success.description'),
      });
    } catch (error) {
      console.error('Support form submission error:', error);
      toast({
        variant: 'destructive',
        title: t('support.toast.error.title'),
        description: t('support.toast.error.description'),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] bg-background">
      <ScrollToTop />
      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <>
              <div className="text-center mb-12">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-center mb-6"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <HelpCircle className="w-8 h-8 text-primary" />
                  </div>
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold tracking-tight mb-4"
                >
                  {t('support.title')}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-muted-foreground"
                >
                  {t('support.description')}
                </motion.p>
              </div>

              <Card className="p-6">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('support.form.name.label')}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t('support.form.name.placeholder')}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('support.form.email.label')}</FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t('support.form.email.placeholder')}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="issue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>{t('support.form.issue.label')}</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder={t('support.form.issue.placeholder')}
                              className="min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Spinner className="mr-2" />
                          {t('register.form.submitting')}
                        </>
                      ) : (
                        t('register.form.submit')
                      )}
                    </Button>
                  </form>
                </Form>
              </Card>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center space-y-6"
            >
              <div className="flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">
                {t('supported.success.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('supported.success.message')}
              </p>
              <p className="text-sm text-muted-foreground">
                {t('supported.success.urgentHelp')}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
