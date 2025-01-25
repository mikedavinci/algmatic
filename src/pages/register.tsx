import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';
import { ScrollToTop } from '@/components/scroll-to-top';
// import { useNavigate } from 'react-router-dom';
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
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Spinner } from '@/components/ui/spinner';

interface Question {
  question: string;
  options: string[];
}

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  number: z.string().min(10, 'Phone number must be at least 10 digits'),
  question1: z.string(),
  question2: z.string(),
  question3: z.string(),
});

export function RegisterPage() {
  const { t } = useTranslation();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const navigate = useNavigate();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      number: '',
      question1: '',
      question2: '',
      question3: '',
    },
  });

  const questions = t('main-form.formSection.fields.questions', {
    returnObjects: true,
  }) as Question[];

  // Validate that questions is an array and has the correct structure
  if (
    !Array.isArray(questions) ||
    !questions.length ||
    !questions[0].question
  ) {
    console.error('Questions translation is not in the expected format');
    return null; // or show an error state
  }

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        'https://api.tradejourney.ai/api/site-forms/submit-main-form-two',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            phone: values.number,
            question_one_answer: values.question1,
            question_two_answer: values.question2,
            question_three_answer: values.question3,
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      toast({
        title: t('main-form.success.title'),
        description: t('main-form.success.message'),
      });
    } catch (error) {
      console.error('Registration form submission error:', error);
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
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-bold tracking-tight mb-4"
                >
                  {t('main-form.heroSection.title')}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-muted-foreground"
                >
                  {t('main-form.heroSection.description')}
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
                          <FormLabel>
                            {t('main-form.formSection.fields.name.label')}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t(
                                'main-form.formSection.fields.name.placeholder'
                              )}
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
                          <FormLabel>
                            {t('main-form.formSection.fields.email.label')}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t(
                                'main-form.formSection.fields.email.placeholder'
                              )}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="number"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            {t('main-form.formSection.fields.number.label')}
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder={t(
                                'main-form.formSection.fields.number.placeholder'
                              )}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {questions.map((question, index) => (
                      <FormField
                        key={index}
                        control={form.control}
                        name={
                          `question${index + 1}` as
                            | 'question1'
                            | 'question2'
                            | 'question3'
                        }
                        render={({ field }) => (
                          <FormItem className="space-y-3">
                            <FormLabel>{question.question}</FormLabel>
                            <FormControl>
                              <RadioGroup
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                                className="space-y-2"
                              >
                                {question.options.map((option, optionIndex) => (
                                  <FormItem
                                    key={optionIndex}
                                    className="flex items-center space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <RadioGroupItem value={option} />
                                    </FormControl>
                                    <FormLabel className="font-normal cursor-pointer">
                                      {option}
                                    </FormLabel>
                                  </FormItem>
                                ))}
                              </RadioGroup>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    ))}

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
                {t('main-form.success.title')}
              </h2>
              <p className="text-muted-foreground">
                {t('main-form.success.message')}
              </p>
              <Button
                onClick={() =>
                  (window.location.href =
                    'https://go.vantagefx.com/visit/?bta=53199&nci=5645')
                }
                className="inline-flex items-center"
              >
                {t('main-form.success.ctaButton')}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
