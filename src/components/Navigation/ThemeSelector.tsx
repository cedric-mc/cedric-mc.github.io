import { NavDropdown } from "react-bootstrap";
import { IconText } from "../IconText";
import { useEffect, useState } from "react";
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
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "system");
    
    const handleThemeChange = (newTheme: string) => {
        (document.querySelector("body") as HTMLElement).setAttribute("data-theme", newTheme); // Met à jour l'attribut du body
        localStorage.setItem("theme", newTheme); // Sauvegarde dans localStorage
        window.dispatchEvent(new Event("themeChange")); // Notifie les autres composants
        setTheme(newTheme); // Met à jour l'état local pour forcer le rendu
    };

    useEffect(() => {
        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
            (document.querySelector("body") as HTMLElement).setAttribute("data-system-theme", systemTheme);
            localStorage.setItem("system-theme", systemTheme);
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
            {theme !== "system" && (
                <NavDropdown.Item onClick={() => handleThemeChange("system")}>
                    <ThemeOption theme="system" svg="#circle-half" name="Système"/>
                </NavDropdown.Item>
            )}
            <NavDropdown.Divider/>
            <NavDropdown.Item eventKey="disabled" disabled className="disabled">
                <ThemeOption
                    theme={theme}
                    svg={theme === "light" ? "#sun-fill" : theme === "dark" ? "#moon-stars-fill" : "#circle-half"}
                    name={theme === "light" ? "Clair" : theme === "dark" ? "Sombre" : "Système"}
                    className="disabled"
                />
            </NavDropdown.Item>
        </NavDropdown>
    );
}