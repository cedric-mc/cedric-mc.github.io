import '@styles/pages/Projects.css';
import { Col, Row } from "react-bootstrap";
import { useEtudes } from "../hooks/useEtudes";
import { useEffect, useState } from 'react';
import { ProjectCarousel } from '../components/Projects/ProjectCarousel';
import { ProjectCard } from '../components/Projects/ProjectCard';
import projects from '@assets/projects.json';
import { Project } from '../types/types';
import { BatailleBoules } from '../assets/projects/BatailleBoules/BataillesBoules';
import { ProjectStudies } from '../components/Projects/ProjectStudies';

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectChild, setProjectChild] = useState<React.ReactNode | undefined>(undefined);
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showStudiesModal, setShowStudiesModal] = useState(false);

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

  const handleOpen = async (type: string, project: Project) => {
    setSelectedProject(project);
    // Importation manuelle des projets
    switch (project.children) {
      case 'BatailleBoules':
        setProjectChild(<BatailleBoules />);
        break;
      default:
        setProjectChild(undefined);
        break;
    }
    
    if (type === 'project') {
      setShowProjectModal(true);
    } else {
      setShowStudiesModal(true);
    }
  }

  const handleClose = () => {
    setSelectedProject(null);
    setProjectChild(undefined);
    setShowProjectModal(false);
    setShowStudiesModal(false);
  };


  return (
    <section id="projects">
      <h2 className="title-section">Mes projets</h2>
      <p>
        Vous pourrez consulter (si disponible) le code source/lien <span className="code-icon spinner"></span> et la documentation et/ou description <span className="documentation-icon spinner"></span> dans le détail de chaque projet.
      </p>
      <Row className="g-4 justify-content-around" xs={1} md={2} lg={3}>
        {projects.map((project: Project) => /* Afficher tous les project.etudes qui sont en false et les project.etudes qui sont en true si isEtudes est true */
          (!project.isEtudes || (project.isEtudes && isEtudes)) &&
          <Col key={project.key}>
            <ProjectCard
              header={project.header}
              title={project.title}
              subtitle={project.subtitle}
              text={project.text}
              onProjectClick={() => handleOpen('project', project)}
              onEtudesClick={() => handleOpen('etudes', project)}
              badge={project.badge}
              isEtudes={isEtudes}
              theme={theme}
            />
          </Col>
        )}
      </Row>
      {showProjectModal && selectedProject && <ProjectCarousel show={showProjectModal} onClose={handleClose} project={selectedProject} theme={theme}>{projectChild}</ProjectCarousel>}
      {showStudiesModal && selectedProject && <ProjectStudies show={showStudiesModal} onClose={handleClose} project={selectedProject} theme={theme} />}
    </section>
  );
};