import Header from "./Header";
import Navigation from "./Navigation";
import SvgDefs from "../components/SvgDefs";
import Footer from "./Footer";
import ScrollToTop from "../components/ScrollToTop";
import AboutMe from "./AboutMe";
import Parcours from "./Parcours";
import Skills from "./Skills";

function App() {
    return (
        <>
            <SvgDefs/>
            <svg className="arrow">
                <use xlinkHref="#arrow"></use>
            </svg>
            <Navigation/>
            <Header/>
            <main id="home">
                <AboutMe/>
                <Parcours/>
                <Skills/>
                {/*<Projects/>*/}
            </main>
            {/*<div className="btn-up">
                <img src="/img/arrow-up-solid.svg" className="icon-up" alt=""/>
            </div>*/}
            <ScrollToTop />
            <Footer/>
            <div className="scroll-watcher"></div>
        </>
    );
}

export default App;
