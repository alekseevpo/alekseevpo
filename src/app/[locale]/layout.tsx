import { getDictionary, Locale, locales } from "@/i18n/dictionaries";
import LocaleHtmlLang from "@/components/LocaleHtmlLang";
import CookieConsent from "@/components/CookieConsent";
import ScrollRestore from "@/components/ScrollRestore";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}

export default async function LocaleLayout({ children, params }: LayoutProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return (
    <>
      <LocaleHtmlLang locale={locale} />
      <ScrollRestore />
      {children}
      <CookieConsent dict={dict} />
    </>
  );
}
