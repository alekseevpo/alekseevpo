'use client';

import Link from 'next/link';
import { Dictionary, Locale } from '@/i18n/dictionaries';

interface BlogSectionProps {
  dict: Dictionary;
  locale: Locale;
}

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
  {
    id: 3,
    slug: 'third-post',
    title: { en: 'Third Article', es: 'Tercer Artículo', ru: 'Третья статья' },
    excerpt: {
      en: 'More content to explore...',
      es: 'Más contenido para explorar...',
      ru: 'Больше контента для изучения...',
    },
    date: '2026-02-02',
  },
  {
    id: 4,
    slug: 'fourth-post',
    title: { en: 'Fourth Article', es: 'Cuarto Artículo', ru: 'Четвёртая статья' },
    excerpt: {
      en: 'Even more content...',
      es: 'Aún más contenido...',
      ru: 'Ещё больше контента...',
    },
    date: '2026-02-03',
  },
  {
    id: 5,
    slug: 'fifth-post',
    title: { en: 'Fifth Article', es: 'Quinto Artículo', ru: 'Пятая статья' },
    excerpt: {
      en: 'The journey continues...',
      es: 'El viaje continúa...',
      ru: 'Путешествие продолжается...',
    },
    date: '2026-02-03',
  },
];

export default function BlogSection({ dict, locale }: BlogSectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <div className="px-6 pt-16 pb-24 min-h-screen flex flex-col">
      <div className="max-w-4xl mx-auto flex-1">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-[#1a1a2e]">My </span>
          <span className="accent-text">Blog</span>
        </h2>
        <p className="text-lg md:text-xl text-[#5a5a6e] mb-12">
          {dict.blog.description}
        </p>

        <div className="space-y-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white/60 border border-[#1a1a2e]/10 rounded-2xl p-8
                         transition-all duration-300 hover:border-[#0891b2] hover:shadow-lg"
            >
              <time className="text-sm text-[#5a5a6e]">{post.date}</time>
              <h3 className="text-2xl font-semibold mt-2 mb-3 text-[#1a1a2e]">
                {post.title[locale]}
              </h3>
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

      {/* Footer */}
      <footer className="mt-16 pt-8 border-t border-[#1a1a2e]/10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Logo / Name */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-[#1a1a2e]">Pavel Alekseev</h3>
              <p className="text-sm text-[#5a5a6e]">{dict.footer.location1}</p>
              <p className="text-sm text-[#5a5a6e]">{dict.footer.location2}</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/60 border border-[#1a1a2e]/10 flex items-center justify-center
                         hover:bg-[#0891b2] hover:text-white hover:border-transparent transition-all duration-300 text-[#1a1a2e]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a
                href="https://github.com/alekseevpo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/60 border border-[#1a1a2e]/10 flex items-center justify-center
                         hover:bg-[#1a1a2e] hover:text-white hover:border-transparent transition-all duration-300 text-[#1a1a2e]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="mailto:contact@alekseev.po"
                className="w-10 h-10 rounded-full bg-white/60 border border-[#1a1a2e]/10 flex items-center justify-center
                         hover:bg-[#7c3aed] hover:text-white hover:border-transparent transition-all duration-300 text-[#1a1a2e]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-[#1a1a2e]/10 text-center">
            <p className="text-sm text-[#5a5a6e]">
              © {currentYear} Pavel Alekseev. {dict.footer.copyright}.
            </p>
            <p className="text-xs text-[#5a5a6e]/60 mt-2">
              {dict.footer.madeWith} ❤️ {dict.footer.author}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
