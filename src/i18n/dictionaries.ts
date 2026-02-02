export const dictionaries = {
  en: {
    hero: {
      greeting: "Hi Everyone! I'm",
      name: "Pavel Alekseev",
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
      name: "Pavel Alekseev",
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
      name: "Павел Алексеев",
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
    footer: {
      copyright: "Все права защищены",
      madeWith: "Сделано с",
      author: "Алексеев Павел",
      location1: "Санкт-Петербург, Россия",
      location2: "Мадрид, Испания",
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
