import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '@styles/pages/AboutMe.css';
import photo from '@assets/photo.jpg';
import english_flag from '@assets/navbar/eng.png';
import tamil_flag from '@assets/tamil.png';

export function AboutMe() {
    return (
        <section id="about-me">
            <h2 className="title-section">Qui suis-je ?</h2>
            <div className="flex flex-col md:flex-row items-center">
                {/* Colonne Texte */}
                <div className="w-full md:flex-1">
                    <p className="text-justify">
                        Je suis un étudiant à l'école PMN en 2<sup>ème</sup> année du Mastère Lead Developer Full-Stack de l'École PMN (Expert en architecture et développement logiciel).
                        Je suis une personne passionnée par l'informatique et le développement en particulier bien entendu.
                    </p>
                    {/* <p>
                        Voici mon CV, il est à votre disposition :&nbsp;
                        <a id="cv-btn" className="btn btn-danger heartbeat heartbeat-hover disabled" href="/CV_CEDRIC_MARIYA-CONSTANTINE.pdf" target="_blank">
                            Télécharger&nbsp;<FontAwesomeIcon icon={faDownload}/>
                        </a>
                    </p> */}
                    {/* Paragraphe des langues avec des classes inline strictes */}
                    <p className="text-justify">
                        Je maîtrise différentes langues en dehors du français : l'Anglais&nbsp;
                        <img className="p-img inline-block align-middle w-5 h-auto" src={english_flag} alt="icon flag english"/>
                        &nbsp;(for sure) et le Tamoul&nbsp;
                        <img className="p-img inline-block align-middle w-5 h-auto" src={tamil_flag} alt="icon flag tamil"/>
                        .
                    </p>

                    <p>Je vous invite à me découvrir à travers ce Portfolio, tout en prenant une petite collation au chocolat (car on est pas des bêtes quand même) et en vous installant confortablement dans votre fauteuil préféré.</p>
                    <p>
                        Vous pouvez également me suivre sur :{' '}
                        <a href="https://www.linkedin.com/in/cédric-mariya-constantine-a3a52325a/" target="_blank" rel="noreferrer" className="link-body link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover social-link">
                            <FontAwesomeIcon icon={faLinkedin} className="spinner"/>{' '}LinkedIn
                        </a> et{' '}
                        <a href="https://github.com/cedric-mc/" target="_blank" rel="noreferrer" className="link-body link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover social-link">
                            <FontAwesomeIcon icon={faGithub} className="spinner"/>{' '}GitHub
                        </a>.
                    </p>
                </div>

                {/* Colonne Image (Responsive : centré sur mobile, aligné à droite sur grand écran) */}
                <div className="w-50 md:w-auto flex justify-center md:flex-row-reverse mt-4 md:mt-0">
                    <img src={photo} alt="Photo de Cédric Mariya Constantine" className="profil-photo img-fluid"/>
                </div>
            </div>
        </section>
    );
};