import HorizontalScroll from '@/components/HorizontalScroll';
import Section from '@/components/Section';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import BlogSection from '@/components/BlogSection';
import ProfilePhoto from '@/components/ProfilePhoto';
import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import { getDictionary, Locale, locales } from '@/i18n/dictionaries';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default async function Home({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <Navigation locale={locale} />
      <LanguageSwitcher currentLocale={locale} />

      {/* Photo */}
      <ProfilePhoto />

      <HorizontalScroll>
        {/* Hero Section */}
        <Section>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#1a1a2e]">
            {dict.hero.greeting} <span className="accent-text">{dict.hero.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5a5a6e] animate-pulse-slow">
            {dict.hero.scrollHint}
          </p>
        </Section>

        {/* About Section */}
        <Section>
          <div className="max-w-3xl text-left mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              <span className="accent-text">{dict.about.title}</span>
            </h2>

            <p className="text-lg md:text-xl text-[#2f2f3d] leading-relaxed md:leading-8 mb-6">
              {dict.about.intro}
            </p>

            <h3 className="text-xl font-semibold text-[#1a1a2e] mb-3">
              {dict.about.education}
            </h3>
            <ul className="list-disc list-inside text-[#2f2f3d] mb-6 space-y-2">
              {dict.about.educationList.map((item, i) => (
                <li key={i} className="text-base md:text-lg">{item}</li>
              ))}
            </ul>

            <p className="text-lg md:text-xl text-[#2f2f3d] leading-relaxed md:leading-8 mb-6">
              {dict.about.career}
            </p>

            <p className="text-lg md:text-xl text-[#2f2f3d] leading-relaxed md:leading-8 mb-6">
              {dict.about.passion}
            </p>

            <p className="text-lg md:text-xl text-[#ef4444] font-semibold">
              {dict.about.closing}
            </p>
          </div>
        </Section>

        {/* Services Section */}
        <Section className="items-start justify-center pt-24 md:pt-28 pb-12">
          <div className="max-w-6xl text-center w-full">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-[#1a1a2e]">{dict.services.titlePrefix} </span>
              <span className="accent-text">{dict.services.titleAccent}</span>
            </h2>
            <p className="text-lg md:text-xl text-[#2f2f3d] mb-10">
              {dict.services.subtitle}
            </p>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4 max-h-[calc(100vh-320px)] overflow-y-auto pr-2">
              {dict.services.categories.map((category) => (
                <div key={category.title} className="text-left">
                  <h3 className="text-lg font-semibold mb-3 text-[#1a1a2e]">
                    {category.title}
                  </h3>
                  <ul className="space-y-2 text-[#2f2f3d] text-sm md:text-base leading-relaxed">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#1a1a2e] flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact Section */}
        <Section>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            <span className="accent-text">{dict.contact.title}</span>
          </h2>
          <p className="text-[#5a5a6e] mb-8 text-center max-w-md mx-auto">
            {locale === 'ru' ? 'Напишите мне и я свяжусь с вами в ближайшее время' :
             locale === 'es' ? 'Escríbeme y me pondré en contacto contigo pronto' :
             'Drop me a message and I\'ll get back to you soon'}
          </p>
          <ContactForm locale={locale} />
        </Section>

        {/* Blog Section - last, with vertical scroll */}
        <BlogSection dict={dict} locale={locale} />
      </HorizontalScroll>
    </>
  );
}
