import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Parcours } from "./pages/Parcours";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";

const theme = localStorage.getItem("theme") || "auto";
const invertTheme = theme === "light" ? "dark" : "light";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            { index: true, element: <Home /> },
            { path: "parcours", element: <Parcours theme={invertTheme} /> },
            { path: "skills", element: <Skills /> },
            { path: "projects", element: <Projects /> }
        ]
    }
]);
