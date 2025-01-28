import '../../css/sections/Skills.css';

export default function Skills() {
    return (
        <section id="skills">
            <h2 className="title-section">Mes Compétences</h2>
                <p>Voici les langages informatiques, frameworks, bibliothèques, logiciels et outils que je maîtrise :</p>
                <div>
                    <h3 className="subtitle-section">Langages informatiques :</h3>
                    <ul className="skills-list">
                        <li><img className="spinner" src="img/skills/html.png" alt=""/>&nbsp;HTML</li>
                        <li><img className="spinner" src="img/skills/css.png" alt=""/>&nbsp;CSS</li>
                        <li><img className="spinner" src="img/skills/js.png" alt=""/>&nbsp;JavaScript</li>
                        <li><img className="spinner" src="img/skills/ts.png" alt=""/>&nbsp;TypeScript</li>
                        <li><img className="spinner" src="img/skills/php.png" alt=""/>&nbsp;PHP</li>
                        <li><img className="spinner" src="img/skills/python.png" alt=""/>&nbsp;Python</li>
                        <li><img className="spinner" src="img/skills/java.png" alt=""/>&nbsp;Java</li>
                        <li><img className="spinner" src="img/skills/c.png" alt=""/>&nbsp;C</li>
                        <li><img className="spinner" src="img/skills/sql.png" alt=""/>&nbsp;SQL</li>
                        <li><img className="spinner" src="img/skills/xml.png" alt=""/>&nbsp;XML</li>
                        <li><img className="spinner" src="img/skills/json.png" alt=""/>&nbsp;JSON</li>
                        <li><img className="spinner" src="img/skills/markdown.png" alt=""/>&nbsp;Markdown</li>
                        {/*<li<img className="spinner" src="img/skills/latex.png" alt=""/>&nbsp;LaTeX</li>*/}
                        <li><img className="spinner" src="img/skills/shell.png" alt=""/>&nbsp;Shell</li>
                    </ul>
                    <h3 className="subtitle-section">Frameworks et bibliothèques :</h3>
                    <ul className="skills-list">
                        <li><img className="spinner" src="img/skills/bootstrap.png" alt=""/>&nbsp;Bootstrap</li>
                        <li><img className="spinner" src="img/skills/jquery.png" alt=""/>&nbsp;jQuery</li>
                        <li><img className="spinner" src="img/skills/react.png" alt=""/>&nbsp;React</li>
                        <li><img className="spinner" src="img/skills/nodejs.png" alt=""/>&nbsp;Node.js</li>
                        <li><img className="spinner" src="img/skills/junit.png" alt=""/>&nbsp;JUnit</li>
                        <li><img className="spinner" src="img/skills/maven.png" alt=""/>&nbsp;Maven</li>
                        <li><img className="spinner" src="img/skills/mysql.png" alt=""/>&nbsp;MySQL</li>
                        <li><img className="spinner" src="img/skills/postgresql.png" alt=""/>&nbsp;PostgreSQL</li>
                    </ul>
                    <h3 className="subtitle-section">Logiciels et outils :</h3>
                    <ul className="skills-list">
                        <li><img className="spinner" src="img/skills/vscode.png" alt=""/>&nbsp;Visual Studio Code</li>
                        <li><img className="spinner" src="img/skills/git.png" alt=""/>&nbsp;Git</li>
                        <li><img className="spinner" src="img/skills/github.png" alt=""/>&nbsp;GitHub</li>
                        <li><img className="spinner" src="img/skills/jetbrains.png" alt=""/>&nbsp;JetBrains</li>
                        <li><img className="spinner" src="img/skills/eclipse.png" alt=""/>&nbsp;Eclipse</li>
                    </ul>
                </div>
        </section>
    );
}
