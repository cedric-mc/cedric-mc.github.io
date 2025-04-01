import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons/faDownload";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row } from "react-bootstrap";
import '@styles/pages/AboutMe.css';
import photo from '@assets/photo.jpg';
import english_flag from '@assets/navbar/eng.png';
import tamil_flag from '@assets/tamil.png';

export function AboutMe() {
    return (
        <section id="about-me">
            <h2 className="title-section">Qui suis-je ?</h2>
            <Row className="align-items-center">
                <Col>
                    <p className="text-justify">
                        Je suis un étudiant à l'Université de Gustave Eiffel en 3<sup>ème</sup> année du BUT
                        Informatique. Je suis une personne passionnée par l'informatique et le développement en particulier.
                        {/* Je suis actuellement en recherche d'un stage dans le domaine du développement
                        informatique pour une durée de 12 à 16 semaines à partir du 17 mars 2024. Je suis à la recherche
                        d'une entreprise qui me permettra de mettre en pratique mes connaissances et mes compétences
                        dans le domaine du développement informatique. */}
                    </p>
                    <p>
                        Voici mon CV, il est à votre disposition :&nbsp;
                        <a id="cv-btn" className="btn btn-danger heartbeat heartbeat-hover disabled" href="/CV_CEDRIC_MARIYA-CONSTANTINE.pdf" target="_blank">
                            Télécharger&nbsp;<FontAwesomeIcon icon={faDownload}/>
                        </a>
                    </p>
                    <p>Je maîtrise différentes langues en dehors du français : l'Anglais <img className="p-img" src={english_flag} alt="icon flag english"/> bien entendu et le Tamoul <img className="p-img" src={tamil_flag} alt="icon flag tamil"/> (langue maternelle).</p>
                    <p>Je vous invite à me découvrir à travers ce Portfolio, tout en prenant une petite collation !</p>
                    <p>
                        Vous pouvez également me contacter via le formulaire de contact tout en bas de chaque page et me suivre sur :{' '}
                        <a href="https://www.linkedin.com/in/cédric-mariya-constantine-a3a52325a/" target="_blank" rel="noreferrer" className="link-body link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover social-link">
                            <FontAwesomeIcon icon={faLinkedin} className="spinner"/>{' '}LinkedIn
                        </a> et{' '}
                        <a href="https://github.com/cedric-mc/" target="_blank" rel="noreferrer" className="link-body link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover social-link">
                            <FontAwesomeIcon icon={faGithub} className="spinner"/>{' '}GitHub
                        </a>.
                    </p>
                </Col>
                <Col className="d-flex flex-row-reverse">
                    <img src={photo} alt="Photo de Cédric Mariya Constantine" className="profil-photo img-fluid"/>
                </Col>
            </Row>
        </section>
    );
};
