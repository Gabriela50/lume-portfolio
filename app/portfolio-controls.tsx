"use client";

import { useEffect, useState } from "react";

const translations: Record<string, string> = {
      'PORTAFOLIO ACADÉMICO Y PROFESIONAL · 2026': 'ACADEMIC & PROFESSIONAL PORTFOLIO · 2026',
      'INGENIERÍA DE SOFTWARE': 'SOFTWARE ENGINEERING',
      'Construir ideas.': 'Building ideas.',
      'Crear experiencias.': 'Creating experiences.',
      'Soy ': 'I am ',
      '. Me interesa la intersección entre': '. I am interested in the intersection of',
      'tecnología, diseño y personas: convertir ideas en soluciones digitales': 'technology, design and people: turning ideas into digital solutions',
      'útiles, cuidadas y fáciles de entender.': 'that are useful, thoughtful and easy to understand.',
      'Explorar proyectos ': 'Explore projects ',
      'Conocer mi perfil ↓': 'Discover my profile ↓',
      'PROYECTOS PRESENTADOS': 'PROJECTS PRESENTED',
      'EXPERIENCIA MULTILINGÜE': 'MULTILINGUAL EXPERIENCE',
      'SOFTWARE & EXPERIENCIA': 'SOFTWARE & EXPERIENCE',
      'PERFIL PROFESIONAL': 'PROFESSIONAL PROFILE',
      'PASTO, COLOMBIA ': 'PASTO, COLOMBIA ',
      'Curiosidad que impulsa.': 'Curiosity that drives.',
      'Diseño con intención.': 'Design with intention.',
      'DESCUBRIR ': 'DISCOVER ',
      'Perfil': 'Profile',
      'Habilidades': 'Skills',
      'Experiencia': 'Experience',
      'Formación': 'Education',
      'Contacto': 'Contact',
      'SOBRE MÍ': 'ABOUT ME',
      'La tecnología': 'Technology',
      'también habla de ': 'is also about ',
      'personas.': 'people.',
      'Mi formación en Ingeniería de Software me permite explorar cómo se': 'My Software Engineering education allows me to explore how digital',
      'diseñan y construyen productos digitales. Disfruto aprender nuevas': 'products are designed and built. I enjoy learning new tools,',
      'herramientas, organizar ideas y cuidar la manera en que las personas': 'organizing ideas and paying attention to how people',
      'interactúan con una solución.': 'interact with a solution.',
      'Mi experiencia en servicio al cliente complementa mi perspectiva:': 'My customer service experience complements my perspective:',
      'escuchar, comunicar con claridad y comprender necesidades también': 'listening, communicating clearly and understanding needs are also',
      'son parte de crear buenos productos.': 'part of creating good products.',
      'Aprender': 'Learn',
      'Explorar tecnologías y fortalecer conocimientos.': 'Explore technologies and strengthen knowledge.',
      'Diseñar': 'Design',
      'Dar estructura y claridad a cada experiencia.': 'Bring structure and clarity to every experience.',
      'Construir': 'Build',
      'Transformar ideas en soluciones funcionales.': 'Turn ideas into functional solutions.',
      'HABILIDADES': 'SKILLS',
      'Herramientas para': 'Tools to',
      'hacer que suceda.': 'make it happen.',
      'Conocimientos desarrollados durante mi formación y la construcción de proyectos académicos y personales.': 'Skills developed through my education and the creation of academic and personal projects.',
      'Desarrollo de software': 'Software development',
      'Herramientas y tecnologías': 'Tools & technologies',
      'Producto y experiencia': 'Product & experience',
      'Comunicación': 'Communication',
      'Diseño de software': 'Software design',
      'Diseño de interfaces y pantallas': 'Interface and screen design',
      'Organización de proyectos': 'Project organization',
      'Modelado y apoyo en bases de datos': 'Database modeling and support',
      'Análisis de requerimientos': 'Requirements analysis',
      'Resolución de problemas': 'Problem solving',
      'Inglés avanzado': 'Advanced English',
      'Atención al cliente': 'Customer service',
      'Comunicación interpersonal': 'Interpersonal communication',
      'Trabajo colaborativo': 'Collaborative work',
      'EXPERIENCIA': 'EXPERIENCE',
      'Personas primero.': 'People first.',
      'Aprendizaje en cada paso.': 'Learning at every step.',
      'Experiencias en entornos de servicio y comercio que han fortalecido mi comunicación, responsabilidad y capacidad de adaptación.': 'Experience in service and retail environments that strengthened my communication, responsibility and adaptability.',
      'Experiencia en diseño y desarrollo de software': 'Software design and development experience',
      'Experiencia laboral complementaria': 'Additional professional experience',
      'Diseño de interfaces y apoyo en bases de datos': 'Interface design and database support',
      'Dos proyectos de software para restaurantes': 'Two software projects for restaurants',
      'Participación en el diseño de pantallas, organización de componentes y apoyo en actividades relacionadas con las bases de datos de dos sistemas para restaurantes.': 'Contributed to screen design, component organization and database-related support for two restaurant software systems.',
      'Diseño de software de caja': 'Cash register software design',
      'JAC 777 · Pasto, Colombia': 'JAC 777 · Pasto, Colombia',
      'Colaboración en el diseño de una solución de software de caja, aportando al planteamiento visual y la organización de su interfaz.': 'Collaborated on the design of a cash register software solution, contributing to its visual approach and interface organization.',
      'Diseño y desarrollo web': 'Web design and development',
      'Publicmash Producciones': 'Publicmash Producciones',
      'Participación en el trabajo de la página web orientada a sonidos y eventos de la productora.': "Contributed to work on the production company's website focused on sound and events.",
      'Caja y atención al cliente': 'Cashier and customer service',
      'Atención al público y apoyo en procesos de caja dentro de un entorno comercial.': 'Customer assistance and cashier support in a retail environment.',
      'Servicio al cliente': 'Customer service',
      'Restaurantes y otros entornos laborales': 'Restaurants and other work environments',
      'Atención a clientes, comunicación directa y apoyo en las actividades cotidianas del servicio.': 'Customer assistance, direct communication and support for daily service activities.',
      'Promoción de productos': 'Product promotion',
      'Experiencia como promotora': 'Promotional experience',
      'Presentación de productos, orientación al público y acompañamiento durante la experiencia de compra.': 'Product presentations, customer guidance and support throughout the shopping experience.',
      'FORMACIÓN': 'EDUCATION',
      'FORMACIÓN Y APRENDIZAJE': 'EDUCATION & LEARNING',
      'Conocimiento': 'Knowledge',
      'en movimiento.': 'in motion.',
      'Una base académica que se complementa con cursos y aprendizaje continuo.': 'An academic foundation complemented by courses and continuous learning.',
      'FORMACIÓN ACADÉMICA': 'ACADEMIC EDUCATION',
      'Ingeniería de Software': 'Software Engineering',
      'Formación en fundamentos de programación, desarrollo y construcción de soluciones de software.': 'Education in programming fundamentals, development and the creation of software solutions.',
      'CURSOS COMPLEMENTARIOS': 'ADDITIONAL COURSES',
      'Python y HTML': 'Python and HTML',
      'Cursos completados para fortalecer fundamentos de programación y desarrollo web.': 'Completed courses to strengthen programming fundamentals and web development.',
      'IDIOMAS': 'LANGUAGES',
      'Formación en Cambridge Academy. Preparación y práctica de comunicación oral.': 'Training at Cambridge Academy. Preparation and practice in oral communication.',
      'PROYECTOS SELECCIONADOS': 'SELECTED PROJECTS',
      'IDEAS EN DESARROLLO': 'IDEAS IN DEVELOPMENT',
      'Del concepto': 'From concept',
      'a la experiencia.': 'to experience.',
      'Una selección de proyectos académicos y colaborativos. Cada uno representa un reto diferente de diseño, desarrollo y resolución de problemas.': 'A selection of academic and collaborative projects. Each represents a different challenge in design, development and problem-solving.',
      'APLICACIÓN MÓVIL · BELLEZA DIGITAL': 'MOBILE APP · DIGITAL BEAUTY',
      'Una aplicación móvil que conecta preferencias personales y tecnología para explorar recomendaciones de maquillaje. Permite trabajar con fotografías, elegir un mood y conservar looks favoritos.': 'A mobile app that connects personal preferences and technology to explore makeup recommendations. It lets users work with photos, choose a mood and save favorite looks.',
      'Cámara y selección de fotografías': 'Camera and photo selection',
      'Cuatro moods de belleza': 'Four beauty moods',
      'Looks guardados e historial': 'Saved looks and history',
      'Preferencias e interfaz ES / EN': 'Preferences and ES / EN interface',
      'Descargar APK Android': 'Download Android APK',
      'PLANIFICACIÓN DE EVENTOS · ESCRITORIO': 'EVENT PLANNING · DESKTOP',
      'Una herramienta para organizar eventos desde un mismo espacio. Reúne información del evento, invitados, presupuestos e historial, e incorpora un asistente que propone recomendaciones a partir de los datos proporcionados.': 'A tool for organizing events in one place. It brings together event details, guests, budgets and history, and includes an assistant that suggests recommendations based on the information provided.',
      'Panel de planificación': 'Planning dashboard',
      'Gestión de invitados y presupuestos': 'Guest and budget management',
      'Asistente de recomendaciones': 'Recommendation assistant',
      'Autenticación e historial': 'Authentication and history',
      'Descargar versión Mac Intel': 'Download Mac Intel version',
      'La versión de escritorio necesita el servidor API y PostgreSQL configurados localmente.': 'The desktop version requires the API server and PostgreSQL to be configured locally.',
      'WEAR OS · EXPERIENCIA PARA RELOJ': 'WEAR OS · SMARTWATCH EXPERIENCE',
      'Prototipo de aplicación para smartwatch que reúne una entrada digital de demostración, agenda y un asistente local. Diseñado para consultar información de forma sencilla desde la muñeca.': 'A smartwatch app prototype featuring a demo digital ticket, calendar and a local assistant. Designed to make information easy to access from the wrist.',
      'Entrada digital de demostración': 'Demo digital ticket',
      'Consulta de eventos del calendario': 'Calendar event lookup',
      'Asistente local por palabras clave': 'Keyword-based local assistant',
      'Opciones de idioma y tema': 'Language and theme options',
      'Descargar APK': 'Download APK',
      'VIDEOJUEGO 3D · PROYECTO COLABORATIVO': '3D VIDEO GAME · COLLABORATIVE PROJECT',
      'Videojuego de carreras de canicas en 3D para dos jugadores en una misma partida local. Un proyecto colaborativo que integra escenarios, personalización y mecánicas de carrera.': 'A 3D marble racing game for two players in the same local match. A collaborative project combining environments, customization and racing mechanics.',
      'Dos jugadores en modo local': 'Two-player local mode',
      '13 escenarios seleccionables': '13 selectable environments',
      'Personalización y perfiles': 'Customization and profiles',
      'Español, inglés y temas visuales': 'Spanish, English and visual themes',
      'Desarrollo colaborativo. No requiere conexión a internet para jugar en modo local.': 'Collaborative development. No internet connection is required for local play.',
      'Ver repositorio ': 'View repository ',
      'MI ENFOQUE': 'MY APPROACH',
      'Una buena solución': 'A good solution',
      'empieza por ': 'starts by ',
      'escuchar.': 'listening.',
      'Comprender': 'Understand',
      ' — identificar el propósito y las necesidades.': ' — identify the purpose and needs.',
      'Explorar': 'Explore',
      ' — investigar alternativas y herramientas.': ' — research alternatives and tools.',
      'Desarrollar': 'Develop',
      ' — construir, probar y ajustar.': ' — build, test and refine.',
      'Mejorar': 'Improve',
      ' — aprender del proceso y de la experiencia.': ' — learn from the process and experience.',
      '¿TIENES UNA IDEA O UNA OPORTUNIDAD?': 'HAVE AN IDEA OR AN OPPORTUNITY?',
      'Conversemos.': "Let's talk.",
      'Lo que sigue empieza aquí.': "What's next starts here.",
      'Escríbeme un correo ': 'Send me an email ',
      'Disponible para conectar': 'Available to connect',
      'Correo': 'Email',
      'Ideas con propósito. Tecnología con sentido.': 'Ideas with purpose. Technology with meaning.',
      '© 2026 Gabriela Benítez Herrera · Portafolio académico y profesional': '© 2026 Gabriela Benítez Herrera · Academic & professional portfolio',
      'GBH · 2026': 'GBH · 2026',
      'PASTO, COLOMBIA': 'PASTO, COLOMBIA',
      'MI AGENDA': 'MY SCHEDULE',
      'Próximo evento': 'Upcoming event',
      'PERFIL': 'PROFILE'
};


export default function PortfolioControls() {
  const [theme, setTheme] = useState("light");
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const savedTheme = localStorage.getItem("gbh-theme") || "light";
    const savedLanguage = localStorage.getItem("gbh-language") || "es";

    setTheme(savedTheme);
    setLanguage(savedLanguage);
    document.documentElement.dataset.theme = savedTheme;
    document.documentElement.lang = savedLanguage;

    if (savedLanguage === "en") {
      const walker = document.createTreeWalker(
        document.querySelector("main") || document.body,
        NodeFilter.SHOW_TEXT
      );
      const entries = Object.entries(translations).sort(
        ([a], [b]) => b.length - a.length
      );
      let node: Node | null;

      while ((node = walker.nextNode())) {
        const original = node.nodeValue || "";
        let translated = original;
        for (const [spanish, english] of entries) {
          translated = translated.split(spanish).join(english);
        }
        if (translated !== original) node.nodeValue = translated;
      }
    }
  }, []);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("gbh-theme", next);
    document.documentElement.dataset.theme = next;
  }

  function toggleLanguage() {
    const next = language === "es" ? "en" : "es";
    localStorage.setItem("gbh-language", next);
    window.location.reload();
  }

  return (
    <div className="portfolioControls">
      <button
        type="button"
        aria-label={language === "es" ? "Cambiar idioma" : "Switch language"}
        onClick={toggleLanguage}
      >
        {language === "es" ? "ES / EN" : "EN / ES"}
      </button>
      <button
        type="button"
        aria-label={theme === "dark" ? "Activar tema claro" : "Activar tema oscuro"}
        onClick={toggleTheme}
      >
        {theme === "dark" ? "☀" : "☾"}
      </button>
    </div>
  );
}
