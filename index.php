<!DOCTYPE html>
<html>
    <head>
        <title>Cédric Mariya Constantine | Portfolio</title>
        <!-- Balises meta -->
        <meta charset="UTF-8">
        <meta name="Author" content="Mariya Constantine Cédric">
        <meta name="Made" content="mariyaconsta02@edu.univ-eiffel.fr">
        <meta name="description" content="Étudiant en BUT informatique à l'IUT Marne la Vallée. Voici mon Portfolio pour mieux me connaître.">
        <meta name="keywords" content="portfolio, développement web, but, informatique, Cédric Mariya Constantine">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="robots" content="index,follow">
        <!-- Balises meta -->
        <!-- Balises link -->
        <link rel="shortcut icon" href="img/favicon.png"><!-- Favicon -->
        <link rel="stylesheet" href="style/style.css">
        <link rel="stylesheet" href="style/animation.css">
        <link rel="stylesheet" href="style/fonts.css">
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
        <!-- Balises link -->
        <style>
            pre {
                font-family: 'Courier New', Courier, monospace;
            }

            code {
                font-family: 'Courier New', Courier, monospace;
            }

            .login-info {
                width: 300px;
                margin: 0 auto;
            }

            .login-info table {
                width: 100%;
                border-collapse: collapse;
            }

            .login-info td {
                padding: 5px;
            }

            .login-info td:first-child {
                text-align: right;
                font-weight: bold;
            }

        </style>
        <!-- Fichiers CSS -->
    </head>

    <body class="full-page">
        <div id="arrow-container" style="display: none;">
            <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100.000000 100.000000">
                <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)" stroke="none">
                    <path d="M0 737 l0 -193 245 -237 c135 -130 250 -237 255 -237 5 0 120 107
                        255 237 l245 237 0 193 c0 148 -3 193 -12 193 -7 0 -118 -101 -246 -225 -129
                        -124 -237 -225 -242 -225 -4 0 -113 101 -241 225 -129 124 -240 225 -246 225
                        -10 0 -13 -45 -13 -193z m265 -82 c123 -118 228 -215 235 -215 7 0 113 97 235
                        215 123 118 225 215 229 215 3 0 6 -71 5 -157 l0 -158 -230 -220 c-126 -121
                        -234 -220 -239 -220 -5 0 -113 99 -239 220 l-230 220 0 158 c-1 86 2 157 5
                        157 4 0 107 -97 229 -215z"></path>
                </g>
            </svg>
        </div>
        <!-- Navbar, Navigation -->
        <nav class="navbar sticky-top navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#top-page">
                    <img src="img/navbar/home.png" class="d-inline-block align-text-top" alt="icon home">
                    Accueil
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav custom-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#about-me">
                                <img src="img/navbar/about-me.png" class="d-inline-block align-text-top nav-img" alt="icon me"> Me Connaître
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#skills">
                                <img src="img/navbar/skills.png" class="d-inline-block align-text-top" alt="icon skills"> Compétences
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#projects">
                                <img src="img/navbar/projects.png" class="d-inline-block align-text-top" alt="icon projects"> Projets
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#contact">
                                <img src="img/navbar/contact.png" class="d-inline-block align-text-top" alt="icon contact"> Me Contacter
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar, Navigation -->




        <!-- Header -->
        <header id="top-page">
            <div id="name-container">
                <h1 class="name">Cédric Mariya Constantine</h1>
                <div id="wrapper">
                    <h2 class="etudiant-animation">Étudiant en Informatique</h2>
                </div>
            </div>
        </header>
        <!-- Header -->

        <!-- Main -->
        <main id="home">
            <section id="about-me">
                <div class="container">
                    <h2 class="title-section text-left">Qui suis-je ?</h2>
                    <div class="row">
                        <div class="col-6">
                            <p>
                                Je suis un étudiant à l'Université de Gustave Eiffel en 2<sup>ème</sup> année du BUT Informatique.<br>
                                Je suis actuellement en recherche d'un contrat en alternance.<br>
                                Je suis à la recherche d'une entreprise qui me permettra de mettre en pratique mes connaissances et mes compétences dans le domaine du développement informatique.
                                <br>
                                Tout au long de ce portfolio, vous trouverez des liens menant vers mes différents projets
                                <img class="p-img" src="img/code.png" alt="Code Icon" title="Code Icon"> ou leur documentation
                                <img class="p-img" src="img/documentation.png" alt="Documentation Icon" title="Documentation Icon">.
                                <br>
                                Je vous invite à me découvrir à travers ce Portfolio, tout en prenant une petite collation !
                            </p>
                            <p>
                                Voici mon CV, il est à votre disposition :
                                <a class="btn btn-danger heartbeat heartbeat-hover text-light" href="doc/CV_CEDRIC_MARIYA CONSTANTINE.pdf" target="_blank">Télécharger</a>
                                <br>
                            </p>
                            <p>
                                Je maîtrise différentes langues en dehors du français : l'Anglais <img class="p-img" src="img/navbar/eng.png" alt="icon flag english">
                                bien entendu et le Tamil <img class="p-img" src="img/tamil.png" alt="icon flag tamil"> (langue maternelle).
                            </p>
                        </div>
                        <div class="col-6 profil-photo-container">
                            <img src="img/Cedric.png" alt="Photo de profil" class="profil-photo img-fluid">
                        </div>
                    </div>
                </div>
            </section>


            <section id="parcours">
                <h2 class="title-section">Mon Parcours</h2>
                <p>
                <h3>Mon Parcours de Formation</h3>
                <ul>
                    <li class="list-group-item">
                        <h4>BUT Informatique</h4>
                        <p>
                            <span class="italic-text">2022 - 2025</span>
                            <br>
                            <span class="italic-text">Université Gustave Eiffel</span>
                            <br>
                            <span class="italic-text">Champs-sur-Marne</span>
                            <br>
                            <span class="italic-text">Parcours A : Réalisation d’applications : conception, développement, validation</span>
                        </p>
                    </li>
                    <li class="list-group-item">
                        <h4>BAC STI2D</h4>
                        <p>
                            <span class="italic-text">2020 - 2022</span>
                            <br>
                            <span class="italic-text">Lycée Gaston Bachelard</span>
                            <br>
                            <span class="italic-text">Chelles</span>
                            <br>
                            <span class="italic-text">Spécialité SIN : Système d'Information et Numérique</span>
                        </p>
                    </li>
                </ul>
                <h3>Mon Parcours Professionnel</h3>
                <ul>
                    <li class="list-group-item">
                        <h4>Stage d'observation de 3<sup>ème</sup></h4>
                        <p>
                            <span class="italic-text">Semaine du lundi 4 au samedi 9 février 2019</span>
                            <br>
                            <span class="italic-text">Bulles Dogs</span>
                            <br>
                            <span class="italic-text">Chelles</span>
                            <br>
                            <span class="italic-text">Toilettage canin</span>
                        </p>
                    </li>
                </ul>
            </section>


            <section id="skills">
                <h2 class="title-section">Mes Compétences</h2>
                <p>
                    Je suis actuellement en 2<sup>ème</sup> année de BUT Informatique avec le Parcours de Réalisation d'applications : Conception, Développement et Validation.
                    <br>
                    Formation :
                    <br>
                    BUT Informatique, Parcours A : Réalisation d’applications : conception, développement, validation.
                </p>
                <ul class="list-group-item">
                    <li>Développement d'applications informatiques : conception, codage, communication client, respect des besoins, algorithmes, qualité du code, conformité, choix de ressources.</li>
                    <li>Optimisation d'applications informatiques : performance, ressources, modélisation, algorithmes, raisonnement, validation.</li>
                    <li>Administration de systèmes informatiques : installation, configuration, sécurité, maintenance, performance, conformité, pérennité, gestion d'incidents.</li>
                    <li>Gestion de données d'information : conformité, enjeux, bases mathématiques, qualité.</li>
                    <li>Conduite de projet : besoins utilisateurs, organisation, communication, éthique.</li>
                    <li>Travail en équipe informatique : collaboration, évolutions, conformité, communication.</li>
                </ul>
                <span class="badge text-bg-info">HTML <img class="badge-img p-img" src="img/languages/html.png" alt="icon html"></span>
                <span class="badge text-bg-success">CSS <img class="badge-img p-img" src="img/languages/css.png" alt="icon css"></span>
                <span class="badge text-bg-dark">PHP <img class="badge-img p-img" src="img/languages/php.png" alt="icon php"></span>
                <span class="badge text-bg-danger">SQL <img class="badge-img p-img" src="img/languages/sql.png" alt="icon sql"></span>
                <span class="badge text-bg-primary">Python <img class="badge-img p-img" src="img/languages/python.png" alt="icon python"></span>
                <span class="badge text-bg-light">Java <img class="badge-img p-img" src="img/languages/java.png" alt="icon java"></span>
                <span class="badge text-bg-secondary">C <img class="badge-img p-img" src="img/languages/c.png" alt="icon c"></span>
            </section>


            <section id="projects">
                <!--<h2 class="title-section">Mes Projets</h2>
                <p>
                    Ceci <img class="p-img" src="img/code.png" alt="Code Icon" title="Code Icon"> représente un lien cliquable sur lequel vous serez redirigé vers le code ou le site du projet.<br>
                    Ceci <img class="p-img" src="img/documentation.png" alt="Documentation Icon" title="Documentation Icon"> représente un lien cliquable sur lequel vous serez redirigé vers la documentation du projet.<br>
                </p>
                <div class="project-container">
                    <div class="project-item">
                        <h3 class="title-project">Banklink, Portail Web de Gestion de paiements par carte bancaire</h3>
                        <h4 class="project-title">HTML, CSS, PHP, SQL, JS</h4>
                        <p>
                            Site :&ensp;
                            <a href="http://perso-etudiant.u-pem.fr/~mariyaconsta02/Banklink/" target="_blank">
                                <img class="p-img" src="img/code.png" alt="Code Icon">
                            </a><br>
                            Documentation :&ensp;
                            <a href="https://github.com/cedric-mc/Banklink" target="_blank">
                                <img class="p-img" src="img/documentation.png" alt="Documentation Icon">
                            </a>
                        </p>
                        <div id="projectBanklink" class="carousel my-carousel" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#projectBanklink" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#projectBanklink" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="img/projects/BL1.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/BL2.png" class="d-block w-100">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#projectBanklink" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#projectBanklink" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>-->

                <div class="project-container">
                    <div class="project-item">
                        <h3 class="title-project">Projet de médiation culturelle et numérique en partenariat avec le forum de l'UNESCO <img class="img-spin" src="img/projects/unesco.png"></h3>
                        <h4 class="project-title">HTML, CSS, JS, PHP, SQL</h4>
                        <p>
                            En partenariat avec le forum de l'UNESCO, ce projet consistait à réaliser un site web pour le forum de l'UNESCO,
                            en présentant la ville avec sa culture, son histoire et bien entendu ses incontournables d'aujourd'hui.<br>
                            Site :&ensp;
                            <a href="Projects/Toledo/index.php" target="_blank">
                                <img class="p-img" src="img/code.png" alt="Code Icon">
                            </a><br>
                            <!--                            Documentation :&ensp; <a href="" target="_blank"><img class="p-img" src="img/documentation.png" alt="Documentation Icon"></a>-->
                        </p>
                        <div id="projectToledo" class="carousel my-carousel" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#projectToledo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#projectToledo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#projectToledo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#projectToledo" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#projectToledo" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="img/projects/TO1.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item active">
                                    <img src="img/projects/TO2.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/TO3.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/TO4.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/TO5.png" class="d-block w-100">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#projectToledo" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#projectToledo" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="project-container">
                    <div class="project-item">
                        <h3 class="title-project">Projet Primeurs-Passion</h3>
                        <h4 class="project-title">HTML, CSS, JS, PHP, SQL, Base de données PostGreSQL, Looping</h4>
                        <p>
                            Ce projet consistait à réaliser un site web pour une entreprise fictive de vente de fruits et légumes.<br>
                            Site :&ensp;
                            <a href="Projects/Hedelma/" target="_blank">
                                <img class="p-img" src="img/code.png" alt="Code Icon">
                            </a><br>
                            Documentation :&ensp; <a href="" target="_blank"><img class="p-img" src="img/documentation.png" alt="Documentation Icon"></a>
                        </p>
                        <div id="projectHedelma" class="carousel my-carousel" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#projectHedelma" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#projectHedelma" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#projectHedelma" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#projectHedelma" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#projectHedelma" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#projectHedelma" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="img/projects/BDD1.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/BDD2.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/BDD3.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/BDD4.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/BDD5.png" class="d-block w-100">
                                </div>
                                <div class="carousel-item">
                                    <img src="img/projects/BDD6.png" class="d-block w-100">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#projectHedelma" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#projectHedelma" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="project-container">
                    <div class="project-item">
                        <h3 class="title-project">Jeu : Bataille de Boules</h3>
                        <h4 class="project-title">Python</h4>
                        <p>
                            Le but de ce projet était de réaliser un jeu de placement de boules. Chaque utilisateur joue avec une couleur.
                            Le but du jeu est d’occuper la plus grande aire avec sa couleur. Les joueurs contrôlent la souris chacun à leur tour,
                            et on décide à l’avance du nombre de tours. Le projet était à réaliser à deux en 3 phases.<br>
                            Jeu :
                            <a href="https://github.com/cedric-mc/Python_Game/tree/main" target="_blank">
                                <img class="p-img" src="img/code.png" alt="Code Icon">
                            </a><br>
                            Documentation :
                            <a href="https://cedric-mc.github.io/Python_Game" target="_blank">
                                <img class="p-img" src="img/documentation.png" alt="Documentation Icon">
                            </a><br>
                        </p>
                        <h5 class="caption-title">Jeu Bataille des Boules, programmé en Python, se joue à 2 joueurs.</h5>
                        <p>
                            Le but du jeu est simple, occupé le plus d'espace possible sur l'aire de jeu avec votre couleur.<br>
                            Vous pourrez sélectionner des variantes pour pimenter votre jeu, un couple de couleur pour décider de votre couleur en tant que joueur,
                            choisir un pseudo pour le joueur (un pseudo par défaut est disponible si vous n'entrez rien), enfin entrer le nombre de tours (par défaut 5 minimum).
                        </p>
                        <h5 class="caption-title">Les Variantes du jeu Bataille des Boules</h5>
                        <p>
                            Vous pouvez jouer avec 6 variantes différentes :
                            <img src="img/projects/hourglass.png" class="p-img" width="30" height="30"> le Sablier,
                            <img src="img/projects/scores.png" class="p-img"> les Scores,
                            <img src="img/projects/taille-des-boules.png" class="p-img"> la Taille de Boules,
                            <img src="img/projects/dynamique.png" class="p-img"> la Version Dynamique,
                            <img src="img/projects/terminaison.png" class="p-img"> la Terminaison et
                            <img src="img/projects/obstacles.png" class="p-img"> les Obstacles.
                        </p>
                        <p></p>
                        <div id="projectBatailleBoules" class="carousel my-carousel" data-bs-ride="carousel">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#projectBatailleBoules" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#projectBatailleBoules" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#projectBatailleBoules" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#projectBatailleBoules" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#projectBatailleBoules" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#projectBatailleBoules" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#projectBatailleBoules" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="img/projects/BDB1.png">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="img/projects/BDB2.png">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="img/projects/BDB3.png">
                                </div>
                                <div class="carousel-item active">
                                    <img class="d-block w-100" src="img/projects/BDB4.png">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="img/projects/BDB5.png">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="img/projects/BDB6.png">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block w-100" src="img/projects/BDB7.png">
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#projectBatailleBoules" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#projectBatailleBoules" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="project-container">
                    <div class="project-item">
                        <h3 class="title-project">Wrong number : a very embarrassing misunderstanding</h3>
                        <h4 class="project-title">Logiciel : ClipChamp</h4>
                        <p>
                            J'ai participé à la création d'une vidéo pour une séquence de 5 à 10 minutes qui se déroule exclusivement par le biais d'appels téléphoniques et de SMS.
                        </p>
                        <p class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/6cWJObySlfc" title="Wrong number : a very embarrassing misunderstanding Video" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
                            </iframe>
                        </p>
                    </div>
                    <div class="project-item">
                        <h3 class="title-project">Coding Flash</h3>
                        <h4 class="project-title">Logiciel : ClipChamp</h4>
                        <p>
                            J'ai monté une vidéo à partir de trois extraits de la série <span id="flash">The Flash</span>, avec mon équipe nous devions ajouter des sous-titres personnalisés dans ces extraits.
                        </p>
                        <p class="ratio ratio-16x9">
                            <iframe src="https://www.youtube.com/embed/E3ukMn0_F5c" title="Coding Flash Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
                            </iframe>
                        </p>
                    </div>
                </div>
            </section>
        </main>
        <!-- Main -->


        <img src="img/top.png" alt="Retour en haut" id="btn-retour-haut" onclick="retourHaut()" style="display: block;"> <!-- Bouton de retour en haut de page -->

        <!-- Footer -->
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 order-md-last"> <!-- Formulaire de contact à droite -->
                        <h4 id="contact">Contactez-moi</h4>
                        <form action="contact.php" method="POST">
                            <div class="mb-3">
                                <label for="name" class="form-label">Nom</label>
                                <input type="text" class="form-control" name="nom" id="name" placeholder="Votre nom" required="">
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Adresse e-mail</label>
                                <input type="email" class="form-control" name="email" id="email" placeholder="exemple@domaine.com" required="">
                            </div>
                            <div class="mb-3">
                                <label for="message" class="form-label">Message</label>
                                <textarea class="form-control" name="message" id="message" rows="5" placeholder="Votre message" required=""></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Envoyer</button>
                        </form>
                        <?php
                        if (isset($_GET['success'])) {
                            echo "<script>alert('Votre message a bien été envoyé !')</script>";
                            header("Location: ./#contact");
                        } elseif (isset($_GET['error'])) {
                            echo "<script>alert('Une erreur est survenue, veuillez réessayer.')</script>";
                            header("Location: ./#contact");
                        }
                        ?>
                    </div>
                    <div class="col-md-6"> <!-- Contenu à gauche -->
                        <h4>Réseaux sociaux</h4>
                        <ul id="social-networks">
                            <li>
                                <a class="link" href="https://www.linkedin.com/in/cédric-mariya-constantine-a3a52325a/" target="_blank">
                                    <img class="p-img" src="img/linkedin.png" alt="linkedin"> Linkedin
                                </a>
                            </li>
                            <li>
                                <a class="link" href="https://github.com/cedric-mc" target="_blank">
                                    <img class="p-img" src="img/github.png" alt="github"> GitHub
                                </a>
                            </li>
                        </ul>
                        <h4><a class="link" href="mentions-legales.php">Mentions légales</a></h4>
                        <br>
                        <!-- <p>Vous pouvez trouver la documentation du site qui est en français <a href="https://cedric-mc.github.io">ici</a>. 👈</p> -->
                        <br>
                        <p>© par Cédric Mariya Constantine</p>
                    </div>
                </div>
            </div>
        </footer>
        <!-- Footer -->
        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="script/script.js"></script>
        <!-- Scripts -->
    </body>
</html>