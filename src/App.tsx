import { useEffect } from 'react';
import { themeBasedOnTime } from './hooks/useTheme';
import { RouterProvider } from 'react-router';
import { router } from './router';

function App() { //TODO: Augmenter la taille des marges pour les écrans larges
  // TODO: Regrouper les images qu'ils restent faire après le TODO des images regroupés par projet
  // TODO: Changer auto en system
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
