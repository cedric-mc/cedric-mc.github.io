import { Header } from "../components/Header";
import { AboutMe } from "./AboutMe";
import { Parcours } from "./Parcours";
import { Skills } from "./Skills";
import { Projects } from "./Projects";

export function SinglePageApp() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Parcours />
      <Skills />
      <Projects />
    </div>
  );
}
