import { NavLink } from "react-router";

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
                <li><NavLink to="/projects?selected=AtlasGN" className="nav-link link-opacity-75-hover">Atlas</NavLink></li>
                <li><NavLink to="/projects?selected=INGRID" className="nav-link link-opacity-75-hover">Projet I.N.G.R.I.D</NavLink></li>
                <li><NavLink to="/projects?selected=SEMONKEY" className="nav-link link-opacity-75-hover">Semonkey</NavLink></li>
                <li><NavLink to="/projects?selected=CNIL" className="nav-link link-opacity-75-hover">Contrôles CNIL</NavLink></li>
                <li><NavLink to="/projects?selected=TP_PAREFEU" className="nav-link link-opacity-75-hover">TP Pare-feu et translation d'adresse</NavLink></li>
                <li><NavLink to="/projects?selected=BANKLINK" className="nav-link link-opacity-75-hover">Banklink</NavLink></li>
                <li><NavLink to="/projects?selected=TOLEDO" className="nav-link link-opacity-75-hover">Toledo</NavLink></li>
                <li><NavLink to="/projects?selected=HEDELMA" className="nav-link link-opacity-75-hover">Hedelma</NavLink></li>
                <li><NavLink to="/projects?selected=BDB" className="nav-link link-opacity-75-hover">Bataille de Boules</NavLink></li>
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
                <li><NavLink to="/projects?selected=AtlasGN" className="nav-link link-opacity-75-hover">Atlas</NavLink></li>
                <li><NavLink to="/projects?selected=BANKLINK" className="nav-link link-opacity-75-hover">Banklink</NavLink></li>
                <li><NavLink to="/projects?selected=BDB" className="nav-link link-opacity-75-hover">Bataille de Boules</NavLink></li>
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
                <li><NavLink to="/projects?selected=INGRID" className="nav-link link-opacity-75-hover">Projet I.N.G.R.I.D</NavLink></li>
                <li><NavLink to="/projects?selected=SEMONKEY" className="nav-link link-opacity-75-hover">Semonkey</NavLink></li>
                <li><NavLink to="/projects?selected=CNIL" className="nav-link link-opacity-75-hover">Contrôles CNIL</NavLink></li>
              </ul>
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}