// ===============================
// LUMÉ AI
// ===============================

function generateRecommendation() {
    const input = document.getElementById("projectInput");
    const result = document.getElementById("aiResult");

    const projectName = input.value.trim();

    if (projectName === "") {
        result.innerHTML = `
            <span>✦</span>
            <p>
                Escribe primero el nombre de tu proyecto para que
                LUMÉ AI pueda analizarlo.
            </p>
        `;
        return;
    }

    result.innerHTML = `
        <span>✦</span>
        <p>
            <strong>${projectName}</strong> podría destacarse mejor
            mostrando su proceso creativo, inspiración y resultado final.
            LUMÉ AI recomienda utilizar etiquetas visuales y una
            descripción breve para presentar el proyecto.
        </p>
    `;
}


// ===============================
// PROJECT PREVIEW
// ===============================

function showProject(projectName) {

    alert(
        "LUMÉ · " + projectName +
        "\\n\\nAquí se mostraría el proceso completo del proyecto: " +
        "inspiración, desarrollo y resultado final."
    );

}