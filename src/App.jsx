import './css/globals/style.css';
import './css/globals/animation.css';
import SvgDefs from "./components/common/SvgDefs";
import ScrollToTop from "./components/common/ScrollToTop";
import ScrollDown from "./components/common/ScrollDown";
import { Navigation, Header, AboutMe, Parcours, Skills, Projects, Footer } from "./components/sections";

// Fonction pour calculer le thème basé sur l'heure actuelle
function themeBasedOnTime() {
    const hour = new Date().getHours();
    // Choisir un thème clair entre 6h00 et 18h00, sinon sombre
    return (hour >= 6 && hour < 18) ? "light" : "dark";
}

// Fonction pour mettre à jour l'attribut "data-theme" de tous les éléments sur la page
function updateAllElementsThemeAttribute(attribute, value) {
    const elements = document.querySelectorAll("[data-theme]");
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

function App() {
    // Récupération du thème de la page web depuis le localStorage
    const storageThem = localStorage.getItem('theme');

    // Calcul initial du thème actuel
    let currentThemeSetting = calculateTheme({ storageThem });

    // Appliquer le thème actuel à tous les éléments ayant "data-theme"
    updateAllElementsThemeAttribute("data-theme", currentThemeSetting);

    return (
        <div id="top-page" className="background">
            <SvgDefs/>
            <ScrollDown/>
            <Navigation/>
            <Header/>
            <main id="home">
                <AboutMe/>
                <Parcours/>
                <Skills/>
                <Projects/>
            </main>
            <ScrollToTop/>
            <Footer/>
            <div className="scroll-watcher"></div>
        </div>
    );
}

export default App;
