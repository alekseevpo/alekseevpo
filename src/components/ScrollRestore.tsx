'use client';

import { useEffect } from 'react';

const STORAGE_KEY = 'scroll-restore';

export default function ScrollRestore() {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (!stored) return;

    const scrollY = Number(stored);
    if (!Number.isNaN(scrollY)) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollY });
        setTimeout(() => {
          window.scrollTo({ top: scrollY });
        }, 120);
      });
    }
    window.sessionStorage.removeItem(STORAGE_KEY);
  }, []);

  return null;
}