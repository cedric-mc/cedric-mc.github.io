import '../../css/sections/AboutMe.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {Col, Row} from "react-bootstrap";
import {faDownload} from "@fortawesome/free-solid-svg-icons";
import {useEffect} from "react";
import lottie from "lottie-web";

function AboutMe() {
    useEffect(() => {
        try {
            const animationInstance = lottie.loadAnimation({
                container: document.getElementById('scrollUp-container'),
                renderer: 'svg',
                loop: true,
                autoplay: true,
                animationData: require('../../data/scrollUp.json') // Remplacez par votre fichier JSON valide
            });

            // Nettoyage : détruire l'animation pour éviter les fuites mémoire
            return () => animationInstance.destroy();
        } catch (error) {
            console.error("Erreur lors du chargement de l'animation Lottie :", error);
        }
    }, []); // Exécuter une seule fois après le montage du composant

    return (
        <section id="about-me">
            <h2 className="title-section">Qui suis-je ?</h2>
            <Row className="align-items-center">
                <Col md={6}>
                    <p className="text-justify">
                        Je suis un étudiant à l'Université de Gustave Eiffel en 3<sup>ème</sup> année du BUT
                        Informatique. Je suis actuellement en recherche d'un stage dans le domaine du développement
                        informatique pour une durée de 12 à 16 semaines à partir du 17 mars 2024. Je suis à la recherche
                        d'une entreprise qui me permettra de mettre en pratique mes connaissances et mes compétences
                        dans le domaine du développement informatique.
                    </p>
                    <p>
                        Voici mon CV, il est à votre disposition :&nbsp;
                        <a id="cv-btn" className="btn btn-danger heartbeat heartbeat-hover" href="/CV_CEDRIC_MARIYA-CONSTANTINE.pdf" target="_blank">
                            Télécharger&nbsp;<FontAwesomeIcon icon={faDownload}/>
                        </a>
                    </p>
                    <p>Je maîtrise différentes langues en dehors du français : l'Anglais <img className="p-img" src="img/navbar/eng.png" alt="icon flag english"/> bien entendu et le Tamoul <img className="p-img" src="img/tamil.png" alt="icon flag tamil"/> (langue maternelle).</p>
                    <p>Je vous invite à me découvrir à travers ce Portfolio, tout en prenant une petite collation !</p>
                    <p>
                        Vous pouvez également me contacter via le formulaire de contact et me suivre sur :{' '}
                        <a href="https://www.linkedin.com/in/cédric-mariya-constantine-a3a52325a/" target="_blank" rel="noreferrer" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover social-link">
                            <FontAwesomeIcon icon={faLinkedin} className="spinner"/>{' '}LinkedIn
                        </a> et{' '}
                        <a href="https://github.com/cedric-mc/" target="_blank" rel="noreferrer" className="link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover social-link">
                            <FontAwesomeIcon icon={faGithub} className="spinner"/>{' '}GitHub
                        </a>.
                    </p>
                </Col>
                <Col md={6} className="text-end d-flex justify-content-end">
                    <img src="img/photo.jpg" alt="Profil" className="profil-photo img-fluid"/>
                </Col>
            </Row>
        </section>
    );
}

export default AboutMe;
