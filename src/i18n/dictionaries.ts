export const dictionaries = {
  en: {
    hero: {
      greeting: "Hi Everyone! I'm",
      name: "Pavel Alekseev",
      scrollHint: "Scroll down →",
    },
    about: {
      title: "About me",
      description:
        "Here will be information about you. Tell about your skills, experience and hobbies.",
    },
    projects: {
      title: "Projects",
      project: "Project",
      description: "Project description",
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
  },
  es: {
    hero: {
      greeting: "¡Hola a todos! Soy",
      name: "Pavel Alekseev",
      scrollHint: "Desplázate hacia abajo →",
    },
    about: {
      title: "Sobre mí",
      description:
        "Aquí estará la información sobre ti. Cuenta sobre tus habilidades, experiencia y pasatiempos.",
    },
    projects: {
      title: "Proyectos",
      project: "Proyecto",
      description: "Descripción del proyecto",
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
  },
  ru: {
    hero: {
      greeting: "Всем привет! Я",
      name: "Павел Алексеев",
      scrollHint: "Скролль вниз →",
    },
    about: {
      title: "Обо мне",
      description:
        "Здесь будет информация о тебе. Расскажи о своих навыках, опыте и увлечениях.",
    },
    projects: {
      title: "Проекты",
      project: "Проект",
      description: "Описание проекта",
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
  },
} as const;

export type Locale = keyof typeof dictionaries;
export type Dictionary = typeof dictionaries.en;

export const locales: Locale[] = ["en", "es", "ru"];
export const defaultLocale: Locale = "en";

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] || dictionaries.en;
}
