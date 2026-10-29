import { Card, Button, Badge } from "react-bootstrap";
import '@styles/components/ProjectCard.css';

interface ProjectCardProps {
  header: string;
  title: string;
  subtitle: string;
  text: string;
  onProjectClick: () => void;
  onEtudesClick: () => void;
  badge: string;
  isEtudes: boolean;
  theme: string;
}

export function ProjectCard({ header, title, subtitle, text, onProjectClick, onEtudesClick, badge, isEtudes: isEtudes, theme }: ProjectCardProps) {
  return (
    <Card
      className="project-card g-4 h-100"
      bg={theme}
      text={theme === "dark" ? "light" : "dark"}
      style={{ minHeight: "22rem" }}
      data-bs-theme={theme}
    >
      <Card.Header className="project-card-header">
        <span className="header-badge">{header}</span>
      </Card.Header>
      <Card.Body className="project-card-body d-flex flex-column">
        <div className="flex-grow-1">
          <Card.Title className="project-card-title">{title}</Card.Title>
          <Card.Subtitle className="project-card-subtitle">{subtitle}</Card.Subtitle>
          <Card.Text className="project-card-text text-justify">
            {text.length > 150 ? text.slice(0, 150) + "..." : text}
          </Card.Text>
        </div>
        <div className="project-card-actions mt-auto">
          <Button 
            className="btn-project" 
            onClick={onProjectClick}
          >
            🔍 Voir le projet
          </Button>
          {isEtudes === true && (
            <Button 
              className="btn-etudes ms-2"
              onClick={onEtudesClick}
            >
              📚 Compétences
            </Button>
          )}
        </div>
      </Card.Body>
      <Card.Footer className="project-card-footer">
        <Badge className="project-badge">{badge}</Badge>
      </Card.Footer>
    </Card>
  );
}
