import '../../css/sections/nav.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavbarBrand, NavbarCollapse} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faUserTie } from "@fortawesome/free-solid-svg-icons";

function iconText(icon, text) {
    /* Si l'icone est un string, on retourne un span contenant l'icone et le texte */
    if (typeof icon === "string") {
        return (
            <span>
                <img alt="" src={icon} className="d-inline-block align-text-top spinner"/>{' '}
                {text}
            </span>
        );
    } else if (typeof icon === "object") {
        return (
            <span>
                {icon}{' '}
                {text}
            </span>
        );
    }
}
/* TODO: Enlever le font-size dans animation.css */
function Navigation() {
    return (
        <Navbar expand="lg" sticky="top" data-bs-theme="auto">
            <Container fluid>
                <NavbarBrand href="#top-page">
                    <img
                        alt=""
                        src="/img/navbar/home.png"
                        className="d-inline-block align-text-top spinner"
                    />{' '}
                    Accueil
                </NavbarBrand>
                <Navbar.Toggle aria-controls="navbar" className="justify-content-end"/>
                <NavbarCollapse id="navbar">
                    <Nav className="navbar-nav custom-navbar-nav navbar-nav-scroll">
                        <Nav.Link href="#about-me">
                            {iconText("/img/navbar/about-me.png", "Me Connaître")}
                        </Nav.Link>
                        <Nav.Link href="#parcours">
                            {iconText("/img/navbar/parcours.png", "Parcours")}
                        </Nav.Link>
                        <Nav.Link href="#skills">
                            {iconText("/img/navbar/skills.png", "Compétences")}
                        </Nav.Link>
                        <NavDropdown title={iconText("/img/navbar/projects.png", "Projets")}>
                            <NavDropdown.Item href="#projets/projects-pro">
                                <FontAwesomeIcon icon={faUserTie} className="spinner" />{' '}
                                Projets Professionnels
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#projets/projects-univ">
                                <FontAwesomeIcon icon={faBuildingColumns} className="spinner" />{' '}
                                Projets Universitaires
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#contact">
                            {iconText("/img/navbar/contact.png", "Me Contacter")}
                        </Nav.Link>
                        <NavDropdown title={iconText("/img/navbar/colors.png", "Apparence")}>
                            <NavDropdown.Item data-bs-theme-toggle data-bs-theme-value="light">
                                <svg className="spinner">
                                    <use xlinkHref="#sun-fill"></use>
                                </svg>{' '}
                                Clair
                            </NavDropdown.Item>
                            <NavDropdown.Item data-bs-theme-toggle data-bs-theme-value="dark">
                                <svg className="spinner">
                                    <use xlinkHref="#moon-stars-fill"></use>
                                </svg>{' '}
                                Sombre
                            </NavDropdown.Item>
                            <NavDropdown.Item data-bs-theme-toggle data-bs-theme-value="auto">
                                <svg className="spinner">
                                    <use xlinkHref="#circle-half"></use>
                                </svg>{' '}
                                Auto
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;
