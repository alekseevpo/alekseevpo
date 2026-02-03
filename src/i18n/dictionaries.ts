export type Locale = "en" | "es" | "ru";

export interface ServicesCategory {
  title: string;
  items: string[];
}

export interface Dictionary {
  hero: {
    greeting: string;
    name: string;
    scrollHint: string;
  };
  about: {
    title: string;
    intro: string;
    education: string;
    educationList: string[];
    career: string;
    passion: string;
    closing: string;
  };
  projects: {
    title: string;
    project: string;
    description: string;
  };
  services: {
    titlePrefix: string;
    titleAccent: string;
    subtitle: string;
    categories: ServicesCategory[];
  };
  contact: {
    title: string;
    telegram: string;
    github: string;
    email: string;
  };
  blog: {
    title: string;
    description: string;
    readMore: string;
    posts: string;
    noPosts: string;
  };
  cookies: {
    message: string;
    accept: string;
    reject: string;
  };
  footer: {
    copyright: string;
    madeWith: string;
    author: string;
    location1: string;
    location2: string;
  };
}

export const dictionaries: Record<Locale, Dictionary> = {
  en: {
    hero: {
      greeting: "Hi Everyone! I'm",
      name: "Pavel",
      scrollHint: "Scroll down →",
    },
    about: {
      title: "About me",
      intro: "I was born in 1985 in Volosovo, a small town in the Leningrad region near Saint Petersburg. I'm 40 years old.",
      education: "Education",
      educationList: [
        "Saint Petersburg State University of Economics and Finance",
        "Saint Petersburg College of Industry Technologies, Finance and Law"
      ],
      career: "I graduated with an auditor specialization and worked in this position for over 7 years. However, I was always drawn to development and programming.",
      passion: "Today I'm fully dedicated to what I love — creating projects that delight clients and users, helping businesses find new solutions, and connecting users with businesses to solve their tasks.",
      closing: "I'm always open to new connections and meeting interesting people!",
    },
    projects: {
      title: "Projects",
      project: "Project",
      description: "Project description",
    },
    services: {
      titlePrefix: "My",
      titleAccent: "Services",
      subtitle: "How I can help your business",
      categories: [
        {
          title: "Discovery & Strategy",
          items: [
            "Business goals analysis",
            "Competitor research",
            "User personas & journey mapping",
            "Technical requirements",
          ],
        },
        {
          title: "UX Design",
          items: [
            "Information architecture",
            "User flows & wireframes",
            "Interactive prototypes",
            "Usability testing",
          ],
        },
        {
          title: "UI Design",
          items: [
            "Visual concepts",
            "Design systems",
            "Responsive layouts",
            "Animations & micro-interactions",
          ],
        },
        {
          title: "Frontend Development",
          items: [
            "HTML/CSS/JavaScript",
            "React, Vue.js",
            "Responsive & cross-browser",
            "Performance optimization",
          ],
        },
        {
          title: "Backend Development",
          items: [
            "Custom CMS",
            "Database architecture",
            "API integration",
            "Security implementation",
          ],
        },
        {
          title: "Branding & Identity",
          items: [
            "Logo design",
            "Brand guidelines",
            "Marketing collateral",
            "Social media assets",
          ],
        },
        {
          title: "SEO & Marketing",
          items: [
            "On-page SEO",
            "Analytics setup",
            "Conversion optimization",
            "Content strategy",
          ],
        },
        {
          title: "Launch & Support",
          items: [
            "Deployment & hosting",
            "Quality assurance",
            "Post-launch monitoring",
            "Ongoing maintenance",
          ],
        },
      ],
    },
    contact: {
      title: "Contact",
      telegram: "Telegram",
      github: "GitHub",
      email: "Email",
    },
    blog: {
      title: "Blog",
      description: "Thoughts, ideas and articles",
      readMore: "Read more",
      posts: "Posts",
      noPosts: "No posts yet",
    },
    cookies: {
      message: "We use cookies to improve your experience and analyze traffic.",
      accept: "Accept",
      reject: "Decline",
    },
    footer: {
      copyright: "All rights reserved",
      madeWith: "Made with",
      author: "Pavel Alekseev",
      location1: "Saint Petersburg, Russia",
      location2: "Madrid, Spain",
    },
  },
  es: {
    hero: {
      greeting: "¡Hola a todos! Soy",
      name: "Pavel",
      scrollHint: "Desplázate hacia abajo →",
    },
    about: {
      title: "Sobre mí",
      intro: "Nací en 1985 en Volosovo, una pequeña ciudad en la región de Leningrado cerca de San Petersburgo. Tengo 40 años.",
      education: "Educación",
      educationList: [
        "Universidad Estatal de Economía y Finanzas de San Petersburgo",
        "Colegio de Tecnologías Industriales, Finanzas y Derecho de San Petersburgo"
      ],
      career: "Me gradué con especialización en auditoría y trabajé en esta posición durante más de 7 años. Sin embargo, siempre me atrajo el desarrollo y la programación.",
      passion: "Hoy me dedico completamente a lo que amo: crear proyectos que deleitan a clientes y usuarios, ayudar a las empresas a encontrar nuevas soluciones y conectar a los usuarios con empresas para resolver sus tareas.",
      closing: "¡Siempre estoy abierto a nuevas conexiones y a conocer gente interesante!",
    },
    projects: {
      title: "Proyectos",
      project: "Proyecto",
      description: "Descripción del proyecto",
    },
    services: {
      titlePrefix: "Mis",
      titleAccent: "Servicios",
      subtitle: "Cómo puedo ayudar a tu negocio",
      categories: [
        {
          title: "Descubrimiento y estrategia",
          items: [
            "Análisis de objetivos de negocio",
            "Investigación de la competencia",
            "Personas y mapa del viaje del usuario",
            "Requisitos técnicos",
          ],
        },
        {
          title: "Diseño UX",
          items: [
            "Arquitectura de la información",
            "Flujos de usuario y wireframes",
            "Prototipos interactivos",
            "Pruebas de usabilidad",
          ],
        },
        {
          title: "Diseño UI",
          items: [
            "Conceptos visuales",
            "Sistemas de diseño",
            "Diseños responsivos",
            "Animaciones y micro-interacciones",
          ],
        },
        {
          title: "Desarrollo frontend",
          items: [
            "HTML/CSS/JavaScript",
            "React, Vue.js",
            "Responsive y multi-navegador",
            "Optimización de rendimiento",
          ],
        },
        {
          title: "Desarrollo backend",
          items: [
            "CMS a medida",
            "Arquitectura de base de datos",
            "Integración de APIs",
            "Implementación de seguridad",
          ],
        },
        {
          title: "Branding e identidad",
          items: [
            "Diseño de logotipo",
            "Guías de marca",
            "Materiales de marketing",
            "Recursos para redes sociales",
          ],
        },
        {
          title: "SEO y marketing",
          items: [
            "SEO on-page",
            "Configuración de analítica",
            "Optimización de conversión",
            "Estrategia de contenido",
          ],
        },
        {
          title: "Lanzamiento y soporte",
          items: [
            "Despliegue y hosting",
            "Control de calidad",
            "Monitoreo post-lanzamiento",
            "Mantenimiento continuo",
          ],
        },
      ],
    },
    contact: {
      title: "Contacto",
      telegram: "Telegram",
      github: "GitHub",
      email: "Email",
    },
    blog: {
      title: "Blog",
      description: "Pensamientos, ideas y artículos",
      readMore: "Leer más",
      posts: "Publicaciones",
      noPosts: "Aún no hay publicaciones",
    },
    cookies: {
      message: "Usamos cookies para mejorar tu experiencia y analizar el tráfico.",
      accept: "Aceptar",
      reject: "Rechazar",
    },
    footer: {
      copyright: "Todos los derechos reservados",
      madeWith: "Hecho con",
      author: "Pavel Alekseev",
      location1: "San Petersburgo, Rusia",
      location2: "Madrid, España",
    },
  },
  ru: {
    hero: {
      greeting: "Всем привет! Я",
      name: "Павел",
      scrollHint: "Скролль вниз →",
    },
    about: {
      title: "Обо мне",
      intro: "Я родился в 1985 году в городе Волосово — небольшом городе в Ленинградской области недалеко от Санкт-Петербурга. Мне 40 лет.",
      education: "Образование",
      educationList: [
        "Санкт-Петербургский государственный университет экономики и финансов",
        "Санкт-Петербургский техникум отраслевых технологий, финансов и права"
      ],
      career: "Получил специализацию аудитор и более 7 лет работал в этой должности. Однако меня всегда тянуло к разработке и программированию.",
      passion: "Сегодня я на постоянной основе занимаюсь любимым делом — создаю проекты, которые радуют заказчиков и пользователей, помогаю бизнесу находить новые решения, а пользователям — находить бизнесы для решения их задач.",
      closing: "Буду рад новым знакомствам и контактам с интересными людьми!",
    },
    projects: {
      title: "Проекты",
      project: "Проект",
      description: "Описание проекта",
    },
    services: {
      titlePrefix: "Мои",
      titleAccent: "Услуги",
      subtitle: "Чем я могу быть полезен для бизнеса",
      categories: [
        {
          title: "Discovery и стратегия",
          items: [
            "Анализ бизнес-целей",
            "Исследование конкурентов",
            "Персоны и карта пути пользователя",
            "Технические требования",
          ],
        },
        {
          title: "UX дизайн",
          items: [
            "Информационная архитектура",
            "Пользовательские флоу и вайрфреймы",
            "Интерактивные прототипы",
            "Usability-тестирование",
          ],
        },
        {
          title: "UI дизайн",
          items: [
            "Визуальные концепции",
            "Дизайн-системы",
            "Адаптивные макеты",
            "Анимации и микро-взаимодействия",
          ],
        },
        {
          title: "Frontend разработка",
          items: [
            "HTML/CSS/JavaScript",
            "React, Vue.js",
            "Адаптивность и кросс-браузерность",
            "Оптимизация производительности",
          ],
        },
        {
          title: "Backend разработка",
          items: [
            "Кастомная CMS",
            "Архитектура баз данных",
            "Интеграция API",
            "Реализация безопасности",
          ],
        },
        {
          title: "Брендинг и идентика",
          items: [
            "Дизайн логотипа",
            "Гайдлайны бренда",
            "Маркетинговые материалы",
            "Материалы для соцсетей",
          ],
        },
        {
          title: "SEO и маркетинг",
          items: [
            "On-page SEO",
            "Настройка аналитики",
            "Оптимизация конверсии",
            "Контент-стратегия",
          ],
        },
        {
          title: "Запуск и поддержка",
          items: [
            "Деплой и хостинг",
            "Контроль качества",
            "Мониторинг после запуска",
            "Регулярное сопровождение",
          ],
        },
      ],
    },
    contact: {
      title: "Связаться",
      telegram: "Telegram",
      github: "GitHub",
      email: "Email",
    },
    blog: {
      title: "Блог",
      description: "Мысли, идеи и статьи",
      readMore: "Читать далее",
      posts: "Статьи",
      noPosts: "Пока нет статей",
    },
    cookies: {
      message: "Мы используем cookies для улучшения работы сайта и анализа трафика.",
      accept: "Принять",
      reject: "Отклонить",
    },
    footer: {
      copyright: "Все права защищены",
      madeWith: "Сделано с",
      author: "Алексеев Павел",
      location1: "Санкт-Петербург, Россия",
      location2: "Мадрид, Испания",
    },
  },
};

export const locales: Locale[] = ["en", "es", "ru"];
export const defaultLocale: Locale = "en";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}
