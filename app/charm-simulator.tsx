"use client";

import { useState } from "react";

const copy = {
  es: {
    title: "CHARM · SIMULADOR",
    subtitle: "Vista interactiva de la experiencia smartwatch",
    home: "Inicio", ticket: "Mi entrada", agenda: "Mi agenda", ai: "CHARM IA",
    welcome: "Tu experiencia, siempre contigo.",
    intro: "Un espacio para consultar tus eventos y tener tu información a mano.",
    next: "PRÓXIMO EVENTO", event: "Encuentro creativo", date: "Viernes · 6:30 p. m.",
    ticketTitle: "Tu entrada digital", ticketText: "Presenta este código en el acceso.",
    valid: "ENTRADA DE DEMOSTRACIÓN", calendar: "Agenda de eventos",
    today: "PRÓXIMAS ACTIVIDADES", one: "Reunión de equipo", two: "Festival de música",
    assistant: "¿En qué puedo ayudarte?", question: "¿Qué evento tengo próximamente?",
    answer: "Tu próximo evento es Encuentro creativo, el viernes a las 6:30 p. m. Esta información es de demostración.",
    ask: "Consultar", placeholder: "Escribe una pregunta...",
    demo: "SIMULACIÓN · DATOS DE EJEMPLO", language: "Idioma", theme: "Apariencia",
    lavender: "Lavanda", mint: "Menta", rose: "Rosa", online: "INTERFAZ DE DEMOSTRACIÓN"
  },
  en: {
    title: "CHARM · SIMULATOR",
    subtitle: "Interactive view of the smartwatch experience",
    home: "Home", ticket: "My ticket", agenda: "My agenda", ai: "CHARM AI",
    welcome: "Your experience, always with you.",
    intro: "A space to check your events and keep your information close.",
    next: "UPCOMING EVENT", event: "Creative gathering", date: "Friday · 6:30 PM",
    ticketTitle: "Your digital ticket", ticketText: "Show this code at the entrance.",
    valid: "DEMO TICKET", calendar: "Event agenda",
    today: "UPCOMING ACTIVITIES", one: "Team meeting", two: "Music festival",
    assistant: "How can I help you?", question: "What is my next event?",
    answer: "Your next event is Creative gathering, Friday at 6:30 PM. This is demonstration information.",
    ask: "Ask", placeholder: "Type a question...",
    demo: "SIMULATION · SAMPLE DATA", language: "Language", theme: "Appearance",
    lavender: "Lavender", mint: "Mint", rose: "Rose", online: "DEMO INTERFACE"
  }
};

export default function CharmSimulator() {
  const [screen, setScreen] = useState("home");
  const [language, setLanguage] = useState<"es" | "en">("es");
  const [theme, setTheme] = useState("lavender");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const t = copy[language];

  function ask() {
    if (!question.trim()) return;
    setAnswer(t.answer);
    setQuestion("");
  }

  return (
    <section className={`charmSimulator theme-${theme}`} aria-label="Simulador interactivo CHARM">
      <header className="charmSimHeader">
        <div><span className="charmSimEyebrow">{t.title}</span><p>{t.subtitle}</p></div>
        <span className="charmDemoBadge">● {t.online}</span>
      </header>
      <div className="charmSimWorkspace">
        <aside className="charmSimSidebar">
          <div className="charmSimBrand">✳ <span>CHARM</span></div>
          <span className="charmSimMenuLabel">EXPERIENCIA</span>
          {[
            ["home", "⌂", t.home], ["ticket", "▣", t.ticket],
            ["agenda", "▦", t.agenda], ["ai", "✧", t.ai]
          ].map(([id, icon, label]) => (
            <button key={id} className={screen === id ? "active" : ""} onClick={() => setScreen(id)}>
              <span>{icon}</span>{label}
            </button>
          ))}
          <div className="charmSimSettings">
            <label>{t.language}</label>
            <div className="charmSimChoices">
              <button className={language === "es" ? "selected" : ""} onClick={() => setLanguage("es")}>ES</button>
              <button className={language === "en" ? "selected" : ""} onClick={() => setLanguage("en")}>EN</button>
            </div>
            <label>{t.theme}</label>
            <div className="charmSimThemes">
              {["lavender", "mint", "rose"].map((value) => (
                <button key={value} aria-label={value} title={value} className={`themeDot ${value} ${theme === value ? "chosen" : ""}`} onClick={() => setTheme(value)} />
              ))}
            </div>
          </div>
        </aside>
        <div className="charmSimMain">
          <div className="charmSimTop"><span>CHARM / {screen.toUpperCase()}</span><span>◷ 09:41</span></div>
          {screen === "home" && <div className="charmSimContent">
            <span className="charmSimOrb">✳</span><p className="charmSimKicker">CHARM · SMART EXPERIENCE</p>
            <h3>{t.welcome}</h3><p>{t.intro}</p>
            <article className="charmSimEvent"><span>{t.next}</span><strong>{t.event}</strong><small>{t.date}</small></article>
            <button className="charmSimPrimary" onClick={() => setScreen("agenda")}>{t.agenda} ↗</button>
          </div>}
          {screen === "ticket" && <div className="charmSimContent">
            <span className="charmSimKicker">CHARM PASS · 001</span><h3>{t.ticketTitle}</h3><p>{t.ticketText}</p>
            <div className="charmSimQR" aria-label="Código QR ilustrativo">{Array.from({length: 100}, (_, i) => <i key={i} className={(i * 7 + Math.floor(i / 3)) % 5 < 2 ? "filled" : ""} />)}</div>
            <span className="charmSimValid">✓ {t.valid}</span>
          </div>}
          {screen === "agenda" && <div className="charmSimContent">
            <span className="charmSimKicker">{t.today}</span><h3>{t.calendar}</h3>
            <article className="charmSimAgendaItem"><b>FRI</b><div><strong>{t.event}</strong><small>{t.date}</small></div><span>✳</span></article>
            <article className="charmSimAgendaItem"><b>SAT</b><div><strong>{t.one}</strong><small>10:00 AM</small></div><span>◷</span></article>
            <article className="charmSimAgendaItem"><b>SUN</b><div><strong>{t.two}</strong><small>5:00 PM</small></div><span>♫</span></article>
          </div>}
          {screen === "ai" && <div className="charmSimContent charmSimAssistant">
            <span className="charmSimOrb small">✧</span><h3>{t.assistant}</h3>
            <div className="charmSimBubble">{answer || t.question}</div>
            <form onSubmit={(e) => { e.preventDefault(); ask(); }}>
              <input value={question} onChange={(e) => setQuestion(e.target.value)} placeholder={t.placeholder} />
              <button className="charmSimPrimary" type="submit">{t.ask} ↗</button>
            </form>
            <small className="charmSimDisclaimer">{t.demo}</small>
          </div>}
          <footer className="charmSimFooter">{t.demo}</footer>
        </div>
      </div>
    </section>
  );
}
