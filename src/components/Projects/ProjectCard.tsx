import { Card, Button, Badge } from "react-bootstrap";

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
      className="g-4 h-100"
      bg={theme}
      text={theme === "dark" ? "light" : "dark"}
      style={{ minHeight: "20rem" }}
      data-bs-theme={theme}
    >
      <Card.Header>{header}</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{subtitle}</Card.Subtitle>
        <Card.Text className="text-justify">
          {text.length > 150 ? text.slice(0, 150) + "..." : text} {/* Tronque le texte */}
        </Card.Text>
        <Button variant="primary" onClick={onProjectClick}>Voir le projet</Button>
        {isEtudes === true && <Button variant="secondary" className="ms-2" onClick={onEtudesClick}>Voir les compétences</Button>}
      </Card.Body>
      <Card.Footer>
        <Badge className="project-badge">{badge}</Badge>
      </Card.Footer>
    </Card>
  );
}
