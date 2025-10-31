import '@styles/globals/style.css';
import '@styles/globals/animation.css';
import { useEffect } from 'react';
import { SvgDefs } from './components/SvgDefs';
import { Navigation } from './components/Navigation/Navigation';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AboutMe } from './sections/AboutMe';
import { Parcours } from './sections/Parcours';
import { Skills } from './sections/Skills';
import { Projects } from './sections/Projects';
// TODO: Passer de react-bootstrap à vite + bootstrap
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
    }, [localStorage.getItem("theme")]);

    return (
        <div className='app-container'>
            <SvgDefs />
            <Navigation />
            <main id='home' className='content'>
                <Header />
                <AboutMe />
                {/* TODO: Faire une page avec les évènements d'un dépôt GitHub */}
                {/* TODO: Indiquer si possible à l'aide de Google Analytics le nombre de visiteurs en tout + le nombre de visiteurs de la journée en mode debug */}
                <Parcours />
                <Skills />
                <Projects />
            </main>
            <Footer />
            {/* TODO: Ajouter un bouton pour remonter en haut de la page */}
        </div>
    );
}

export default App;
