import './css/globals/style.css';
import './css/globals/animation.css';
import SvgDefs from "./components/common/SvgDefs";
import ScrollUp from "./components/common/ScrollUp";
import ScrollDown from "./components/common/ScrollDown";
import { Navigation, Header, AboutMe, Parcours, Skills, Projects, Footer } from "./components/sections";

function App() {
    return (
        <div id="top-page" className="background">
            <SvgDefs/>
            <ScrollDown/>
            <Navigation/>
            <Header/>
            <main id="home">
                <AboutMe/>
                <Parcours/>
                <Skills/>
                <Projects/>
            </main>
            {/* <ScrollUp/> */}
            <Footer/>
            <div className="scroll-watcher"></div>
        </div>
    );
}

export default App;
