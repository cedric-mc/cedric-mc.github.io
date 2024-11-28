import React, {useState, useEffect} from 'react';
import lottie from "lottie-web";

const ScrollUp = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const animationInstance = lottie.loadAnimation({
            container: document.getElementById('scrollUp-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../data/scrollUp.json') // Remplacez par votre fichier JSON valide
        });

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsTop(false);
            } else {
                setIsTop(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            // animationInstance.destroy(); // Nettoyage : détruire l'animation pour éviter les fuites mémoire
        };
    }, []);

    const handleScrollToTop = () => {
        window.scrollTo({top: 0});
    };
    return (
        /*<div className={`btn-up ${isTop ? 'btn-hidden' : 'btn-visible'}`} onClick={handleScrollToTop}>
            <img src="/img/arrow-up-solid.svg" className="icon-up" alt="Up Arrow"/>
        </div>*/
        <div id="scrollUp-container" onClick={handleScrollToTop} className={`${isTop ? 'btn-hidden' : 'btn-visible'}`}></div>
    );
};

export default ScrollUp;
