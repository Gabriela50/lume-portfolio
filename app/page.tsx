const projects = [
  {
    name: "MOODÉ",
    description: "Proyecto de maquillaje y looks con funciones de cámara y guardado."
  },
  {
    name: "MIRAGE",
    description: "Proyecto de organización y planificación de eventos."
  },
  {
    name: "CHARM",
    description: "Proyecto Android orientado a relojes inteligentes."
  }
];

export default function HomePage() {
  return (
    <main className="portfolio">
      <nav className="navigation" aria-label="Navegación principal">
        <a className="brand" href="#inicio">GBH</a>
        <div className="navigationLinks">
          <a href="#perfil">Perfil</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <section className="hero" id="inicio">
        <p className="eyebrow">PORTAFOLIO ACADÉMICO Y PROFESIONAL</p>
        <h1>Gabriela Benítez Herrera</h1>
        <p className="subtitle">Ingeniería de Software · Pasto, Colombia</p>
        <a className="primaryLink" href="#proyectos">Conocer mis proyectos ↓</a>
      </section>

      <section className="contentSection" id="perfil">
        <p className="eyebrow">SOBRE MÍ</p>
        <h2>Aprendizaje, tecnología y propósito.</h2>
        <p>
          Este portafolio reúne mi formación, experiencia y proyectos de
          software. Cada proyecto representa una oportunidad para aprender,
          resolver problemas y desarrollar soluciones útiles.
        </p>
      </section>

      <section className="contentSection" id="proyectos">
        <p className="eyebrow">TRABAJO DESTACADO</p>
        <h2>Proyectos de software</h2>
        <div className="projectGrid">
          {projects.map((project) => (
            <article className="projectCard" key={project.name}>
              <p className="projectLabel">PROYECTO</p>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer" id="contacto">
        <h2>Conectemos</h2>
        <p>¿Quieres conocer más sobre mi trabajo?</p>
        <a href="mailto:Gabrielabenitez658@gmail.com">
          Gabrielabenitez658@gmail.com
        </a>
        <div className="footerLinks">
          <a href="https://github.com/Gabriela50" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/gabriela-benitez-737ab6396/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </footer>
    </main>
  );
}
