// ==========================================
// GABRIELA BH — MEJORAS VISUALES DE PROYECTOS
// La lógica del modal está en data/projects.js.
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(
        '#proyectos button[onclick*="showProject"]'
    );

    buttons.forEach(button => {
        const card = button.closest("article");
        if (!card) return;

        card.classList.add("project-card");

        const preview = card.querySelector(".relative.h-56");
        if (preview) preview.classList.add("project-preview");

        const icon = card.querySelector(".rounded-2xl");
        if (icon) icon.classList.add("project-icon");

        const title = card.querySelector("h3");
        if (title) title.classList.add("project-title");

        button.classList.add("project-button");
    });
});
