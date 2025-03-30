import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Parcours } from "./pages/Parcours";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { SkillsUniv } from "./pages/SkillsUniv";

const theme = localStorage.getItem("theme") || "auto";
// const finalTheme = theme === "auto" ? localStorage.getItem("auto-theme") || "light" : theme;
const invertTheme = theme === "light" ? "dark" : "light";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "parcours", element: <Parcours theme={invertTheme} /> },
      { path: "skills", element: <Skills /> },
      { path: "skills-univ", element: <SkillsUniv /> },
      { path: "projects", element: <Projects /> }
    ]
  }
]);
