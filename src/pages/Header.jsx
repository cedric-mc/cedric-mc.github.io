import '../css/header.css';

function Header() {
    return (
        <header id="header">
            <div id="name-container">
                <h1 className="name lobster-regular">Cédric Mariya Constantine</h1>
                <div id="wrapper">
                    <h2 className="etudiant-animation yatra-one-regular">Étudiant en informatique</h2>
                    <div id="theme-display"></div>
                </div>
            </div>
        </header>
    );
}

export default Header;