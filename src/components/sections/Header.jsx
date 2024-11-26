import '../../css/sections/header.css';
import { useEffect, useState } from 'react';

function Header() {
    const [debug, setDebug] = useState(false);

    // Vérification du paramètre GET `debug`
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        setDebug(queryParams.get("debug") === "1");

        // Si le paramètre GET `debug` est présent, on affiche le thème actuel dans theme-display
        if (queryParams.get("debug") === "1") {
            const themeDisplay = document.getElementById("theme-display");
            themeDisplay.textContent = `Thème : ${localStorage.getItem("theme") || "auto"}`;
        }
    }, []);

    return (
        <header id="header">
            <div id="name-container">
                <h1 className="name lobster-regular">Cédric Mariya Constantine</h1>
                <div id="wrapper">
                    <h2 className="etudiant-animation yatra-one-regular">Étudiant en informatique</h2>
                    <div id="theme-display"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;