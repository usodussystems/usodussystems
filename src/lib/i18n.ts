export type Language = 'en' | 'es' | 'pt';

export interface Translations {
  nav: {
    home: string;
    about: string;
    services: string;
    solutions: string;
    news: string;
    contact: string;
    clientArea: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
  };
  about: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    subtitle: string;
    platformDevelopment: {
      title: string;
      description: string;
    };
    digitalTransformation: {
      title: string;
      description: string;
    };
    consulting: {
      title: string;
      description: string;
    };
    userExperience: {
      title: string;
      description: string;
    };
  };
  solutions: {
    title: string;
    subtitle: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  footer: {
    tagline: string;
    company: string;
    services: string;
    legal: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  news: {
    title: string;
    latest: string;
    readMore: string;
    backToHome: string;
  };
  clientArea: {
    title: string;
    welcome: string;
    username: string;
    password: string;
    login: string;
    forgotPassword: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      solutions: 'Solutions',
      news: 'News',
      contact: 'Contact',
      clientArea: 'Client Area',
    },
    hero: {
      title: 'Digital Transformation Powered by People',
      subtitle: 'We create platforms that empower your business with super privilege access to innovation.',
      cta: 'Get Started',
      ctaSecondary: 'Learn More',
    },
    about: {
      title: 'About Usodus',
      description: 'Usodus Systems is a digital transformation company focused on creating platforms. Our name comes from "sudo su" - representing super privilege access. We believe in putting users first, where ">" represents the terminal, "." represents people, and "|" represents "so what?" - a pipe process that drives meaningful change.',
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive digital transformation solutions',
      platformDevelopment: {
        title: 'Platform Development',
        description: 'Custom platform solutions designed to scale with your business needs.',
      },
      digitalTransformation: {
        title: 'Digital Transformation',
        description: 'End-to-end transformation strategies that modernize your operations.',
      },
      consulting: {
        title: 'Strategic Consulting',
        description: 'Expert guidance to navigate your digital transformation journey.',
      },
      userExperience: {
        title: 'User-Centric Design',
        description: 'Designing experiences that put your users at the center.',
      },
    },
    solutions: {
      title: 'Solutions',
      subtitle: 'Tailored solutions for modern challenges',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Let\'s discuss how we can transform your digital presence',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
    },
    footer: {
      tagline: 'Empowering digital transformation through user-focused platforms',
      company: 'Company',
      services: 'Services',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      rights: 'All rights reserved.',
    },
    news: {
      title: 'Latest News',
      latest: 'Latest Updates',
      readMore: 'Read More',
      backToHome: 'Back to Home',
    },
    clientArea: {
      title: 'Client Area',
      welcome: 'Welcome Back',
      username: 'Username',
      password: 'Password',
      login: 'Login',
      forgotPassword: 'Forgot Password?',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      services: 'Servicios',
      solutions: 'Soluciones',
      news: 'Noticias',
      contact: 'Contacto',
      clientArea: 'Área de Clientes',
    },
    hero: {
      title: 'Transformación Digital Impulsada por Personas',
      subtitle: 'Creamos plataformas que potencian tu negocio con acceso privilegiado a la innovación.',
      cta: 'Comenzar',
      ctaSecondary: 'Saber Más',
    },
    about: {
      title: 'Sobre Usodus',
      description: 'Usodus Systems es una empresa de transformación digital enfocada en crear plataformas. Nuestro nombre proviene de "sudo su" - representando acceso con súper privilegios. Creemos en poner a los usuarios primero, donde ">" representa la terminal, "." representa las personas, y "|" representa "¿y qué?" - un proceso pipe que impulsa el cambio significativo.',
    },
    services: {
      title: 'Nuestros Servicios',
      subtitle: 'Soluciones integrales de transformación digital',
      platformDevelopment: {
        title: 'Desarrollo de Plataformas',
        description: 'Soluciones de plataformas personalizadas diseñadas para escalar con tu negocio.',
      },
      digitalTransformation: {
        title: 'Transformación Digital',
        description: 'Estrategias de transformación completas que modernizan tus operaciones.',
      },
      consulting: {
        title: 'Consultoría Estratégica',
        description: 'Orientación experta para navegar tu viaje de transformación digital.',
      },
      userExperience: {
        title: 'Diseño Centrado en el Usuario',
        description: 'Diseñando experiencias que ponen a tus usuarios en el centro.',
      },
    },
    solutions: {
      title: 'Soluciones',
      subtitle: 'Soluciones adaptadas para desafíos modernos',
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Hablemos sobre cómo transformar tu presencia digital',
      name: 'Nombre',
      email: 'Correo Electrónico',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
    },
    footer: {
      tagline: 'Potenciando la transformación digital a través de plataformas centradas en el usuario',
      company: 'Empresa',
      services: 'Servicios',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      rights: 'Todos los derechos reservados.',
    },
    news: {
      title: 'Últimas Noticias',
      latest: 'Actualizaciones Recientes',
      readMore: 'Leer Más',
      backToHome: 'Volver al Inicio',
    },
    clientArea: {
      title: 'Área de Clientes',
      welcome: 'Bienvenido de Nuevo',
      username: 'Usuario',
      password: 'Contraseña',
      login: 'Iniciar Sesión',
      forgotPassword: '¿Olvidaste tu Contraseña?',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      services: 'Serviços',
      solutions: 'Soluções',
      news: 'Notícias',
      contact: 'Contato',
      clientArea: 'Área do Cliente',
    },
    hero: {
      title: 'Transformação Digital Impulsionada por Pessoas',
      subtitle: 'Criamos plataformas que potencializam seu negócio com acesso privilegiado à inovação.',
      cta: 'Começar',
      ctaSecondary: 'Saiba Mais',
    },
    about: {
      title: 'Sobre a Usodus',
      description: 'Usodus Systems é uma empresa de transformação digital focada em criar plataformas. Nosso nome vem de "sudo su" - representando acesso com super privilégios. Acreditamos em colocar os usuários em primeiro lugar, onde ">" representa o terminal, "." representa as pessoas, e "|" representa "e daí?" - um processo pipe que impulsiona mudanças significativas.',
    },
    services: {
      title: 'Nossos Serviços',
      subtitle: 'Soluções abrangentes de transformação digital',
      platformDevelopment: {
        title: 'Desenvolvimento de Plataformas',
        description: 'Soluções de plataformas personalizadas projetadas para escalar com seu negócio.',
      },
      digitalTransformation: {
        title: 'Transformação Digital',
        description: 'Estratégias de transformação completas que modernizam suas operações.',
      },
      consulting: {
        title: 'Consultoria Estratégica',
        description: 'Orientação especializada para navegar sua jornada de transformação digital.',
      },
      userExperience: {
        title: 'Design Centrado no Usuário',
        description: 'Projetando experiências que colocam seus usuários no centro.',
      },
    },
    solutions: {
      title: 'Soluções',
      subtitle: 'Soluções personalizadas para desafios modernos',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Vamos discutir como transformar sua presença digital',
      name: 'Nome',
      email: 'E-mail',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
    },
    footer: {
      tagline: 'Capacitando a transformação digital através de plataformas focadas no usuário',
      company: 'Empresa',
      services: 'Serviços',
      legal: 'Legal',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      rights: 'Todos os direitos reservados.',
    },
    news: {
      title: 'Últimas Notícias',
      latest: 'Atualizações Recentes',
      readMore: 'Leia Mais',
      backToHome: 'Voltar ao Início',
    },
    clientArea: {
      title: 'Área do Cliente',
      welcome: 'Bem-vindo de Volta',
      username: 'Usuário',
      password: 'Senha',
      login: 'Entrar',
      forgotPassword: 'Esqueceu a Senha?',
    },
  },
};

export const getTranslations = (lang: Language): Translations => {
  return translations[lang] || translations.en;
};
