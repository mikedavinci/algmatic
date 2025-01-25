import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
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
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            {t('contactUs.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('contactUs.description')}
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div variants={item} className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{t('contactUs.email.label')}</h3>
                <p className="text-muted-foreground">{t('contactUs.email.value')}</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{t('contactUs.phone.label')}</h3>
                <p className="text-muted-foreground">{t('contactUs.phone.value')}</p>
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{t('contactUs.address.label')}</h3>
                <p className="text-muted-foreground">{t('contactUs.address.value')}</p>
              </div>
            </motion.div>

            <motion.div variants={item}>
              <h3 className="font-semibold mb-4">{t('contactUs.followUs.title')}</h3>
              <p className="text-muted-foreground mb-4">{t('contactUs.followUs.description')}</p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Facebook className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Instagram className="h-5 w-5 text-primary" />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <div className="bg-card rounded-lg p-8 shadow-lg border">
            <h3 className="text-xl font-semibold mb-2">{t('contactUs.form.title')}</h3>
            <p className="text-muted-foreground mb-6">{t('contactUs.form.instructions')}</p>
            <form className="space-y-4">
              <Input placeholder={t('contactUs.form.fields.namePlaceholder')} />
              <Input type="email" placeholder={t('contactUs.form.fields.emailPlaceholder')} />
              <Input placeholder={t('contactUs.form.fields.subjectPlaceholder')} />
              <Textarea 
                placeholder={t('contactUs.form.fields.messagePlaceholder')}
                className="min-h-[150px]"
              />
              <Button className="w-full">{t('contactUs.form.submitButton')}</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}