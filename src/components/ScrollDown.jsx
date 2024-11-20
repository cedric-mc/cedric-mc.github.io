import { useEffect } from "react";
import lottie from "lottie-web";

function ScrollDown() {
    useEffect(() => {
        const animationInstance = lottie.loadAnimation({
            container: document.getElementById('lottie-container'),
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../data/animation.json')
        });

        // Nettoyage : détruire l'animation pour éviter les doublons
        return () => {
            animationInstance.destroy();
        };
    }, []); // Exécuter une seule fois après le montage du composant

    return (
        <div id="arrow-container">
            <div id="lottie-container"></div>
        </div>
    );
}

export default ScrollDown;
