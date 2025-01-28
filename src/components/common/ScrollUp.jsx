import React, { useState, useEffect } from 'react';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(true); // Par défaut, le bouton est caché.

    useEffect(() => {
        // Gestion de la visibilité du composant
        const header = document.getElementById('header');
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(!entry.isIntersecting); // Cache ScrollUp si le header est visible
            },
            { root: null, threshold: 0.5 }
        );        

        if (header) {
            observer.observe(header);
        }

        return () => {
            if (header) {
                observer.disconnect();
            }
        };
    }, []);

    /* useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 100); // Affiche si on a scrollé plus de 100px
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); */
    

    const handleScrollToTop = () => {
        // Défilement fluide vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="scrollUp-container" className={!isVisible ? 'hidden' : ''} onClick={handleScrollToTop}>
            {/* <img src="img/arrow-up-solid.svg" className="icon-up" alt="Up Arrow"/> */}
        </div>
    );
};

export default ScrollUp;
