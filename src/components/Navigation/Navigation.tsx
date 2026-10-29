import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap";
import { IconText } from "../IconText";
import { ThemeSelector } from "./ThemeSelector";
import '@styles/components/Navigation.css';
import home from '@assets/navbar/home.png';
import parcours from '@assets/navbar/parcours.png';
import skills from '@assets/navbar/skills.png';
import projects from '@assets/navbar/projects.png';
import contact from '@assets/navbar/contact.png';
import { Link } from "react-router";
import { useEtudes } from "../../hooks/useEtudes";

export function Navigation() {
  const isEtudes = useEtudes();

  return (
    <Navbar expand="lg" fixed="top" data-bs-theme="auto">
      <Container fluid>
        <Link to="/" className="navbar-brand">
          <NavbarBrand>
            <img alt="" src={home} className="d-inline-block align-text-top spinner" />{' '} Accueil
          </NavbarBrand>
        </Link>
        <Navbar.Toggle aria-controls="navbar" className="justify-content-end" />
        <NavbarCollapse id="navbar">
          <Nav className="navbar-nav custom-navbar-nav navbar-nav-scroll">
            <Link to="#about-me" className="nav-link">
              <IconText icon={parcours} text="Qui suis-je ?" />
            </Link>
            <Link to="#parcours" className="nav-link">
              <IconText icon={parcours} text="Parcours" />
            </Link>
            <Link to={isEtudes ? "#skills" : "#skills"} className="nav-link">
              <IconText icon={skills} text="Compétences" />
            </Link>
            <Link to="#projects" className="nav-link">
              <IconText icon={projects} text="Projets" />
            </Link>
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
