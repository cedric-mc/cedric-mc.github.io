import { useEffect } from 'react';
import { RouterProvider } from 'react-router';
import { router } from './router';

function App() { //TODO: Augmenter la taille des marges pour les écrans larges
  // TODO: Changer auto en system
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "system";
    const body = document.querySelector("body") as HTMLElement;

    if (savedTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      body.setAttribute("data-theme", "system");
      body.setAttribute("data-system-theme", systemTheme);
      localStorage.setItem("system-theme", systemTheme);
    } else {
      body.setAttribute("data-theme", savedTheme);
    }
  }, [localStorage]);

  return <RouterProvider router={router} />;
}

export default App;
