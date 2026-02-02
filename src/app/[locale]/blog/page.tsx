import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getDictionary, Locale, locales } from '@/i18n/dictionaries';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

// Пример постов (потом можно заменить на CMS или MDX)
const posts = [
  {
    id: 1,
    slug: 'first-post',
    title: { en: 'My First Post', es: 'Mi Primer Post', ru: 'Моя первая статья' },
    excerpt: {
      en: 'This is a short description of the first post...',
      es: 'Esta es una breve descripción del primer post...',
      ru: 'Это краткое описание первой статьи...',
    },
    date: '2026-02-01',
  },
  {
    id: 2,
    slug: 'second-post',
    title: { en: 'Another Article', es: 'Otro Artículo', ru: 'Ещё одна статья' },
    excerpt: {
      en: 'Description of the second post goes here...',
      es: 'La descripción del segundo post va aquí...',
      ru: 'Описание второй статьи здесь...',
    },
    date: '2026-02-02',
  },
];

export default async function BlogPage({ params }: PageProps) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <div className="min-h-screen">
      <LanguageSwitcher currentLocale={locale} />

      {/* Back link */}
      <Link
        href={`/${locale}`}
        className="fixed top-6 left-6 z-50 px-4 py-2 bg-white/60 border border-[#1a1a2e]/10 rounded-full text-sm text-[#1a1a2e] hover:bg-white/80 transition-colors"
      >
        ← Home
      </Link>

      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
          {dict.blog.title}
        </h1>
        <p className="text-xl text-[#5a5a6e] mb-16">
          {dict.blog.description}
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white/60 border border-[#1a1a2e]/10 rounded-2xl p-8 transition-all duration-300 hover:border-[#0891b2] hover:shadow-lg"
            >
              <time className="text-sm text-[#5a5a6e]">{post.date}</time>
              <h2 className="text-2xl font-semibold mt-2 mb-3 text-[#1a1a2e]">
                {post.title[locale]}
              </h2>
              <p className="text-[#5a5a6e] mb-4">
                {post.excerpt[locale]}
              </p>
              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="text-[#0891b2] hover:text-[#0891b2]/80 transition-colors"
              >
                {dict.blog.readMore} →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
