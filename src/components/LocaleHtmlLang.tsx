'use client';

import { useEffect } from 'react';
import { Locale } from '@/i18n/dictionaries';

interface LocaleHtmlLangProps {
  locale: Locale;
}

export default function LocaleHtmlLang({ locale }: LocaleHtmlLangProps) {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale]);

  return null;
}