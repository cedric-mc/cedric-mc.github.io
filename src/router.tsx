import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutMe } from "./pages/AboutMe";
import { Parcours } from "./pages/Parcours";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Header } from "./components/Header";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Header /> },
            // { index: true, element: <Home /> }, // Accueil avec ton prénom en grand
            { path: "about", element: <AboutMe /> },
            { path: "parcours", element: <Parcours /> },
            { path: "skills", element: <Skills /> },
            { path: "projects", element: <Projects /> }
        ]
    }
]);
