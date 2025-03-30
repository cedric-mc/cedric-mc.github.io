import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";

interface ProjectStudiesProps {
  show: boolean;
  onClose: () => void;
  project: {
    title: string;
  };
  theme: string;
}

export function ProjectStudies({ show, onClose, project, theme }: ProjectStudiesProps) {
  return (
    <Modal show={show} onHide={onClose} data-bs-theme={theme} size="xl" backdrop="static">
      <ModalHeader closeButton>
        <Modal.Title>{project.title} - Études</Modal.Title>
      </ModalHeader>
      <ModalBody>
      </ModalBody>
      <ModalFooter>
      </ModalFooter>
    </Modal>
  )
}