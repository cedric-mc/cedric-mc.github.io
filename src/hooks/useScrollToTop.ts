import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useScrollToTop = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            // Si le lien contient un hash, on scrolle vers l'élément correspondant
            const element = document.getElementById(hash.replace("#", ""));
            if (element) {
                element.scrollIntoView({ block: "start" });
            }
        } else {
            // Sinon, on revient en haut de la page
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [pathname, hash]);
};
