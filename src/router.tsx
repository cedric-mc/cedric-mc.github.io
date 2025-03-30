import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Parcours } from "./pages/Parcours";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Home } from "./pages/Home";
import { SkillsUniv } from "./pages/SkillsUniv";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "parcours", element: <Parcours /> },
      { path: "skills", element: <Skills /> },
      { path: "skills-univ", element: <SkillsUniv /> },
      { path: "projects", element: <Projects /> }
    ]
  }
]);
