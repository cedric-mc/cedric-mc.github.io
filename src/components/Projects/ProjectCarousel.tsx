import { useEffect, useState } from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

interface ProjectCarouselProps {
  prefix: string;
  altPrefix: string;
}

export function ProjectCarousel({ prefix, altPrefix }: ProjectCarouselProps) {
  const [images, setImages] = useState<string[]>([]);
  
  useEffect(() => {
    const images: Record<string, { default: string }> = import.meta.glob('@assets/projects/*.{png,jpg,svg}', { eager: true });

    setImages(Object.keys(images).filter((key) => key.includes(prefix)).map((key) => images[key].default));
  }, [prefix]);

  return (
    <Carousel fade>
      {images.map((src, index) => (
        <CarouselItem key={index}>
          <img src={src} className="d-block w-100" alt={`${altPrefix} ${index + 1}`} />
        </CarouselItem>
      ))}
    </Carousel>
  );
}
