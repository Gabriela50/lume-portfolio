import PortfolioControls from "./portfolio-controls";
import CharmSimulator from "./charm-simulator";

const projects = [
  {
    number: "01",
    name: "MOODÉ",
    open: "http://localhost:5175/index-react.html",
    category: "APLICACIÓN MÓVIL · BELLEZA DIGITAL",
    description: "Una aplicación móvil que conecta preferencias personales y tecnología para explorar recomendaciones de maquillaje. Permite trabajar con fotografías, elegir un mood y conservar looks favoritos.",
    image: "/projects/moode-mobile.png",
    imageAlt: "Identidad visual de la aplicación móvil MOODÉ",
    visual: "image",
    technologies: ["React Native", "Expo", "Supabase", "AsyncStorage"],
    features: ["Cámara y selección de fotografías", "Cuatro moods de belleza", "Looks guardados e historial", "Preferencias e interfaz ES / EN"],
    repo: "https://github.com/Gabriela50/moode-ai-makeup",
    download: "/downloads/MOODE-NUEVO.apk",
    downloadLabel: "Descargar APK Android",
    tone: "moode",
  },
  {
    number: "02",
    name: "MIRAGE",
    open: "http://localhost:5173",
    category: "PLANIFICACIÓN DE EVENTOS · ESCRITORIO",
    description: "Una herramienta para organizar eventos desde un mismo espacio. Reúne información del evento, invitados, presupuestos e historial, e incorpora un asistente que propone recomendaciones a partir de los datos proporcionados.",
    image: "/projects/mirage-team.png",
    imageAlt: "Imagen del proyecto MIRAGE",
    visual: "image",
    technologies: ["React", "Vite", "Express", "PostgreSQL", "Gemini"],
    features: ["Panel de planificación", "Gestión de invitados y presupuestos", "Asistente de recomendaciones", "Autenticación e historial"],
    repo: "https://github.com/Gabriela50/mirage-event-planner",
    download: "/downloads/MIRAGE-1.0.0-mac-intel.dmg",
    downloadLabel: "Descargar versión Mac Intel",
    note: "La versión de escritorio necesita el servidor API y PostgreSQL configurados localmente.",
    tone: "mirage",
  },
  {
    number: "03",
    name: "CHARM",
    category: "SIMULADOR INTERACTIVO · SMARTWATCH",
    description: "Simulador interactivo de una experiencia para smartwatch. Permite explorar una entrada digital, consultar una agenda y probar la interfaz de CHARM IA desde el computador.",
    visual: "charm",
    technologies: ["Kotlin", "Jetpack Compose", "Android"],
    features: ["Entrada digital de demostración", "Agenda con datos de ejemplo", "Asistente interactivo de demostración", "Controles de idioma y apariencia"],
    note: "Simulador interactivo ejecutado en el navegador del computador. No requiere instalar una aplicación en un reloj físico.",
    tone: "charm",
  },
  {
    number: "04",
    name: "MARBLE OVERDRIVE",
    category: "VIDEOJUEGO 3D · PROYECTO COLABORATIVO",
    description: "Videojuego de carreras de canicas en 3D para dos jugadores en una misma partida local. Un proyecto colaborativo que integra escenarios, personalización y mecánicas de carrera.",
    image: "/projects/marble-race.png",
    imageAlt: "Carrera de canicas en Marble Overdrive",
    secondaryImage: "/projects/marble-worlds.png",
    secondaryAlt: "Selección de escenarios de Marble Overdrive",
    visual: "image",
    technologies: ["Godot 4.4", "GDScript", "Diseño de interfaz", "Videojuegos 3D"],
    features: ["Dos jugadores en modo local", "13 escenarios seleccionables", "Personalización y perfiles", "Español, inglés y temas visuales"],
    repo: "https://github.com/danilolarap/MarbleOverdrive",
    tone: "marble",
    note: "Desarrollo colaborativo. No requiere conexión a internet para jugar en modo local.",
  },
];

const skills = [
  { title: "Desarrollo de soluciones digitales", items: ["Construcción de aplicaciones web y móviles", "Integración de servicios y APIs", "Desarrollo de interfaces funcionales", "Implementación de lógica de aplicación"] },
  { title: "Datos y herramientas de desarrollo", items: ["Gestión y persistencia de datos", "Bases de datos relacionales", "Control de versiones con Git y GitHub", "Integración de servicios digitales"] },
  { title: "Análisis y experiencia de usuario", items: ["Análisis de necesidades y requerimientos", "Diseño de interfaces y pantallas", "Organización de componentes y proyectos", "Pruebas, ajustes y resolución de problemas"] },
  { title: "Comunicación", items: ["Inglés avanzado", "Atención al cliente", "Comunicación interpersonal", "Trabajo colaborativo"] },
];

const technicalExperience = [
  {
    role: "Diseño de interfaces y apoyo en bases de datos",
    place: "Dos proyectos de software para restaurantes",
    description: "Participación en el diseño de pantallas, organización de componentes y apoyo en actividades relacionadas con las bases de datos de dos sistemas para restaurantes."
  },
  {
    role: "Diseño de software de caja",
    place: "JAC 77 · Pasto, Colombia",
    description: "Participación en un proyecto de software junto a Paula y Juan Pablo, ingeniero de software. Aporte en diseño y organización de la solución, trabajando de manera colaborativa."
  },
  {
    role: "Diseño y desarrollo web",
    place: "Publicmash Producciones",
    description: "Armando Eraso me vinculó para apoyar el diseño de la página web y colaborar con código junto a otros dos integrantes externos a la universidad."
  }
];

const experience = [
  {
    role: "Caja y atención al cliente",
    place: "ELA",
    description: "Atención al público y apoyo en procesos de caja dentro de un entorno comercial.",
  },
  {
    role: "Servicio al cliente",
    place: "Restaurantes y otros entornos laborales",
    description: "Atención a clientes, comunicación directa y apoyo en las actividades cotidianas del servicio.",
  },
  {
    role: "Promoción de productos",
    place: "Experiencia como promotora",
    description: "Presentación de productos, orientación al público y acompañamiento durante la experiencia de compra.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="navigation">
        <a className="brand" href="#inicio" aria-label="GBH, inicio">GBH<span>.</span></a>
        <nav aria-label="Navegación principal">
          <a href="#perfil">Perfil</a>
          <a href="#habilidades">Habilidades</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#formacion">Formación</a>
          <a href="#referencias">Referencias</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto" className="navContact">Contacto <span>↗</span></a>
          <PortfolioControls />
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="heroTexture" aria-hidden="true" />
        <div className="heroCopy">
          <p className="eyebrow"><span className="statusDot" /> PORTAFOLIO ACADÉMICO Y PROFESIONAL · 2026</p>
          <p className="heroLocation">PASTO, COLOMBIA <span>—</span> INGENIERÍA DE SOFTWARE</p>
          <h1>Construir ideas.<br /><em>Crear experiencias.</em></h1>
          <p className="heroIntro">
            Soy <strong>Gabriela Benítez Herrera</strong>. Me interesa la intersección entre
            tecnología, diseño y personas: convertir ideas en soluciones digitales
            útiles, cuidadas y fáciles de entender.
          </p>
          <div className="heroActions">
            <a className="buttonPrimary" href="#proyectos">Explorar proyectos <span>↗</span></a>
            <a className="textLink" href="#perfil">Conocer mi perfil ↓</a>
          </div>
          <div className="heroFacts">
            <div><strong>04</strong><span>PROYECTOS PRESENTADOS</span></div>
            <div><strong>ES / EN</strong><span>EXPERIENCIA MULTILINGÜE</span></div>
            <div><strong>GBH</strong><span>SOFTWARE & EXPERIENCIA</span></div>
          </div>
        </div>
        <div className="portraitColumn">
          <div className="portraitHalo" />
          <div className="portraitFrame">
            <div className="portraitTopline"><span aria-label="Con cariño">♡</span><span>PERFIL PROFESIONAL</span></div>
            <img src="/avatar-gabriela.png" alt="Retrato ilustrado de Gabriela Benítez Herrera" className="portrait" />
            <div className="portraitCaption"><span>GABRIELA BENÍTEZ HERRERA</span><span>GBH · 2026</span></div>
          </div>
          <div className="portraitNote">Curiosidad que impulsa.<br />Diseño con intención.</div>
          <span className="portraitIndex">01 / 04</span>
        </div>
        <span className="heroDecoration" aria-hidden="true">✳</span>
        <a className="scrollCue" href="#perfil">DESCUBRIR <span>↓</span></a>
      </section>

      <section className="section profileSection" id="perfil">
        <div className="sectionLabel"><span>01</span> / PERFIL</div>
        <div className="profileGrid">
          <div>
            <p className="eyebrow">SOBRE MÍ</p>
            <h2>La tecnología<br />también habla de <em>personas.</em></h2>
          </div>
          <div className="profileText">
            <p>
              Mi formación en Ingeniería de Software me permite explorar cómo se
              diseñan y construyen productos digitales. Disfruto aprender nuevas
              herramientas, organizar ideas y cuidar la manera en que las personas
              interactúan con una solución.
            </p>
            <p>
              Mi experiencia en servicio al cliente complementa mi perspectiva:
              escuchar, comunicar con claridad y comprender necesidades también
              son parte de crear buenos productos.
            </p>
            <div className="profileSignature">Gabriela Benítez Herrera <span>·</span> GBH</div>
          </div>
        </div>
        <div className="principles">
          <article><span>01</span><h3>Aprender</h3><p>Explorar tecnologías y fortalecer conocimientos.</p></article>
          <article><span>02</span><h3>Diseñar</h3><p>Dar estructura y claridad a cada experiencia.</p></article>
          <article><span>03</span><h3>Construir</h3><p>Transformar ideas en soluciones funcionales.</p></article>
        </div>
      </section>

      <section className="skillsSection section" id="habilidades">
        <div className="sectionLabel"><span>02</span> / HABILIDADES</div>
        <div className="sectionHeading">
          <h2>Herramientas para<br /><em>hacer que suceda.</em></h2>
          <p>Conocimientos desarrollados durante mi formación y la construcción de proyectos académicos y personales.</p>
        </div>
        <div className="skillsGrid">
          {skills.map((group, index) => (
            <article className="skillCard" key={group.title}>
              <span className="skillNumber">0{index + 1}</span>
              <h3>{group.title}</h3>
              <div className="skillPills">{group.items.map(item => <span key={item}>{item}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="experienceSection section" id="experiencia">
        <div className="sectionLabel"><span>03</span> / EXPERIENCIA</div>
        <div className="sectionHeading">
          <h2>Personas primero.<br /><em>Aprendizaje en cada paso.</em></h2>
          <p>Experiencias en entornos de servicio y comercio que han fortalecido mi comunicación, responsabilidad y capacidad de adaptación.</p>
        </div>
        <h3 className="experienceGroupTitle">Experiencia en diseño y desarrollo de software</h3>
        <div className="experienceList technicalExperience">
          {technicalExperience.map((item, index) => (
            <article className="experienceItem" key={item.place}>
              <span className="experienceNumber">0{index + 1}</span>
              <div><h3>{item.role}</h3><p>{item.place}</p></div>
              <p className="experienceDetail">{item.description}</p>
            </article>
          ))}
        </div>
        <h3 className="experienceGroupTitle complementaryTitle">Experiencia laboral complementaria</h3>
        <div className="experienceList">
          {experience.map((item, index) => (
            <article className="experienceItem" key={item.role}>
              <span className="experienceNumber">0{index + 1}</span>
              <div><h3>{item.role}</h3><p>{item.place}</p></div>
              <p className="experienceDetail">{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section referencesSection" id="referencias">
        <div className="sectionLabel"><span>04</span> / REFERENCIAS PROFESIONALES</div>
        <div className="sectionHeading">
          <h2>Colaboraciones que<br /><em>dejan huella.</em></h2>
          <p>Personas que conocen mi trabajo y pueden compartir referencias sobre nuestra colaboración.</p>
        </div>
        <div className="referencesGrid">
          <article><span>JAC 77</span><h3>Paula</h3><p>Colaboradora que me vinculó al proyecto de software de caja.</p><small>Referencia profesional disponible.</small></article>
          <article><span>COLABORACIÓN TÉCNICA</span><h3>Juan Pablo</h3><p>Ingeniero de software con quien trabajé conjuntamente en JAC 77.</p><small>Referencia profesional disponible.</small></article>
          <article><span>PUBLICMASH PRODUCCIONES</span><h3>Armando Eraso</h3><p>Me vinculó para apoyar el diseño y el código del proyecto web.</p><small>Referencia profesional disponible.</small></article>
        </div>
      </section>

      <section className="section educationSection" id="formacion">
        <div className="sectionLabel"><span>05</span> / FORMACIÓN</div>
        <div className="educationGrid">
          <div>
            <p className="eyebrow">FORMACIÓN Y APRENDIZAJE</p>
            <h2>Conocimiento<br /><em>en movimiento.</em></h2>
            <p className="educationIntro">Una base académica que se complementa con cursos y aprendizaje continuo.</p>
          </div>
          <div className="educationTimeline">
            <article><span>FORMACIÓN ACADÉMICA</span><h3>Ingeniería de Software</h3><p>Universidad Cooperativa de Colombia.</p></article>
            <article><span>FORMACIÓN COMPLEMENTARIA</span><h3>Programación y desarrollo web</h3><p>Cursos realizados en Python, HTML y bases de datos. Se presentan como formación complementaria, sin atribuir certificaciones.</p></article>
            <article><span>IDIOMAS</span><h3>Inglés avanzado</h3><p>Formación en Cambridge Academy. Preparación y práctica de comunicación oral.</p></article>
          </div>
        </div>
      </section>

      <section className="projectsSection section" id="proyectos">
        <div className="sectionLabel"><span>06</span> / PROYECTOS SELECCIONADOS</div>
        <div className="sectionHeading projectsHeading">
          <div><p className="eyebrow">IDEAS EN DESARROLLO</p><h2>Del concepto<br /><em>a la experiencia.</em></h2></div>
          <p>Una selección de proyectos académicos y colaborativos. Cada uno representa un reto diferente de diseño, desarrollo y resolución de problemas.</p>
        </div>
        <div className="projectList">
          {projects.map((project, index) => (
            <article className={`projectFeature ${project.tone}`} key={project.name}>
              <div className="projectVisual">
                {project.visual === "image" ? (
                  <>
                    <img src={project.image} alt={project.imageAlt} />
                    {project.secondaryImage && <img className="secondaryVisual" src={project.secondaryImage} alt={project.secondaryAlt} />}
                    <span className="visualNumber">{project.number} / GBH PROJECTS</span>
                  </>
                ) : (
                  <CharmSimulator />
                )}
              </div>
              <div className="projectInfo">
                <div className="projectTopline"><span>{project.number} — {project.category}</span><span>2026</span></div>
                <h3>{project.name}<span>.</span></h3>
                <p className="projectDescription">{project.description}</p>
                <div className="featureList">
                  {project.features.map(feature => <span key={feature}><i>↗</i>{feature}</span>)}
                </div>
                <div className="projectTags">{project.technologies.map(tag => <span key={tag}>{tag}</span>)}</div>
                {project.note && <p className="projectNote">{project.note}</p>}
                <div className="projectActions">
                  {project.open && <a href={project.open} target="_blank" rel="noreferrer">Abrir aplicación <span>↗</span></a>}
                  {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Ver repositorio <span>↗</span></a>}
                  {project.download && <a href={project.download} download>{project.downloadLabel} <span>↓</span></a>}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="approachSection section">
        <div className="sectionLabel"><span>07</span> / MI ENFOQUE</div>
        <div className="approachGrid">
          <h2>Una buena solución<br />empieza por <em>escuchar.</em></h2>
          <div className="approachSteps">
            <p><span>01</span><strong>Comprender</strong> — identificar el propósito y las necesidades.</p>
            <p><span>02</span><strong>Explorar</strong> — investigar alternativas y herramientas.</p>
            <p><span>03</span><strong>Desarrollar</strong> — construir, probar y ajustar.</p>
            <p><span>04</span><strong>Mejorar</strong> — aprender del proceso y de la experiencia.</p>
          </div>
        </div>
      </section>

      <section className="closingSection" id="contacto">
        <p className="eyebrow">¿TIENES UNA IDEA O UNA OPORTUNIDAD?</p>
        <h2>Conversemos.<br /><em>Lo que sigue empieza aquí.</em></h2>
        <a className="buttonLight" href="mailto:Gabrielabenitez658@gmail.com">Escríbeme un correo <span>↗</span></a>
        <p className="contactLocation">Pasto, Colombia · Disponible para conectar</p>
      </section>

      <footer className="footer">
        <a className="brand footerBrand" href="#inicio">GBH<span>.</span></a>
        <p>Ideas con propósito. Tecnología con sentido.</p>
        <div className="footerLinks">
          <a href="mailto:Gabrielabenitez658@gmail.com">Correo</a>
          <a href="https://github.com/Gabriela50" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="https://www.linkedin.com/in/gabriela-benitez-737ab6396/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <small>© 2026 Gabriela Benítez Herrera · Portafolio académico y profesional</small>
      </footer>
    </main>
  );
}
