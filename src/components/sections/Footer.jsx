import '../../css/sections/Footer.css';
import React from 'react';
import Container from "react-bootstrap/Container";
import {Button, Col, Form, FormControl, FormGroup, FormLabel, Row} from "react-bootstrap";

function Footer() {
    return (
        <footer id="footer" className="footer">
            <Container>
                <Row>
                    <Col md={6}>
                        <h4>Réseaux sociaux</h4>
                        <ul id="social-networks">
                            <li>
                                <a className="link" href="https://github.com/cedric-mc" target="_blank" rel="noreferrer">
                                    <img className="p-img" src="img/skills/github.png" alt="github"/> GitHub
                                </a>
                            </li>
                            <li>
                                <a className="link" href="https://www.linkedin.com/in/cédric-mariya-constantine-a3a52325a/" target="_blank" rel="noreferrer">
                                    <img className="p-img" src="img/linkedin.png" alt="linkedin"/> Linkedin
                                </a>
                            </li>
                        </ul>
                        {/*<h4><a class="link" href="mentions-legales.php">Mentions légales</a></h4>*/}
                        <br/>
                        {/*<p>Vous pouvez trouver la documentation du site qui est en français <a href="https://cedric-mc.github.io">ici</a>. 👈</p>*/}
                        <br/>
                        <p>© par Cédric Mariya Constantine</p>
                    </Col>
                    <Col md={6}>
                        <h4 id="contact">Contactez-moi</h4>
                        <Form method="post">
                            <FormGroup className="mb-1" controlId="nomInput">
                                <FormLabel column="sm">Nom</FormLabel>
                                <FormControl type="text" name="nom" placeholder="Votre nom" required />
                            </FormGroup>
                            <FormGroup className="mb-1" controlId="emailInput">
                                <FormLabel column="sm">Email</FormLabel>
                                <FormControl type="email" name="email" placeholder="exemple@domaine.com" required />
                            </FormGroup>
                            <FormGroup className="mb-3" controlId="messageInput">
                                <FormLabel column="sm">Message</FormLabel>
                                <FormControl as="textarea" rows="3" name="message" placeholder="Votre message"></FormControl>
                            </FormGroup>
                            <Button type="submit" variant="success">Envoyer</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
