'use client';

import { useEffect, useState } from 'react';
import { Dictionary } from '@/i18n/dictionaries';

interface CookieConsentProps {
  dict: Dictionary;
}

const STORAGE_KEY = 'cookie-consent';

export default function CookieConsent({ dict }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setIsVisible(true);
    }
  }, []);

  const handleDecision = (value: 'accepted' | 'rejected') => {
    if (typeof window !== 'undefined') {
      window.localStorage.setItem(STORAGE_KEY, value);
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] w-[min(90vw,520px)]">
      <div className="bg-white/80 backdrop-blur-md border border-[#1a1a2e]/10 shadow-xl rounded-2xl px-6 py-4">
        <p className="text-sm text-[#1a1a2e] mb-4 text-center">
          {dict.cookies.message}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => handleDecision('accepted')}
            className="px-5 py-2.5 rounded-full bg-[#f97316] text-white text-sm font-medium
                       hover:bg-[#ea580c] transition-colors"
          >
            {dict.cookies.accept}
          </button>
          <button
            onClick={() => handleDecision('rejected')}
            className="px-5 py-2.5 rounded-full border border-[#1a1a2e]/20 text-sm font-medium
                       text-[#1a1a2e] hover:bg-[#1a1a2e]/5 transition-colors"
          >
            {dict.cookies.reject}
          </button>
        </div>
      </div>
    </div>
  );
}