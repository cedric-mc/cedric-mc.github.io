import './css/globals/style.css';
import './css/globals/animation.css';
import SvgDefs from "./components/common/SvgDefs";
import ScrollUp from "./components/common/ScrollUp";
import ScrollDown from "./components/common/ScrollDown";
import Navigation from "./components/sections/Navigation";
import Header from "./components/sections/Header";
import AboutMe from "./components/sections/AboutMe";
import Parcours from "./components/sections/Parcours";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Footer from "./components/sections/Footer";
import SkillsUniv from './components/sections/SkillsUniv';
import useEtudes from "./components/hooks/useEtudes";

function App() {
    const [isEtudes, setIsEtudes] = useEtudes();

    return (
        <div id="top-page" className="background">
            <SvgDefs/>
            <ScrollDown/>
            <Navigation/>
            <Header/>
            <main id="home">
                <AboutMe/>
                <Parcours/>
                {isEtudes ? (
                    <SkillsUniv />
                ) : (
                    <>
                        <Skills/>
                        <Projects/>
                    </>
                )}
            </main>
             <ScrollUp/>
            <Footer/>
            <div className="scroll-watcher"></div>
        </div>
    );
}

export default App;
