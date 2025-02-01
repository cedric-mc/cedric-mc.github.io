import '@styles/components/Header.css';
import { useEffect, useState } from "react";
import { useDebug } from "../hooks/useDebug";

export function Header() {
    const [display, setDisplay] = useState("Thème : auto");
    const debug = useDebug();

    // Fonction pour mettre à jour l'affichage du thème
    const updateThemeDisplay = () => {
        const theme = localStorage.getItem("theme");
        if (theme === "auto") {
            const autoTheme = localStorage.getItem("auto-theme");
            setDisplay(`Thème : auto + ${autoTheme}`);
        } else {
            setDisplay(`Thème : ${theme}`);
        }
    };

    // Effet pour gérer les changements de thème
    useEffect(() => {
        if (debug) {
            updateThemeDisplay(); // Initialise l'affichage

            // Ajoute un écouteur pour l'événement personnalisé
            window.addEventListener("themeChange", updateThemeDisplay);

            // Nettoyage de l'écouteur
            return () => window.removeEventListener("themeChange", updateThemeDisplay);
        }
    }, [debug]);
    
    return (
        <header id="header">
            <div id="name-container">
                <h1 className="name lobster-regular">Cédric Mariya Constantine</h1>
                <div id="wrapper">
                    <h2 className="etudiant-animation yatra-one-regular">Étudiant en informatique</h2>
                    {debug && <div id="theme-display">{display}</div>}
                </div>
            </div>
        </header>
    );
};
