import { NavDropdown } from "react-bootstrap";
import { IconText } from "../IconText";
import { useEffect, useState } from "react";
import { themeBasedOnTime } from "../../hooks/useTheme";
import colors from "@assets/navbar/colors.png";

interface ThemeOptionProps {
    name: string;
    theme: string;
    svg: string;
    className?: string;
}

function ThemeOption({ name, theme, svg, className }: ThemeOptionProps) {
    return (
        <div id={`theme-${theme}`} className={className}>
            <svg className="spinner">
                <use xlinkHref={svg}></use>
            </svg>
            {' ' + name}
        </div>
    );
};

export function ThemeSelector() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "auto"); // Utiliser un état pour stocker le thème actif
    
    const handleThemeChange = (newTheme: string) => {
        (document.querySelector("body") as HTMLElement).setAttribute("data-theme", newTheme); // Met à jour l'attribut du body
        localStorage.setItem("theme", newTheme); // Sauvegarde dans localStorage
        window.dispatchEvent(new Event("themeChange")); // Notifie les autres composants
        setTheme(newTheme); // Met à jour l'état local pour forcer le rendu
    };

    useEffect(() => {
        if (theme === "auto") {
            const autoTheme = themeBasedOnTime();
            (document.querySelector("body") as HTMLElement).setAttribute("data-auto-theme", autoTheme);
            localStorage.setItem("auto-theme", autoTheme);
        }
    }, [theme]);

    return (
        <NavDropdown title={<IconText icon={colors} text="Apparence"/>}>
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
                    svg={theme === "light" ? "#sun-fill" : theme === "dark" ? "#moon-stars-fill" : "#circle-half"}
                    name={theme === "light" ? "Clair" : theme === "dark" ? "Sombre" : "Auto"}
                    className="disabled"
                />
            </NavDropdown.Item>
        </NavDropdown>
    );
}