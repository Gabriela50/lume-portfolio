// ==========================================
// GBH PROJECT STUDIO
// Orientación inicial para presentar proyectos
// ==========================================

function generateRecommendation() {
    const input = document.getElementById("projectInput");
    const result = document.getElementById("aiResult");

    if (!input || !result) return;

    const projectName = input.value.trim();

    result.replaceChildren();

    const icon = document.createElement("span");
    icon.textContent = "✦";
    result.appendChild(icon);

    const content = document.createElement("div");
    result.appendChild(content);

    const title = document.createElement("p");

    if (!projectName) {
        title.textContent =
            "Escribe el nombre de tu proyecto para recibir una orientación inicial.";
        result.replaceChildren(icon, title);
        input.focus();
        return;
    }

    const projectTitle = document.createElement("strong");
    projectTitle.textContent = projectName;
    title.appendChild(projectTitle);
    content.appendChild(title);

    const normalizedName = projectName.toLocaleLowerCase("es");

    let advice =
        "Define el objetivo, identifica a quién va dirigido, explica las decisiones que tomaste y muestra el resultado final.";

    let suggestions = [
        "Objetivo",
        "Proceso",
        "Resultado"
    ];

    if (/foto|fotograf|retrato|imagen/.test(normalizedName)) {
        advice =
            "Organiza una selección coherente de imágenes, explica la intención visual y destaca la composición, la iluminación y la historia que quieres transmitir.";
        suggestions = ["Composición", "Iluminación", "Narrativa visual"];
    } else if (/marca|branding|logo|identidad|diseño/.test(normalizedName)) {
        advice =
            "Presenta el concepto de la marca, explica la elección de colores y tipografías y muestra cómo se aplica la identidad en diferentes piezas.";
        suggestions = ["Concepto", "Identidad visual", "Aplicaciones"];
    } else if (/app|aplicación|software|web|sistema|plataforma/.test(normalizedName)) {
        advice =
            "Explica el problema que resuelve, quién utilizará la solución, cómo funciona y qué decisiones de diseño y desarrollo tomaste. Incluye capturas del producto.";
        suggestions = ["Problema", "Funcionalidad", "Tecnología"];
    } else if (/juego|game|videojuego/.test(normalizedName)) {
        advice =
            "Describe el objetivo del juego, sus mecánicas principales, el diseño de la experiencia y los retos técnicos. Incluye imágenes o una demostración del resultado.";
        suggestions = ["Mecánicas", "Experiencia", "Desarrollo"];
    }

    const description = document.createElement("p");
    description.className = "mt-2";
    description.textContent = advice;
    content.appendChild(description);

    const tags = document.createElement("div");
    tags.className = "mt-4 flex flex-wrap gap-2";

    suggestions.forEach((suggestion) => {
        const tag = document.createElement("span");
        tag.className =
            "rounded-full bg-pink-100 px-3 py-1 text-xs font-medium text-pink-700";
        tag.textContent = suggestion;
        tags.appendChild(tag);
    });

    content.appendChild(tags);
}
