import { Container, Nav, Navbar, NavbarBrand, NavbarCollapse } from "react-bootstrap";
import { IconText } from "./IconText";
import { ThemeSelector } from "./ThemeSelector";
import '@styles/components/Navigation.css'; // TODO: Déplacer le fichier CSS
import home from '@assets/navbar/home.png';
import parcours from '@assets/navbar/parcours.png';
import skills from '@assets/navbar/skills.png';
import projects from '@assets/navbar/projects.png';
import contact from '@assets/navbar/contact.png';
import { NavLink } from "react-router";

export function Navigation() {
  return (
    <Navbar expand="lg" fixed="top" data-bs-theme="auto">
      <Container fluid>
        <NavLink to="/" className="navbar-brand">
          <NavbarBrand>
            <img alt="" src={home} className="d-inline-block align-text-top spinner" />{' '} Accueil
          </NavbarBrand>
        </NavLink>
        <Navbar.Toggle aria-controls="navbar" className="justify-content-end" />
        <NavbarCollapse id="navbar">
          <Nav className="navbar-nav custom-navbar-nav navbar-nav-scroll">
            <NavLink to="/parcours" className="nav-link">
              <IconText icon={parcours} text="Parcours" />
            </NavLink>
            <NavLink to="/skills" className="nav-link">
              <IconText icon={skills} text="Compétences" />
            </NavLink>
            <NavLink to="/projects" className="nav-link">
              <IconText icon={projects} text="Projets" />
            </NavLink>
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
