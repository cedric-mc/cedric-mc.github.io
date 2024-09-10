// Récupération du thème de la page web depuis le localStorage
const localStorageTheme = localStorage.getItem("theme");

// Détection des préférences système pour le thème sombre
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// Fonction pour calculer le thème à appliquer
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme && localStorageTheme !== "auto") {
        return localStorageTheme;
    }

    // Si le thème est "auto", on utilise la logique basée sur l'heure
    if (localStorageTheme === "auto" || !localStorageTheme) {
        const autoTheme = calculateThemeBasedOnTime();
        updateAllElementsThemeAttribute("data-auto-theme", autoTheme);
        return "auto";
    }

    // Si aucune condition n'est remplie, on utilise la préférence système
    return systemSettingDark.matches ? "dark" : "light";
}

// Fonction pour calculer le thème basé sur l'heure actuelle
function calculateThemeBasedOnTime() {
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

// Fonction pour mettre à jour l'affichage du thème sur la page
function updateThemeDisplay(currentTheme) {
    const themeDisplay = document.getElementById("theme-display");
    let themeText = currentTheme;

    // Si le thème est "auto", on affiche le thème automatiquement calculé
    if (currentTheme === "auto") {
        const autoTheme = calculateThemeBasedOnTime();
        themeText = `${currentTheme} (${autoTheme})`;
    }

    // Mettre à jour le texte affiché
    themeDisplay.textContent = `Thème : ${themeText}`;
}

// Calcul initial du thème actuel
let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

// Appliquer le thème actuel à tous les éléments ayant "data-bs-theme"
updateAllElementsThemeAttribute("data-bs-theme", currentThemeSetting);

// Mettre à jour l'affichage du thème actuel
updateThemeDisplay(currentThemeSetting);

// S'assurer que l'attribut data-auto-theme est bien mis à jour pour le mode auto
if (currentThemeSetting === "auto") {
    const autoTheme = calculateThemeBasedOnTime();
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
            const autoTheme = calculateThemeBasedOnTime();
            updateAllElementsThemeAttribute("data-auto-theme", autoTheme);
            currentThemeSetting = "auto";
        } else {
            currentThemeSetting = newTheme;
        }

        // Mettre à jour le thème de la page web en changeant l'attribut "data-bs-theme" de tous les éléments
        updateAllElementsThemeAttribute("data-bs-theme", currentThemeSetting);

        // Mettre à jour l'affichage du thème sur la page
        updateThemeDisplay(currentThemeSetting);

        // Stocker le nouveau thème dans le localStorage
        localStorage.setItem("theme", newTheme);
    });
});
