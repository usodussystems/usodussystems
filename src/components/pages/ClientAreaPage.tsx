import React, { useState } from 'react';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';
import { Logo } from '../atoms/Logo';
import { useLanguage } from '../../lib/LanguageContext';
import { ArrowLeft, Lock, User } from 'lucide-react';

interface ClientAreaPageProps {
  onNavigate: (page: 'home' | 'news' | 'client-area') => void;
}

export const ClientAreaPage: React.FC<ClientAreaPageProps> = ({ onNavigate }) => {
  const { t } = useLanguage();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    console.log('Login attempt:', credentials);
    alert('This is a demo. Login functionality would be implemented with proper authentication.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-reflex-blue via-process-blue to-purple flex items-center justify-center p-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 w-full max-w-md">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => onNavigate('home')}
          className="mb-8 text-white hover:bg-white hover:bg-opacity-20"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t.news.backToHome}
        </Button>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Logo variant="navbar" size="sm" withSlogan />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="heading-font text-reflex-blue mb-2">
              {t.clientArea.title}
            </h1>
            <p className="body-font text-gray-600">
              {t.clientArea.welcome}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-grey pointer-events-none" />
              <input
                type="text"
                name="username"
                placeholder={t.clientArea.username}
                value={credentials.username}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-reflex-blue focus:outline-none transition-colors body-font"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-grey pointer-events-none" />
              <input
                type="password"
                name="password"
                placeholder={t.clientArea.password}
                value={credentials.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:border-reflex-blue focus:outline-none transition-colors body-font"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 text-reflex-blue border-gray-300 rounded focus:ring-reflex-blue" />
                <span className="body-font text-sm text-gray-600">Remember me</span>
              </label>
              <a href="#" className="body-font text-sm text-reflex-blue hover:underline">
                {t.clientArea.forgotPassword}
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              size="lg"
              className="w-full"
            >
              {t.clientArea.login}
            </Button>
          </form>

          {/* Security Notice */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <p className="body-font text-xs text-gray-600 text-center">
              <Lock className="w-3 h-3 inline mr-1" />
              Secure connection with SSL encryption
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
