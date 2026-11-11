import CharmSimulator from "../charm-simulator";

export default function CharmPage() {
  return (
    <main style={{ minHeight: "100vh", padding: "32px 20px", textAlign: "center" }}>
      <a href="/" style={{ display: "inline-block", marginBottom: 24 }}>← Volver al portafolio GBH</a>
      <h1>CHARM · Simulador interactivo</h1>
      <p>Explora el reloj, su agenda, entrada digital y asistente de demostración.</p>
      <div style={{ maxWidth: 900, margin: "32px auto" }}>
        <CharmSimulator />
      </div>
    </main>
  );
}
