'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Locale } from '@/i18n/dictionaries';

interface NavigationProps {
  locale: Locale;
}

const navItems = {
  en: [
    { label: 'About', sectionIndex: 1 },
    { label: 'Services', sectionIndex: 2 },
    { label: 'Contact', sectionIndex: 3 },
    { label: 'Blog', sectionIndex: 4 },
  ],
  es: [
    { label: 'Sobre mí', sectionIndex: 1 },
    { label: 'Servicios', sectionIndex: 2 },
    { label: 'Contacto', sectionIndex: 3 },
    { label: 'Blog', sectionIndex: 4 },
  ],
  ru: [
    { label: 'Обо мне', sectionIndex: 1 },
    { label: 'Услуги', sectionIndex: 2 },
    { label: 'Контакты', sectionIndex: 3 },
    { label: 'Блог', sectionIndex: 4 },
  ],
};

const ctaText = {
  en: 'Get in Touch',
  es: 'Contactar',
  ru: 'Связаться',
};

export default function Navigation({ locale }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const items = navItems[locale] || navItems.en;
  const cta = ctaText[locale] || ctaText.en;

  useEffect(() => {
    const handleScroll = () => {
      // Use scrollY because horizontal scroll is simulated via transform
      const scrollY = window.scrollY;
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? Math.min(scrollY / totalHeight, 1) : 0;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Interpolate colors based on scroll progress
  const bgColor = scrollProgress > 0.1
    ? `rgba(249, 115, 22, ${Math.min(scrollProgress * 0.9, 0.9)})`
    : 'rgba(255, 255, 255, 0.8)';

  const textColor = scrollProgress > 0.3 ? 'white' : '#1a1a2e';
  const textColorMuted = scrollProgress > 0.3 ? 'rgba(255,255,255,0.8)' : 'rgba(26,26,46,0.7)';

  const scrollToSection = (sectionIndex: number) => {
    // Each section is 100vw wide, so scroll position = sectionIndex * viewportWidth
    const viewportWidth = window.innerWidth;
    const targetScrollY = sectionIndex * viewportWidth;

    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth'
    });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div
          className="flex items-center justify-between backdrop-blur-md rounded-full px-6 py-3 shadow-lg shadow-black/5 border border-white/20 transition-all duration-300"
          style={{ backgroundColor: bgColor }}
        >
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2">
            <span className="text-xl font-bold transition-colors duration-300" style={{ color: textColor }}>
              Pavel
              <span className={`text-[1.4em] ${scrollProgress > 0.3 ? 'text-white' : 'text-[#f97316]'}`}>
                .
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {items.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollToSection(item.sectionIndex)}
                className="transition-colors text-sm font-medium hover:opacity-80 cursor-pointer"
                style={{ color: textColorMuted }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => scrollToSection(3)}
              className={`px-5 py-2.5 text-sm font-medium rounded-full transition-colors flex items-center gap-2 cursor-pointer ${
                scrollProgress > 0.3
                  ? 'bg-white text-[#f97316] hover:bg-white/90'
                  : 'bg-[#f97316] text-white hover:bg-[#ea580c]'
              }`}
            >
              {cta}
              <span>✨</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 transition-colors duration-300"
            style={{ color: textColor }}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden mt-2 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-white/20 transition-all duration-300"
            style={{ backgroundColor: scrollProgress > 0.3 ? 'rgba(249, 115, 22, 0.95)' : 'rgba(255, 255, 255, 0.95)' }}
          >
            <div className="flex flex-col gap-2">
              {items.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.sectionIndex);
                    setIsMenuOpen(false);
                  }}
                  className={`px-4 py-3 rounded-xl transition-colors text-sm font-medium text-left ${
                    scrollProgress > 0.3
                      ? 'text-white/80 hover:text-white hover:bg-white/10'
                      : 'text-[#1a1a2e]/70 hover:text-[#1a1a2e] hover:bg-[#1a1a2e]/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection(3);
                  setIsMenuOpen(false);
                }}
                className={`mt-2 px-4 py-3 text-sm font-medium rounded-xl transition-colors text-center ${
                  scrollProgress > 0.3
                    ? 'bg-white text-[#f97316] hover:bg-white/90'
                    : 'bg-[#f97316] text-white hover:bg-[#ea580c]'
                }`}
              >
                {cta} ✨
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
