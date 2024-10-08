// Récupération du thème de la page web depuis le localStorage
const storageThem = localStorage.getItem('theme');

// Fonction pour calculer le thème basé sur l'heure actuelle
function themeBasedOnTime() {
    const hour = new Date().getHours();
    // Choisir un thème clair entre 6h00 et 18h00, sinon sombre
    return (hour >= 6 && hour < 18) ? "light" : "dark";
}

// Fonction pour mettre à jour l'attribut "data-bs-theme" de tous les éléments sur la page
function updateAllElementsThemeAttribute(attribute, value) {
    const elements = document.querySelectorAll("[data-bs-theme]");
    elements.forEach((element) => {
        element.setAttribute(attribute, value);
    });
}

// Fonction pour calculer le thème à appliquer
function calculateTheme({ storageThem }) {
    if (storageThem && storageThem !== "auto") {
        return storageThem;
    }

    // Si le thème est "auto", on utilise la logique basée sur l'heure
    if (storageThem === "auto" || !storageThem) {
        const autoTheme = themeBasedOnTime();
        updateAllElementsThemeAttribute("data-auto-theme", autoTheme);
        return "auto";
    }

    // Si aucune condition n'est remplie, on utilise la préférence système
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// Calcul initial du thème actuel
let currentThemeSetting = calculateTheme({ storageThem });

// Appliquer le thème actuel à tous les éléments ayant "data-bs-theme"
updateAllElementsThemeAttribute("data-bs-theme", currentThemeSetting);

// Mettre à jour l'affichage du thème actuel
/*const themeDisplay = document.getElementById("theme-display");
let themeText = currentThemeSetting;
if (currentThemeSetting === "auto") {
    const autoTheme = themeBasedOnTime();
    themeText = `${currentThemeSetting} (${autoTheme})`;
}
themeDisplay.textContent = `Thème : ${themeText}`;*/

// S'assurer que l'attribut data-auto-theme est bien mis à jour pour le mode auto
if (currentThemeSetting === "auto") {
    const autoTheme = themeBasedOnTime();
    updateAllElementsThemeAttribute("data-auto-theme", autoTheme);
}

// Récupérer tous les boutons de sélection de thème
const buttons = document.querySelectorAll("[data-bs-theme-toggle]");

// Ajouter un événement de clic à chaque bouton pour changer le thème
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Récupérer la valeur du thème à appliquer à partir du bouton cliqué
        const newTheme = button.getAttribute("data-bs-theme-value");

        // Si le thème est "auto", calculer le thème en fonction de l'heure
        if (newTheme === "auto") {
            const autoTheme = themeBasedOnTime();
            updateAllElementsThemeAttribute("data-auto-theme", autoTheme);
            currentThemeSetting = "auto";
        } else {
            currentThemeSetting = newTheme;
        }

        // Mettre à jour le thème de la page web en changeant l'attribut "data-bs-theme" de tous les éléments
        updateAllElementsThemeAttribute("data-bs-theme", currentThemeSetting);

        // Mettre à jour l'affichage du thème sur la page
        let themeText = currentThemeSetting;
        if (currentThemeSetting === "auto") {
            const autoTheme = themeBasedOnTime();
            themeText = `${currentThemeSetting} (${autoTheme})`;
        }
        themeDisplay.textContent = `Thème : ${themeText}`;

        // Stocker le nouveau thème dans le localStorage
        localStorage.setItem("theme", newTheme);
    });
});
