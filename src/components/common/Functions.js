function iconText(icon, text) {
    /* Si l'icone est un string, on retourne un span contenant l'icone et le texte */
    if (typeof icon === "string") {
        return (
            <span>
                <img alt="" src={icon} className="d-inline-block align-text-top spinner"/>{' '}
                {text}
            </span>
        );
    } else if (typeof icon === "object") {
        return (
            <span>
                {icon}{' '}
                {text}
            </span>
        );
    }
}

// Fonction pour calculer le thème basé sur l'heure actuelle
function themeBasedOnTime() {
    const hour = new Date().getHours();
    return hour >= 6 && hour < 18 ? "light" : "dark"; // Clair entre 6h et 18h, sinon sombre
}

// Fonction pour appliquer le thème global
function updateThemeAttribute(attribute, value) {
    const elements = document.querySelectorAll("[data-bs-theme]");
    elements.forEach((element) => {
        element.setAttribute(attribute, value);
    });
}

// Fonction pour calculer le thème initial
function calculateTheme(storageTheme) {
    if (storageTheme && storageTheme !== "auto") {
        return storageTheme;
    }

    if (storageTheme === "auto" || !storageTheme) {
        return themeBasedOnTime();
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export { iconText, themeBasedOnTime, updateThemeAttribute, calculateTheme };
