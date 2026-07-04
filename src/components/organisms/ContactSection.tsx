import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { Textarea } from '../atoms/Textarea';
import { Button } from '../atoms/Button';
import { useLanguage } from '../../lib/LanguageContext';
import { Reveal } from '../atoms/Reveal';
import { Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission: a production build would POST formData to a backend.
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-20 bg-navy-950 overflow-hidden">
      <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-reflex-blue/25 blur-3xl" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="heading-font text-white mb-4">
                {t.contact.title}
              </h2>
              <p className="body-font text-xl text-white/60">
                {t.contact.subtitle}
              </p>
            </div>
          </Reveal>

          <div className="glass-card p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="w-16 h-16 text-teal-bright mx-auto mb-4" />
                <h3 className="heading-font text-teal-bright mb-2">{t.contact.successTitle}</h3>
                <p className="body-font text-white/70">{t.contact.successBody}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  label={t.contact.name}
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.placeholders.name}
                />

                <Input
                  label={t.contact.email}
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.placeholders.email}
                />

                <Textarea
                  label={t.contact.message}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={t.contact.placeholders.message}
                  rows={6}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full group"
                >
                  {t.contact.send}
                  <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
