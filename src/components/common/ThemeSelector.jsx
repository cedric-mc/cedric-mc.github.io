import NavDropdown from "react-bootstrap/NavDropdown";
import ThemeOption from "./ThemeOption";
import {iconText, themeBasedOnTime} from "./Functions";
import {useEffect, useState} from "react"; // Assurez-vous que ce composant est importé

const ThemeSelector = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "auto"); // Utiliser un état pour stocker le thème actif

    // Fonction pour mettre à jour le thème
    const handleThemeChange = (newTheme) => {
        document.querySelector("body").setAttribute("data-theme", newTheme); // Met à jour l'attribut du body
        localStorage.setItem("theme", newTheme); // Sauvegarde dans localStorage
        window.dispatchEvent(new Event("themeChange")); // Notifie les autres composants
        setTheme(newTheme); // Met à jour l'état local pour forcer le rendu
    };

    // Mise à jour du thème auto en fonction de l'heure
    useEffect(() => {
        if (theme === "auto") {
            const autoTheme = themeBasedOnTime();
            document.querySelector("body").setAttribute("data-auto-theme", autoTheme);
            localStorage.setItem("auto-theme", autoTheme);
        }
    }, [theme]);

    return (
        <NavDropdown title={iconText("/img/navbar/colors.png", "Apparence")}>
            {theme !== "light" && (
                <NavDropdown.Item onClick={() => handleThemeChange("light")}>
                    <ThemeOption theme="light" svg="#sun-fill" name="Clair"/>
                </NavDropdown.Item>
            )}
            {theme !== "dark" && (
                <NavDropdown.Item onClick={() => handleThemeChange("dark")}>
                    <ThemeOption theme="dark" svg="#moon-stars-fill" name="Sombre"/>
                </NavDropdown.Item>
            )}
            {theme !== "auto" && (
                <NavDropdown.Item onClick={() => handleThemeChange("auto")}>
                    <ThemeOption theme="auto" svg="#circle-half" name="Auto"/>
                </NavDropdown.Item>
            )}
            <NavDropdown.Divider/>
            <NavDropdown.Item eventKey="disabled" disabled className="disabled">
                <ThemeOption
                    theme={theme}
                    svg={
                        theme === "light"
                            ? "#sun-fill"
                            : theme === "dark"
                                ? "#moon-stars-fill"
                                : "#circle-half"
                    }
                    name={
                        theme === "light"
                            ? "Clair"
                            : theme === "dark"
                                ? "Sombre"
                                : "Auto"
                    }
                    className="disabled"
                />
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default ThemeSelector;
