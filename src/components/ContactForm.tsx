'use client';

import { useState } from 'react';
import { Locale } from '@/i18n/dictionaries';

interface ContactFormProps {
  locale: Locale;
}

const translations = {
  en: {
    name: 'Your Name',
    email: 'Your Email',
    message: 'Your Message',
    send: 'Send Message',
    sending: 'Sending...',
    success: 'Message sent successfully!',
    error: 'Something went wrong. Please try again.',
  },
  es: {
    name: 'Tu Nombre',
    email: 'Tu Email',
    message: 'Tu Mensaje',
    send: 'Enviar Mensaje',
    sending: 'Enviando...',
    success: '¡Mensaje enviado con éxito!',
    error: 'Algo salió mal. Por favor, inténtalo de nuevo.',
  },
  ru: {
    name: 'Ваше имя',
    email: 'Ваш Email',
    message: 'Ваше сообщение',
    send: 'Отправить',
    sending: 'Отправка...',
    success: 'Сообщение отправлено!',
    error: 'Что-то пошло не так. Попробуйте ещё раз.',
  },
};

export default function ContactForm({ locale }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const t = translations[locale] || translations.en;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto space-y-4">
      {/* Name */}
      <div>
        <input
          type="text"
          placeholder={t.name}
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
          className="w-full px-5 py-4 bg-white/60 border border-[#1a1a2e]/10 rounded-2xl
                     text-[#1a1a2e] placeholder-[#5a5a6e]/60
                     focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20
                     transition-all duration-300"
        />
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          placeholder={t.email}
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
          className="w-full px-5 py-4 bg-white/60 border border-[#1a1a2e]/10 rounded-2xl
                     text-[#1a1a2e] placeholder-[#5a5a6e]/60
                     focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20
                     transition-all duration-300"
        />
      </div>

      {/* Message */}
      <div>
        <textarea
          placeholder={t.message}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
          rows={4}
          className="w-full px-5 py-4 bg-white/60 border border-[#1a1a2e]/10 rounded-2xl
                     text-[#1a1a2e] placeholder-[#5a5a6e]/60 resize-none
                     focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[#f97316]/20
                     transition-all duration-300"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-[#f97316] text-white font-medium rounded-2xl
                   transition-all duration-300 hover:bg-[#ea580c] hover:shadow-lg hover:shadow-[#f97316]/20
                   disabled:opacity-50 disabled:cursor-not-allowed
                   active:scale-[0.98]"
      >
        {status === 'loading' ? t.sending : t.send}
      </button>

      {/* Status Messages */}
      {status === 'success' && (
        <p className="text-center text-green-600 font-medium animate-pulse">
          {t.success}
        </p>
      )}
      {status === 'error' && (
        <p className="text-center text-red-500 font-medium">
          {t.error}
        </p>
      )}

      {/* Social Links */}
      <div className="pt-6 flex justify-center gap-4">
        <a
          href="https://t.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/60 border border-[#1a1a2e]/10 flex items-center justify-center
                   hover:bg-[#0088cc] hover:text-white hover:border-transparent transition-all duration-300 text-[#1a1a2e]"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </a>
        <a
          href="https://github.com/alekseevpo"
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-white/60 border border-[#1a1a2e]/10 flex items-center justify-center
                   hover:bg-[#1a1a2e] hover:text-white hover:border-transparent transition-all duration-300 text-[#1a1a2e]"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a
          href="mailto:contact@alekseev.po"
          className="w-12 h-12 rounded-full bg-white/60 border border-[#1a1a2e]/10 flex items-center justify-center
                   hover:bg-[#f97316] hover:text-white hover:border-transparent transition-all duration-300 text-[#1a1a2e]"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </a>
      </div>
    </form>
  );
}
