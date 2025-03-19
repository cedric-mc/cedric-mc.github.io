import { Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { ProjectCarousel } from "./ProjectCarousel";

interface ProjectModalProps {
  show: boolean;
  onClose: () => void;
  carousel: {
    prefix: string,
    altPrefix: string,
  };
  theme: string;
}

export function ProjectModal({ show, onClose, carousel, theme }: ProjectModalProps) {
  return (
    <Modal show={show} onHide={onClose} size="xl" data-bs-theme={theme} backdrop="static">
      <ModalHeader closeButton>
        <Modal.Title>Projet</Modal.Title>
      </ModalHeader>
      <ModalBody>
        <ProjectCarousel prefix={carousel.prefix} altPrefix={carousel.altPrefix} />
      </ModalBody>
      <ModalFooter>
        {carousel.altPrefix}
      </ModalFooter>
    </Modal>
  );
}