import HorizontalScroll from '@/components/HorizontalScroll';
import Section from '@/components/Section';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import BlogSection from '@/components/BlogSection';
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
      <LanguageSwitcher currentLocale={locale} />
      <HorizontalScroll>
        {/* Hero Section */}
        <Section>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-[#1a1a2e]">
            {dict.hero.greeting} <span className="gradient-text">{dict.hero.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5a5a6e] animate-pulse-slow">
            {dict.hero.scrollHint}
          </p>
        </Section>

        {/* About Section */}
        <Section>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-[#0891b2]">
            {dict.about.title}
          </h2>
          <p className="text-lg md:text-xl text-[#4a4a5e] leading-relaxed max-w-2xl">
            {dict.about.description}
          </p>
        </Section>

        {/* Projects Section */}
        <Section>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#7c3aed]">
            {dict.projects.title}
          </h2>
          <div className="flex gap-6 flex-wrap justify-center">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white/60 border border-[#1a1a2e]/10 rounded-2xl p-8 min-w-[250px]
                           transition-all duration-300 hover:-translate-y-2 hover:border-[#0891b2] hover:shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#1a1a2e]">{dict.projects.project} {i}</h3>
                <p className="text-[#5a5a6e]">{dict.projects.description}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact Section */}
        <Section>
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-[#0891b2]">
            {dict.contact.title}
          </h2>
          <div className="flex gap-4 flex-wrap justify-center">
            {(['telegram', 'github', 'email'] as const).map((link) => (
              <a
                key={link}
                href="#"
                className="px-10 py-4 border-2 border-[#0891b2] text-[#0891b2] rounded-full
                           transition-all duration-300 hover:bg-[#0891b2] hover:text-white"
              >
                {dict.contact[link]}
              </a>
            ))}
          </div>
        </Section>

        {/* Blog Section - last, with vertical scroll */}
        <BlogSection dict={dict} locale={locale} />
      </HorizontalScroll>
    </>
  );
}
