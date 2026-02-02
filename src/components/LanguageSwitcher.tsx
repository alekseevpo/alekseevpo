'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Locale, locales } from '@/i18n/dictionaries';

const localeData: Record<Locale, { name: string; flag: string }> = {
  en: { name: 'English', flag: '🇬🇧' },
  es: { name: 'Español', flag: '🇪🇸' },
  ru: { name: 'Русский', flag: '🇷🇺' },
};

export default function LanguageSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale: Locale) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  return (
    <div className="fixed top-6 right-6 z-50 group">
      {/* Current language button */}
      <button
        className="flex items-center gap-2 px-4 py-2.5 bg-white/50 backdrop-blur-md
                   border border-[#1a1a2e]/10 rounded-full shadow-lg
                   hover:bg-white/70 transition-all duration-300"
      >
        <span className="text-sm font-medium text-[#1a1a2e]">
          {currentLocale.toUpperCase()}
        </span>
      </button>

      {/* Dropdown - shows on hover */}
      <div
        className="absolute top-full right-0 pt-2 transition-all duration-300 ease-out
                   opacity-0 -translate-y-2 pointer-events-none
                   group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto"
      >
        <div className="bg-white/70 backdrop-blur-xl border border-[#1a1a2e]/10 rounded-2xl shadow-xl p-2 min-w-[160px]">
          {locales.map((locale, index) => (
            <button
              key={locale}
              onClick={() => switchLocale(locale)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left
                         transition-all duration-200
                         ${locale === currentLocale
                           ? 'bg-[#0891b2]/10 text-[#0891b2]'
                           : 'text-[#1a1a2e] hover:bg-[#1a1a2e]/5'
                         }
                         ${index !== locales.length - 1 ? 'mb-1' : ''}`}
            >
              <span className="text-sm font-medium">{localeData[locale].name}</span>
              {locale === currentLocale && (
                <svg className="w-4 h-4 ml-auto text-[#0891b2]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
