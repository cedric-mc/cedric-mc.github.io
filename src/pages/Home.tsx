export function Home() {
    return (
        <div className='home'>
            <h1 className='home-title'>Bienvenue sur mon portfolio</h1>
            <p className='home-text'>
                Je suis un développeur web passionné par les nouvelles technologies et les défis techniques.
            </p>
            <p className='home-text'>
                J'aime apprendre et me perfectionner dans de nombreux domaines, notamment le développement web, le développement mobile et l'intelligence artificielle.
            </p>
            <p className='home-text'>
                Vous trouverez sur ce site mes compétences, mes projets et mon parcours.
            </p>
            <p className='home-text'>
                N'hésitez pas à me contacter pour plus d'informations.
                <br/>
                Bonne visite !
            </p>
            {/* TODO: Faire une page avec les évènements d'un dépôt GitHub */}
            {/* TODO: Indiquer si possible à l'aide de Google Analytics le nombre de visiteurs en tout + le nombre de visiteurs de la journée en mode debug */}
        </div>
    );
}