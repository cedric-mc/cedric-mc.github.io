import {useEffect, useState} from "react";
import lottie from "lottie-web";

function ScrollDown() {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const animationInstance = lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../data/animation.json')
        });

        // Gestion de la visibilité du composant
        const footer = document.getElementById('footer');
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting); // Cache ScrollDown si le footer est visible
            },
            { root: null, threshold: 0.5} // 10% de visibilité
        );

        if (footer) {
            observer.observe(footer);
        }

        // Nettoyage : détruire l'animation pour éviter les doublons
        return () => {
            animationInstance.destroy();
            if (footer) {
                observer.disconnect();
            }
        };
    }, []); // Exécuter une seule fois après le montage du composant

    return (
        <div id="arrow-container" className={!isVisible ? 'hidden' : ''}>
            <div id="lottie-container"></div>
        </div>
    );
}

export default ScrollDown;
