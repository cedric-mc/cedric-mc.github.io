import { Carousel, CarouselItem, Modal, ModalBody, ModalFooter, ModalHeader } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Project } from "../../types/types";

interface ProjectCarouselProps {
  children?: React.ReactNode;
  show: boolean;
  onClose: () => void;
  project: Project;
  theme: string;
}

export function ProjectCarousel({ children, show, onClose, project, theme }: ProjectCarouselProps) {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    const images: Record<string, { default: string }> = import.meta.glob('@assets/projects/*.{png,jpg,svg}', { eager: true });

    setImages(Object.keys(images).filter((key) => key.includes(project.carousel.prefix)).map((key) => images[key].default));
  }, [project.carousel.prefix]);

  return (
    <Modal show={show} onHide={onClose} data-bs-theme={theme} size="xl" backdrop="static">
      <ModalHeader closeButton>
        <Modal.Title>{project.title}</Modal.Title>
      </ModalHeader>
      <ModalBody>
        {project.children && <><div className="mb-3" dangerouslySetInnerHTML={{ __html: project.children }}>{children}<hr /></div></>}
        <Carousel fade data-bs-theme={project.carousel.theme}>
          {images.map((src, index) => (
            <CarouselItem key={index}>
              <img src={src} className="d-block w-100" alt={`${project.carousel.altPrefix} ${index + 1}`} />
            </CarouselItem>
          ))}
        </Carousel>
      </ModalBody>
      <ModalFooter>
        {/* {project.carousel.altPrefix} */}
        {project.code && (<><a href={project.code} target="_blank" rel="noreferrer"><span className="code-icon spinner" /></a><br /></>)}
        {project.doc && (<a href={project.doc} target="_blank" rel="noreferrer"><span className="documentation-icon spinner" /></a>)}
      </ModalFooter>
    </Modal>
  );
}