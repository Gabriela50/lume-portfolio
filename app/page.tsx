const projects = [
  {
    number: "01",
    name: "MOODÉ",
    type: "ANDROID · APLICACIÓN MÓVIL",
    description:
      "Una experiencia de belleza que integra cámara, fotografías, selección de moods y guardado de looks.",
    technologies: ["JavaScript", "Cámara", "Experiencia de usuario"],
    url: "https" + "://" + "github.com/Gabriela50/moode-ai-makeup",
    download: "/downloads/MOODE-NUEVO.apk",
  },
  {
    number: "02",
    name: "MIRAGE",
    type: "PLANIFICACIÓN DE EVENTOS · MAC INTEL",
    description:
      "Planificación de eventos con IA, gestión de invitados y presupuestos. La versión de escritorio requiere el servidor API y PostgreSQL locales.",
    technologies: ["React", "Vite", "Gemini IA", "PostgreSQL"],
    url: "https" + "://" + "github.com/Gabriela50/mirage-event-planner",
    download: "/downloads/MIRAGE-1.0.0-mac-intel.dmg",
  },
  {
    number: "03",
    name: "CHARM",
    type: "ANDROID · SMARTWATCH",
    description:
      "Prototipo para reloj inteligente con entrada digital de demostración, agenda y opciones de idioma y tema.",
    technologies: ["Kotlin", "Jetpack Compose", "Android"],
    url: "",
    download: "/downloads/CHARM.apk",
  },
];

const experience = [
  {
    role: "Caja y atención al cliente",
    place: "ELA",
    detail:
      "Experiencia en caja y atención al cliente en un entorno comercial.",
  },
  {
    role: "Atención al cliente",
    place: "Restaurantes y otros entornos laborales",
    detail:
      "Atención a clientes y apoyo en las actividades propias de cada puesto.",
  },
  {
    role: "Promoción de productos",
    place: "Experiencia como promotora",
    detail:
      "Atención al público y presentación de productos.",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="navigation">
        <a className="brand" href="#inicio" aria-label="Inicio GBH">
          GBH<span>.</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#perfil">Perfil</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto" className="navContact">Contacto ↗</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="heroCopy">
          <p className="eyebrow"><span className="statusDot" /> PORTAFOLIO PERSONAL · 2026</p>
          <h1>Ideas con propósito.<br /><em>Tecnología con sentido.</em></h1>
          <p className="heroIntro">
            Soy Gabriela Benítez Herrera. Me interesa crear experiencias
            digitales que conecten diseño, tecnología y necesidades reales.
          </p>
          <div className="heroActions">
            <a className="buttonPrimary" href="#proyectos">Explorar proyectos <span>↗</span></a>
            <a className="textLink" href="#perfil">Conocer mi perfil ↓</a>
          </div>
          <div className="heroMeta">
            <span>INGENIERÍA DE SOFTWARE</span>
            <span>PASTO, COLOMBIA</span>
          </div>
        </div>

        <div className="portraitColumn">
          <div className="portraitFrame">
            <div className="portraitTopline"><span>G.</span><span>CREATIVIDAD & CÓDIGO</span></div>
            <img
              src="/avatar-gabriela.png"
              alt="Retrato ilustrado de Gabriela Benítez Herrera"
              className="portrait"
            />
            <div className="portraitCaption">
              <span>GABRIELA BENÍTEZ HERRERA</span>
              <span>SOFTWARE ENGINEERING</span>
            </div>
          </div>
          <div className="portraitNote">Aprender · Diseñar · Construir</div>
        </div>
        <span className="heroDecoration" aria-hidden="true">✳</span>
      </section>

      <section className="section profileSection" id="perfil">
        <div className="sectionLabel"><span>01</span> / UN POCO SOBRE MÍ</div>
        <div className="profileGrid">
          <h2>Una mente curiosa,<br /><em>una visión digital.</em></h2>
          <div className="profileText">
            <p>
              Mi camino en la Ingeniería de Software combina aprendizaje
              técnico, interés por el diseño y atención a las personas.
              Este espacio reúne mis proyectos, mi formación y mi experiencia.
            </p>
            <div className="skillList">
              <span>Desarrollo web</span><span>Python</span>
              <span>HTML</span><span>Inglés avanzado</span>
              <span>Atención al cliente</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section experienceSection" id="experiencia">
        <div className="sectionLabel"><span>02</span> / EXPERIENCIA</div>
        <div className="sectionHeading">
          <h2>Personas primero.<br /><em>Aprendizaje en cada paso.</em></h2>
          <p>Experiencia en atención, servicio y comunicación con clientes.</p>
        </div>
        <div className="experienceList">
          {experience.map((item, index) => (
            <article className="experienceItem" key={item.role}>
              <span className="experienceNumber">0{index + 1}</span>
              <div><h3>{item.role}</h3><p>{item.place}</p></div>
              <p className="experienceDetail">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section educationSection" id="formacion">
        <div className="sectionLabel"><span>03</span> / FORMACIÓN</div>
        <div className="educationGrid">
          <h2>Construyendo<br /><em>conocimiento.</em></h2>
          <div className="educationCards">
            <article><span>FORMACIÓN ACADÉMICA</span><h3>Ingeniería de Software</h3><p>Formación en desarrollo y construcción de soluciones digitales.</p></article>
            <article><span>APRENDIZAJE COMPLEMENTARIO</span><h3>Python · HTML · Inglés</h3><p>Cursos de Python y HTML, con formación en inglés en Cambridge Academy.</p></article>
          </div>
        </div>
      </section>

      <section className="section projectsSection" id="proyectos">
        <div className="sectionLabel"><span>04</span> / PROYECTOS DESTACADOS</div>
        <div className="sectionHeading projectsHeading">
          <h2>Ideas que toman<br /><em>forma digital.</em></h2>
          <p>Proyectos académicos y personales en evolución. Cada uno representa un reto distinto.</p>
        </div>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <div className="projectCardTop"><span>{project.number}</span><span>↗</span></div>
              <p className="projectType">{project.type}</p>
              <h3>{project.name}<span>.</span></h3>
              <p className="projectDescription">{project.description}</p>
              <div className="projectTags">
                {project.technologies.map((technology) => <span key={technology}>{technology}</span>)}
              </div>
              <a className="projectLink" href={project.download} download>
                Descargar aplicación <span>↓</span>
              </a>
              {project.url && (
                <a className="projectLink" href={project.url} target="_blank" rel="noreferrer">
                  Ver repositorio <span>↗</span>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="closingSection">
        <p className="eyebrow">CADA CONEXIÓN ES UNA OPORTUNIDAD</p>
        <h2>Hagamos algo<br /><em>que importe.</em></h2>
        <a className="buttonLight" href="mailto:Gabrielabenitez658@gmail.com">Hablemos por correo ↗</a>
      </section>

      <footer className="footer" id="contacto">
        <a className="brand footerBrand" href="#inicio">GBH<span>.</span></a>
        <p>Ideas con propósito.</p>
        <div className="footerLinks">
          <a href="mailto:Gabrielabenitez658@gmail.com">Correo</a>
          <a href={"https" + "://" + "github.com/Gabriela50"} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={"https" + "://" + "www.linkedin.com/in/gabriela-benitez-737ab6396/"} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <small>© 2026 Gabriela Benítez Herrera · Portafolio personal</small>
      </footer>
    </main>
  );
}
