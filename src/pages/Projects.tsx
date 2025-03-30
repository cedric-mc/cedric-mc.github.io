import '@styles/pages/Projects.css';
import { Col, Ratio, Row } from "react-bootstrap";
import { useEtudes } from "../hooks/useEtudes";
import { useEffect, useState } from 'react';
import { ProjectCarousel } from '../components/Projects/ProjectCarousel';
import { ProjectCard } from '../components/Projects/ProjectCard';
import projects from '@assets/projects.json';
import { Project } from '../types/types';
import { BatailleBoules } from '../assets/projects/BatailleBoules/BataillesBoules';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [child, setChild] = useState<React.ReactNode | undefined>(undefined);
  const [showModal, setShowModal] = useState(false);

  const isEtudes = useEtudes();

  const [theme, setTheme] = useState('')

  useEffect(() => {
    const handleStorageChange = () => {
      setTheme(localStorage.getItem("theme") === 'system'
        ? localStorage.getItem("system-theme") || 'dark'
        : localStorage.getItem("theme") || 'dark'
      );
    };

    window.addEventListener('storage', handleStorageChange);
    handleStorageChange(); // Initialisation

    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleOpenProject = async (project: Project) => {
    setSelectedProject(project);
    // Importation manuelle des projets
    switch (project.children) {
      case 'BatailleBoules':
        setChild(<BatailleBoules />);
        break;
      default:
        setChild(undefined);
        break;
    }
    setShowModal(true);
  }

  const handleClose = () => {
    setSelectedProject(null);
    setChild(undefined);
    setShowModal(false);
  };


  return (
    <section id="projects">
      <h2 className="title-section">Mes projets</h2>
      <p>
        Vous pourrez consulter (si disponible) le code source/lien <span className="code-icon spinner"></span> et la documentation et/ou description <span className="documentation-icon spinner"></span> dans le détail de chaque projet.
      </p>
      <Row className="g-4 justify-content-around" xs={1} md={2} lg={3}>
        {projects.map((project: Project) => /* Afficher tous les project.etudes qui sont en false et les project.etudes qui sont en true si isEtudes est true */
          (!project.etudes || (project.etudes && isEtudes)) &&
          <Col key={project.title}>
            <ProjectCard
              header={project.header}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
              onClick={() => handleOpenProject(project)}
              badge={project.badge}
              etudes={isEtudes}
              theme={theme}
            />
          </Col>
        )}
      </Row>
      <div id="videos">
        <Row className="g-4" xs={1} md={1} lg={2}>
          <Col>
            <div className="project-item">
              <h3 className="title-project">Wrong number : a very embarrassing misunderstanding</h3>
              <h4 className="project-language">Logiciel : ClipChamp</h4>
              <p>
                J'ai participé à la création d'une vidéo pour une séquence de 5 à 10 minutes qui se déroule exclusivement par le biais d'appels téléphoniques et de SMS.
              </p>
              <Ratio aspectRatio="16x9">
                <iframe src="https://www.youtube.com/embed/6cWJObySlfc"
                  title="Wrong number : a very embarrassing misunderstanding Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
              </Ratio>
            </div>
          </Col>
          <Col>
            <div className="project-item">
              <h3 className="title-project">Coding Flash</h3>
              <h4 className="project-language">Logiciel : ClipChamp</h4>
              <p>
                J'ai monté une vidéo à partir de trois extraits de la série <span className="flash">The Flash</span>, avec mon équipe nous devions ajouter des sous-titres personnalisés dans ces extraits.
              </p>
              <Ratio aspectRatio="16x9">
                <iframe src="https://www.youtube.com/embed/E3ukMn0_F5c" title="Coding Flash Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen sandbox="allow-same-origin allow-scripts allow-popups"></iframe>
              </Ratio>
            </div>
          </Col>
        </Row>
      </div>
      {showModal && selectedProject && <ProjectCarousel show={showModal} onClose={handleClose} project={selectedProject} theme={theme}>{child}</ProjectCarousel>}
    </section>
  );
};