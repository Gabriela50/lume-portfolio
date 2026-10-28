// ==========================================
// GBH — PROYECTOS REALES DEL PORTAFOLIO
// ==========================================

const projects = [
    {
        name: "MOODÉ",
        repoUrl: String.fromCharCode(104,116,116,112,115,58,47,47,103,105,116,104,117,98,46,99,111,109,47,71,97,98,114,105,101,108,97,53,48,47,109,111,111,100,101,45,97,105,45,109,97,107,101,117,112),
        category: "Aplicación web",
        description: "Aplicación de belleza que permite crear una cuenta, capturar una selfie con la cámara o cargar una fotografía y explorar una experiencia de maquillaje relacionada con el mood elegido.",
        icon: "01",
        tags: ["JavaScript", "Aplicación web", "Cámara y fotografías", "Maquillaje"]
    },
    {
        name: "MIRAGE",
        repoUrl: String.fromCharCode(104,116,116,112,115,58,47,47,103,105,116,104,117,98,46,99,111,109,47,71,97,98,114,105,101,108,97,53,48,47,109,105,114,97,103,101,45,101,118,101,110,116,45,112,108,97,110,110,101,114),
        category: "Planificación de eventos",
        description: "Planificador de eventos con interfaz en español e inglés, creación de eventos e historial de actividad guardado localmente. La gestión completa de invitados, el presupuesto y la conexión a un modelo de IA permanecen en desarrollo.",
        icon: "02",
        tags: ["React", "Vite", "Español / English", "Almacenamiento local", "En desarrollo"]
    },
    {
        name: "CHARM",
        category: "Android / Smartwatch",
        description: "Prototipo Android para smartwatch desarrollado con Kotlin y Jetpack Compose. Incluye una entrada digital de demostración, una agenda que consulta el calendario del dispositivo con permiso y opciones de idioma y tema.",
        icon: "03",
        tags: ["Kotlin", "Jetpack Compose", "Android", "Calendario", "ES / EN", "Prototipo"]
    }
];

// Abrir el modal de un proyecto.
function showProject(projectName) {
    const project = projects.find(item => item.name === projectName);

    if (!project) {
        console.error("Proyecto no encontrado:", projectName);
        return;
    }

    const modal = document.getElementById("projectModal");
    const title = document.getElementById("modalProjectTitle");
    const category = document.getElementById("modalProjectCategory");
    const description = document.getElementById("modalProjectDescription");
    const number = document.getElementById("modalProjectNumber");
    const tags = document.getElementById("modalProjectTags");
    const repoLink = document.getElementById("modalProjectRepoLink");

    if (!modal || !title || !category || !description || !number || !tags) {
        console.error("Faltan elementos necesarios para mostrar el modal.");
        return;
    }

    title.textContent = project.name;
    category.textContent = project.category;
    description.textContent = project.description;
    number.textContent = project.icon;

    if (repoLink) {
        if (project.repoUrl) {
            repoLink.href = project.repoUrl;
            repoLink.classList.remove("hidden");
        } else {
            repoLink.removeAttribute("href");
            repoLink.classList.add("hidden");
        }
    }

    tags.replaceChildren();

    project.tags.forEach(tag => {
        const tagElement = document.createElement("span");
        tagElement.textContent = tag;
        tagElement.className =
            "rounded-full bg-[#f7eef2] px-4 py-2 text-xs font-medium text-[#805568]";
        tags.appendChild(tagElement);
    });

    modal.classList.remove("hidden");
    modal.classList.add("flex");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
}

// Cerrar el modal.
function closeProjectModal() {
    const modal = document.getElementById("projectModal");
    if (!modal) return;

    modal.classList.add("hidden");
    modal.classList.remove("flex");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("projectModal");

    if (modal) {
        modal.addEventListener("click", event => {
            if (event.target === modal) closeProjectModal();
        });
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeProjectModal();
    });
});
