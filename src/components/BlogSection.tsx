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
  return (
    <div className="px-6 pt-16 pb-32">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
          {dict.blog.title}
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
    </div>
  );
}
