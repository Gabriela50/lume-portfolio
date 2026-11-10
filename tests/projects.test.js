const fs = require("fs");
const assert = require("assert");

const page = fs.readFileSync("app/page.tsx", "utf8");
const css = fs.readFileSync("app/globals.css", "utf8");

const expectedProjects = ["MOODÉ", "MIRAGE", "CHARM", "MARBLE OVERDRIVE"];
for (const name of expectedProjects) {
  assert.ok(page.includes(name), `Falta el proyecto ${name}.`);
  console.log(`OK: ${name}`);
}

const requiredSections = ["perfil", "habilidades", "experiencia", "formacion", "proyectos", "contacto", "referencias"];
for (const section of requiredSections) {
  assert.ok(page.includes(`id="${section}"`), `Falta la sección ${section}.`);
  console.log(`OK: sección ${section}`);
}

assert.ok(page.includes("/projects/moode-mobile.png"), "MOODÉ debe mostrar la nueva imagen móvil.");
assert.ok(page.includes("PROYECTO COLABORATIVO"), "Marble Overdrive debe identificarse como colaborativo.");
assert.ok(page.includes("13 escenarios seleccionables"), "La descripción de Marble debe reflejar sus escenarios.");
assert.ok(page.includes("recommendation") || page.includes("recomendaciones"), "MIRAGE debe describir sus recomendaciones.");
assert.ok(page.includes("Simulador interactivo de una experiencia para smartwatch"), "CHARM debe describirse como simulador interactivo.");
assert.ok(page.includes("github.com/danilolarap/MarbleOverdrive"), "Falta el repositorio colaborativo.");
assert.ok(css.includes("@media (max-width: 480px)"), "Falta adaptación para móviles pequeños.");
assert.ok(css.includes("prefers-reduced-motion"), "Falta respetar la preferencia de movimiento reducido.");

console.log("Todas las pruebas del portafolio GBH pasaron.");

assert.ok(page.includes("https://github.com/Gabriela50"), "Falta el enlace público de GitHub.");
