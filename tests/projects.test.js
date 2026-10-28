const fs = require("fs");
const vm = require("vm");
const assert = require("assert");

const source = fs.readFileSync("data/projects.js", "utf8");
const context = {
    console,
    document: {
        addEventListener() {},
        getElementById() {
            return null;
        }
    }
};

vm.createContext(context);
vm.runInContext(source + "\nthis.projectsForTest = projects;", context);

const projects = context.projectsForTest;
const expected = [
    {
        name: "MOODÉ",
        repo: "https://github.com/Gabriela50/moode-ai-makeup"
    },
    {
        name: "MIRAGE",
        repo: "https://github.com/Gabriela50/mirage-event-planner"
    },
    {
        name: "CHARM",
        repo: null
    }
];

assert.strictEqual(projects.length, 3, "Debe haber tres proyectos.");

for (const item of expected) {
    const project = projects.find(p => p.name === item.name);
    assert.ok(project, `Falta el proyecto ${item.name}.`);
    assert.ok(project.category, `${item.name} necesita una categoría.`);
    assert.ok(project.description, `${item.name} necesita una descripción.`);
    assert.ok(Array.isArray(project.tags) && project.tags.length > 0,
        `${item.name} necesita etiquetas.`);

    if (item.repo) {
        assert.strictEqual(project.repoUrl, item.repo,
            `El enlace de ${item.name} no coincide.`);
    } else {
        assert.ok(!project.repoUrl,
            "CHARM no debe mostrar un enlace que no está configurado.");
    }

    console.log(`OK: ${project.name}`);
}

console.log("Todas las pruebas de proyectos pasaron.");
