import { NavLink } from "react-router";

export function SkillsUniv() {
  return (
    <section id="skills">
      <h2 className="title-section">Mes blocs de compétences</h2>
      <p>Voici les différents blocs de compétences que j'ai acquis durant ma formation :</p>
      <div>
        <h3 className="subtitle-section">Compétences académiques</h3>
        <ul className="">
          <li>
            <h4 className="subtitle-list">Réaliser :</h4>
            <p className="mb-2 text-justify">
              Adapter des applications sur un ensemble de supports (embarqué, web, mobile, loT ...). 
              Cette compétence permet de réaliser des applications sur un ensemble de supports et de systèmes d'exploitation.
              Elle se distingue par le fait qu'il faut réaliser/faire des applications/systèmes/outils/programmes.
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
              Analyser et optimiser des applications. 
              Cette compétence permet d'analyser et d'optimiser des applications comme le fait de les tester, de les profiler, de les déboguer, de les surveiller, de les auditer, de les monitorer, de les sécuriser, de les maintenir et/ou de les faire évoluer.
              Elle se distingue par le fait qu'il faut optimiser/faire évoluer des applications/systèmes/outils/programmes.
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
              Manager une équipe informatique. 
              Cette compétence permet de manager une équipe informatique comme le fait de la gérer, de la coordonner, de la diriger, de la superviser, de la piloter, de la contrôler, de l'animer et/ou de l'encadrer.
              Elle se distingue par le fait qu'il faut manager/diriger une équipe/système/outils/programmes.
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