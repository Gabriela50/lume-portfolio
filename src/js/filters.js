// ==========================================
// GABRIELA BH — FILTROS Y BUSCADOR
// ==========================================

function filterProjects(category) {
    const cards = document.querySelectorAll("#proyectos article");
    const buttons = document.querySelectorAll("#proyectos .mb-8 button");
    const searchInput = document.getElementById("projectSearch");
    const searchTerm = searchInput
        ? searchInput.value.trim().toLowerCase()
        : "";

    const selectedCategory = category.trim().toLowerCase();

    cards.forEach(card => {
        const categoryElement = card.querySelector("small");
        const titleElement = card.querySelector("h3");

        if (!categoryElement || !titleElement) return;

        // El texto de la tarjeta incluye el año, por ejemplo: BRANDING · 2026.
        const cardCategory = categoryElement.textContent
            .split("·")[0]
            .trim()
            .toLowerCase();

        const title = titleElement.textContent.trim().toLowerCase();

        const project = projects.find(
            item => item.name.toLowerCase() === title
        );

        let searchableText = `${title} ${cardCategory}`;

        if (project) {
            searchableText += ` ${project.description} ${project.tags.join(" ")}`;
        }

        const matchesCategory =
            selectedCategory === "todos" ||
            cardCategory === selectedCategory;

        const matchesSearch =
            searchableText.toLowerCase().includes(searchTerm);

        card.style.display =
            matchesCategory && matchesSearch ? "" : "none";
    });

    buttons.forEach(button => {
        const buttonCategory = button.textContent.trim().toLowerCase();

        button.classList.remove(
            "bg-[#1d1b1b]",
            "text-white",
            "shadow-md"
        );

        if (buttonCategory === selectedCategory) {
            button.classList.add(
                "bg-[#1d1b1b]",
                "text-white",
                "shadow-md"
            );
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    filterProjects("Todos");

    const searchInput = document.getElementById("projectSearch");
    if (!searchInput) return;

    searchInput.addEventListener("input", () => {
        const buttons = document.querySelectorAll("#proyectos .mb-8 button");
        let activeCategory = "Todos";

        buttons.forEach(button => {
            if (button.classList.contains("bg-[#1d1b1b]")) {
                activeCategory = button.textContent.trim();
            }
        });

        filterProjects(activeCategory);
    });
});
