import '@styles/pages/Skills.css';
import html from '@assets/skills/html.png';
import css from '@assets/skills/css.png';
import js from '@assets/skills/js.png';
import ts from '@assets/skills/ts.png';
import php from '@assets/skills/php.png';
import python from '@assets/skills/python.png';
import java from '@assets/skills/java.png';
import c from '@assets/skills/c.png';
import sql from '@assets/skills/sql.png';
import xml from '@assets/skills/xml.png';
import json from '@assets/skills/json.png';
import markdown from '@assets/skills/markdown.png';
// import latex from '@assets/skills/latex.png';
import shell from '@assets/skills/shell.png';
import bootstrap from '@assets/skills/bootstrap.png';
import jquery from '@assets/skills/jquery.png';
import react from '@assets/skills/react.png';
import nodejs from '@assets/skills/nodejs.png';
import junit from '@assets/skills/junit.png';
import maven from '@assets/skills/maven.png';
import mysql from '@assets/skills/mysql.png';
import postgresql from '@assets/skills/postgresql.png';
import vscode from '@assets/skills/vscode.png';
import git from '@assets/skills/git.png';
import github from '@assets/skills/github.png';
import jetbrains from '@assets/skills/jetbrains.png';
import laravel from '@assets/skills/laravel.png';

export function Skills() {
  return ( // TODO: Essayer de voir pour les sprites CSS
    <section id="skills">
      <h2 className="title-section">Mes Compétences</h2>
      <p>Voici les langages informatiques, frameworks, bibliothèques, logiciels et outils que je maîtrise :</p>
      <div>
        <h3 className="subtitle-section">Langages informatiques :</h3>
        <ul className="skills-list">
          <li><img className="spinner" src={html} alt="" />&nbsp;HTML</li>
          <li><img className="spinner" src={css} alt="" />&nbsp;CSS</li>
          <li><img className="spinner" src={js} alt="" />&nbsp;JavaScript</li>
          <li><img className="spinner" src={ts} alt="" />&nbsp;TypeScript</li>
          <li><img className="spinner" src={php} alt="" />&nbsp;PHP</li>
          <li><img className="spinner" src={python} alt="" />&nbsp;Python</li>
          <li><img className="spinner" src={java} alt="" />&nbsp;Java</li>
          <li><img className="spinner" src={c} alt="" />&nbsp;C</li>
          <li><img className="spinner" src={sql} alt="" />&nbsp;SQL</li>
          <li><img className="spinner" src={xml} alt="" />&nbsp;XML</li>
          <li><img className="spinner" src={json} alt="" />&nbsp;JSON</li>
          <li><img className="spinner" src={markdown} alt="" />&nbsp;Markdown</li>
          {/* <li><img className="spinner" src={latex} alt=""/>&nbsp;LaTeX</li> */}
          <li><img className="spinner" src={shell} alt="" />&nbsp;Shell</li>
        </ul>
        <h3 className="subtitle-section">Frameworks et bibliothèques :</h3>
        <ul className="skills-list">
          <li><img className="spinner" src={bootstrap} alt="" />&nbsp;Bootstrap</li>
          <li><img className="spinner" src={jquery} alt="" />&nbsp;jQuery</li>
          <li><img className="spinner" src={react} alt="" />&nbsp;React</li>
          <li><img className="spinner" src={nodejs} alt="" />&nbsp;Node.js</li>
          <li><img className="spinner" src={junit} alt="" />&nbsp;JUnit</li>
          <li><img className="spinner" src={maven} alt="" />&nbsp;Maven</li>
          <li><img className="spinner" src={mysql} alt="" />&nbsp;MySQL</li>
          <li><img className="spinner" src={postgresql} alt="" />&nbsp;PostgreSQL</li>
          <li><img className='spinner' src={laravel} alt='' />&nbsp;Laravel</li>
        </ul>
        <h3 className="subtitle-section">Logiciels et outils :</h3>
        <ul className="skills-list">
          <li><img className="spinner" src={vscode} alt="" />&nbsp;Visual Studio Code</li>
          <li><img className="spinner" src={git} alt="" />&nbsp;Git</li>
          <li><img className="spinner" src={github} alt="" />&nbsp;GitHub</li>
          <li><img className="spinner" src={jetbrains} alt="" />&nbsp;JetBrains</li>
        </ul>
      </div>
    </section>
  );
};