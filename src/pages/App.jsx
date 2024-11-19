import '../css/style.css';
import Header from "./Header";
import Navigation from "./Navigation";
import SvgDefs from "../components/SvgDefs";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";
import AboutMe from "./AboutMe";
import Parcours from "./Parcours";
import Skills from "./Skills";
import ScrollArrow from "../components/ScrollArrow";

function App() {
    return (
        <div id="top-page" className="background">
            <SvgDefs/>
            <ScrollArrow/>
            <Navigation/>
            <Header/>
            <main id="home">
                <AboutMe/>
                <Parcours/>
                <Skills/>
                {/*<Projects/>*/}
            </main>
            <ScrollToTop/>
            <Footer/>
            <div className="scroll-watcher"></div>
        </div>
    );
}

export default App;
