import {themeBasedOnTime} from "../common/Functions";

export function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "auto";
    const body = document.querySelector("body");

    if (savedTheme === "auto") {
        const autoTheme = themeBasedOnTime();
        body.setAttribute("data-theme", "auto");
        body.setAttribute("data-auto-theme", autoTheme);
        localStorage.setItem("auto-theme", autoTheme);
    } else {
        body.setAttribute("data-theme", savedTheme);
    }
}