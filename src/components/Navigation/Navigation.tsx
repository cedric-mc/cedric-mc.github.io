import '@styles/components/Navigation.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container, NavbarBrand, NavbarCollapse } from "react-bootstrap";
import { IconText } from "../IconText";
import { ThemeSelector } from "./ThemeSelector";
import home from '@assets/navbar/home.png';
import parcours from '@assets/navbar/parcours.png';
import skills from '@assets/navbar/skills.png';
import projects from '@assets/navbar/projects.png';
import contact from '@assets/navbar/contact.png';
import { useEtudes } from "../../hooks/useEtudes";

export function Navigation() {
  const isEtudes = useEtudes();

  return (
    <Navbar expand="lg" fixed="top" data-bs-theme="auto">
      <Container fluid>
        <NavbarBrand href="#top-page">
          <img alt="Accueil" src={home} className="d-inline-block align-text-top spinner" />{' '} Accueil
        </NavbarBrand>
        <Navbar.Toggle aria-controls="navbar" className="justify-content-end" />
        <NavbarCollapse id="navbar">
          <Nav className="navbar-nav custom-navbar-nav navbar-nav-scroll">
            <Nav.Link href="#about-me">
              <IconText icon={parcours} text="Parcours" />
            </Nav.Link>
            <Nav.Link href={isEtudes ? "#skills-univ" : "#skills"}>
              <IconText icon={skills} text="Compétences" />
            </Nav.Link>
            <Nav.Link href="#projects">
              <IconText icon={projects} text="Projets" />
            </Nav.Link>
            <Nav.Link href="#contact">
              <IconText icon={contact} text="Me Contacter" />
            </Nav.Link>
            <ThemeSelector />
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
};
