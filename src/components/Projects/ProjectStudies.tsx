import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { Project } from "../../types/types";

interface ProjectStudiesProps {
  show: boolean;
  onClose: () => void;
  project: Project;
  theme: string;
}

export function ProjectStudies({ show, onClose, project, theme }: ProjectStudiesProps) {
  return (
    <Modal show={show} onHide={onClose} data-bs-theme={theme} size="xl" backdrop="static">
      <ModalHeader closeButton>
        <Modal.Title>{project.header}</Modal.Title>
      </ModalHeader>
      <ModalBody>
        <div className="mb-3">
          <p>{project.text}</p>
          <hr />
          <h5>Compétences acquises</h5>
          <ul>
            {project.etudes}
          </ul>
        </div>
      </ModalBody>
      <ModalFooter>
      </ModalFooter>
    </Modal >
  )
}