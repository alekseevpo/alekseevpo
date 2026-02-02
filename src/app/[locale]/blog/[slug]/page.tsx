import Link from 'next/link';
import LanguageSwitcher from '@/components/LanguageSwitcher';
import { getDictionary, Locale, locales } from '@/i18n/dictionaries';

const posts: Record<string, {
  title: Record<Locale, string>;
  content: Record<Locale, string[]>;
  date: string;
}> = {
  'first-post': {
    title: { en: 'My First Post', es: 'Mi Primer Post', ru: 'Моя первая статья' },
    content: {
      en: [
        'Welcome to my first blog post! This is where I share my thoughts and ideas.',
        'Technology has always fascinated me. From the early days of computing to modern AI, the evolution has been remarkable.',
        'I believe in continuous learning and sharing knowledge with others. This blog is my way of contributing to the community.',
        'Stay tuned for more posts about web development, design, and technology trends.',
      ],
      es: [
        '¡Bienvenidos a mi primera publicación! Aquí comparto mis pensamientos e ideas.',
        'La tecnología siempre me ha fascinado. Desde los primeros días de la computación hasta la IA moderna, la evolución ha sido notable.',
        'Creo en el aprendizaje continuo y en compartir conocimientos con los demás. Este blog es mi forma de contribuir a la comunidad.',
        'Mantente atento a más publicaciones sobre desarrollo web, diseño y tendencias tecnológicas.',
      ],
      ru: [
        'Добро пожаловать в мой первый пост! Здесь я делюсь своими мыслями и идеями.',
        'Технологии всегда меня завораживали. От ранних дней компьютеров до современного ИИ, эволюция была впечатляющей.',
        'Я верю в постоянное обучение и обмен знаниями с другими. Этот блог — мой способ внести вклад в сообщество.',
        'Следите за новыми постами о веб-разработке, дизайне и технологических трендах.',
      ],
    },
    date: '2026-02-01',
  },
  'second-post': {
    title: { en: 'Another Article', es: 'Otro Artículo', ru: 'Ещё одна статья' },
    content: {
      en: [
        'This is my second post where I dive deeper into various topics.',
        'Web development has changed dramatically over the years. New frameworks and tools emerge constantly.',
        'React, Next.js, and TypeScript have become the backbone of modern web applications.',
        'The key is to stay curious and never stop experimenting with new technologies.',
      ],
      es: [
        'Esta es mi segunda publicación donde profundizo en varios temas.',
        'El desarrollo web ha cambiado drásticamente a lo largo de los años. Constantemente surgen nuevos frameworks y herramientas.',
        'React, Next.js y TypeScript se han convertido en la columna vertebral de las aplicaciones web modernas.',
        'La clave es mantenerse curioso y nunca dejar de experimentar con nuevas tecnologías.',
      ],
      ru: [
        'Это мой второй пост, где я углубляюсь в различные темы.',
        'Веб-разработка кардинально изменилась за эти годы. Постоянно появляются новые фреймворки и инструменты.',
        'React, Next.js и TypeScript стали основой современных веб-приложений.',
        'Ключ в том, чтобы оставаться любопытным и никогда не переставать экспериментировать с новыми технологиями.',
      ],
    },
    date: '2026-02-02',
  },
  'third-post': {
    title: { en: 'Third Article', es: 'Tercer Artículo', ru: 'Третья статья' },
    content: {
      en: [
        'Design is not just what it looks like and feels like. Design is how it works.',
        'Good design is invisible. It guides users naturally without them even noticing.',
        'The best interfaces are the ones that get out of the way and let users accomplish their goals.',
        'Always design with empathy. Understand your users and their needs.',
      ],
      es: [
        'El diseño no es solo cómo se ve y se siente. El diseño es cómo funciona.',
        'El buen diseño es invisible. Guía a los usuarios de forma natural sin que lo noten.',
        'Las mejores interfaces son las que se apartan del camino y permiten a los usuarios lograr sus objetivos.',
        'Siempre diseña con empatía. Comprende a tus usuarios y sus necesidades.',
      ],
      ru: [
        'Дизайн — это не только то, как это выглядит и ощущается. Дизайн — это то, как это работает.',
        'Хороший дизайн невидим. Он направляет пользователей естественно, даже не замечая этого.',
        'Лучшие интерфейсы — те, которые уходят с дороги и позволяют пользователям достичь своих целей.',
        'Всегда проектируйте с эмпатией. Понимайте своих пользователей и их потребности.',
      ],
    },
    date: '2026-02-02',
  },
  'fourth-post': {
    title: { en: 'Fourth Article', es: 'Cuarto Artículo', ru: 'Четвёртая статья' },
    content: {
      en: [
        'Performance matters. Every millisecond counts in user experience.',
        'Optimize images, minimize JavaScript, and use efficient caching strategies.',
        'Core Web Vitals have become essential metrics for measuring website performance.',
        'A fast website is not just about technology — it is about respecting your users time.',
      ],
      es: [
        'El rendimiento importa. Cada milisegundo cuenta en la experiencia del usuario.',
        'Optimiza imágenes, minimiza JavaScript y usa estrategias de caché eficientes.',
        'Los Core Web Vitals se han convertido en métricas esenciales para medir el rendimiento del sitio.',
        'Un sitio web rápido no se trata solo de tecnología — se trata de respetar el tiempo de tus usuarios.',
      ],
      ru: [
        'Производительность важна. Каждая миллисекунда влияет на пользовательский опыт.',
        'Оптимизируйте изображения, минимизируйте JavaScript и используйте эффективные стратегии кэширования.',
        'Core Web Vitals стали важнейшими метриками для измерения производительности сайта.',
        'Быстрый сайт — это не только технология, это уважение к времени пользователей.',
      ],
    },
    date: '2026-02-03',
  },
  'fifth-post': {
    title: { en: 'Fifth Article', es: 'Quinto Artículo', ru: 'Пятая статья' },
    content: {
      en: [
        'The future of web development is exciting and full of possibilities.',
        'AI-powered tools are changing how we write and debug code.',
        'WebAssembly opens new doors for high-performance applications in the browser.',
        'Whatever comes next, the fundamentals remain: build for users, keep learning, and share knowledge.',
      ],
      es: [
        'El futuro del desarrollo web es emocionante y lleno de posibilidades.',
        'Las herramientas impulsadas por IA están cambiando cómo escribimos y depuramos código.',
        'WebAssembly abre nuevas puertas para aplicaciones de alto rendimiento en el navegador.',
        'Sea lo que venga, los fundamentos permanecen: construye para los usuarios, sigue aprendiendo y comparte conocimiento.',
      ],
      ru: [
        'Будущее веб-разработки захватывающе и полно возможностей.',
        'Инструменты на базе ИИ меняют то, как мы пишем и отлаживаем код.',
        'WebAssembly открывает новые двери для высокопроизводительных приложений в браузере.',
        'Что бы ни было дальше, основы остаются: создавайте для пользователей, продолжайте учиться и делитесь знаниями.',
      ],
    },
    date: '2026-02-03',
  },
};

export function generateStaticParams() {
  const params: { locale: Locale; slug: string }[] = [];
  for (const locale of locales) {
    for (const slug of Object.keys(posts)) {
      params.push({ locale, slug });
    }
  }
  return params;
}

interface PageProps {
  params: Promise<{ locale: Locale; slug: string }>;
}

export default async function BlogPostPage({ params }: PageProps) {
  const { locale, slug } = await params;
  const dict = getDictionary(locale);
  const post = posts[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#1a1a2e] mb-4">404</h1>
          <p className="text-[#5a5a6e] mb-8">Post not found</p>
          <Link
            href={`/${locale}/blog`}
            className="text-[#0891b2] hover:underline"
          >
            ← Back to blog
          </Link>
        </div>
      </div>
    );
  }

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

      <article className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href={`/${locale}`}
          className="text-[#0891b2] hover:underline mb-8 inline-block"
        >
          ← {dict.blog.title}
        </Link>

        <time className="block text-sm text-[#5a5a6e] mb-4">{post.date}</time>

        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#1a1a2e]">
          {post.title[locale]}
        </h1>

        <div className="prose prose-lg max-w-none">
          {post.content[locale].map((paragraph, index) => (
            <p key={index} className="text-[#4a4a5e] leading-relaxed mb-6 text-lg">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#1a1a2e]/10">
          <Link
            href={`/${locale}`}
            className="px-8 py-3 bg-[#7c3aed] text-white rounded-full
                       transition-all duration-300 hover:bg-[#6d28d9] inline-block"
          >
            ← Back to home
          </Link>
        </div>
      </article>
    </div>
  );
}
