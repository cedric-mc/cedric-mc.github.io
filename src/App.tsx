import { useEffect } from 'react';
import { themeBasedOnTime } from './hooks/useTheme';
import { RouterProvider } from 'react-router';
import { router } from './router';

function App() { //TODO: Augmenter la taille des marges pour les écrans larges
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "auto";
        const body = document.querySelector("body") as HTMLElement;

        if (savedTheme === "auto") {
            const autoTheme = themeBasedOnTime();
            body.setAttribute("data-theme", "auto");
            body.setAttribute("data-auto-theme", autoTheme);
            localStorage.setItem("auto-theme", autoTheme);
        } else {
            body.setAttribute("data-theme", savedTheme);
        }
    }, [localStorage]);

    return <RouterProvider router={router} />;
}

export default App;
