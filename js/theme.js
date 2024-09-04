// Récupération du thème de la page web depuis le localStorage
const localStorageTheme = localStorage.getItem("theme");

// Détection des préférences système pour le thème sombre
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// Fonction pour calculer le thème à appliquer
function calculateSettingAsThemeString({localStorageTheme, systemSettingDark}) {
    if (localStorageTheme && localStorageTheme !== "auto") {
        return localStorageTheme;
    }

    // Si le thème est "auto", on utilise la logique basée sur l'heure
    if (localStorageTheme === "auto" || !localStorageTheme) {
        return calculateThemeBasedOnTime();
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

// Calcul initial du thème actuel
let currentThemeSetting = calculateSettingAsThemeString({localStorageTheme, systemSettingDark});

// Récupérer tous les boutons de sélection de thème
const buttons = document.querySelectorAll("[data-theme-toggle]");

// Ajouter un événement de clic à chaque bouton pour changer le thème
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        // Récupérer la valeur du thème à appliquer à partir du bouton cliqué
        const newTheme = button.getAttribute("data-theme-value");

        // Si le thème est "auto", calculer le thème en fonction de l'heure
        if (newTheme === "auto") {
            currentThemeSetting = calculateThemeBasedOnTime();
        } else {
            currentThemeSetting = newTheme;
        }

        // Mettre à jour le thème de la page web en changeant l'attribut data-theme
        document.documentElement.setAttribute("data-theme", currentThemeSetting);

        // Stocker le nouveau thème dans le localStorage
        localStorage.setItem("theme", newTheme);
    });
});
