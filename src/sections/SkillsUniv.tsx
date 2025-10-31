import { Nav } from "react-bootstrap";

export function SkillsUniv() {
  return (
    <section id="skills">
      <h2 className="title-section">Mes blocs de compétences</h2>
      <p>Voici les différents blocs de compétences que j'ai acquis durant ma formation :</p>
      <div>
        <h3 className="subtitle-section">Blocs de compétences</h3>
        <ul className="">
          <li>
            <h4 className="subtitle-list">Réaliser :</h4>
            <p>
              Adapter des applications sur un ensemble de supports (embarqué, web, mobile, loT ...)
            </p>
            <p>
              Projets associés au bloc de compétences : <br />
              <ul>
                <li><Nav.Link href="#projects?selected=AtlasGN" className="nav-link link-opacity-75-hover">Atlas</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=INGRID" className="nav-link link-opacity-75-hover">Projet I.N.G.R.I.D</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=SEMONKEY" className="nav-link link-opacity-75-hover">Semonkey</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=CNIL" className="nav-link link-opacity-75-hover">Contrôles CNIL</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=TP_PAREFEU" className="nav-link link-opacity-75-hover">TP Pare-feu et translation d'adresse</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=BANKLINK" className="nav-link link-opacity-75-hover">Banklink</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=TOLEDO" className="nav-link link-opacity-75-hover">Toledo</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=HEDELMA" className="nav-link link-opacity-75-hover">Hedelma</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=BDB" className="nav-link link-opacity-75-hover">Bataille de Boules</Nav.Link></li>
              </ul>
            </p>
          </li>
          <li>
            <h4 className="subtitle-list">Optimiser</h4>
            <p>
              Analyser et optimiser des applications
            </p>
            <p>
              Projets associés au bloc de compétences : <br />
              <ul>
                <li><Nav.Link href="#projects?selected=AtlasGN" className="nav-link link-opacity-75-hover">Atlas</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=BANKLINK" className="nav-link link-opacity-75-hover">Banklink</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=BDB" className="nav-link link-opacity-75-hover">Bataille de Boules</Nav.Link></li>
              </ul>
            </p>
          </li>
          <li>
            <h4 className="subtitle-list">Collaborer</h4>
            <p>
              Manager une équipe informatique
            </p>
            <p>
              Projets associés au bloc de compétences : <br />
              <ul>
                <li><Nav.Link href="#projects?selected=INGRID" className="nav-link link-opacity-75-hover">Projet I.N.G.R.I.D</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=SEMONKEY" className="nav-link link-opacity-75-hover">Semonkey</Nav.Link></li>
                <li><Nav.Link href="#projects?selected=CNIL" className="nav-link link-opacity-75-hover">Contrôles CNIL</Nav.Link></li>
              </ul>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}