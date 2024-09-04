<body class="background">
    <div id="arrow-container" style="">
        <svg class="arrow"><use xlink:href="#arrow"></use></svg>
    </div>
    <?php require_once (PATH_SITE . 'pages/nav.php'); ?>
    <?php require_once (PATH_SITE . 'pages/header.php'); ?>

    <!-- Main -->
    <main id="home">
        <?php require_once (PATH_SITE . 'pages/about-me.php'); ?>
        <?php require_once (PATH_SITE . 'pages/parcours.php'); ?>
        <section id="skills">
            <h2 class="title-section">Mes Compétences</h2>
            <p>
                Je suis actuellement en 2<sup>ème</sup> année de BUT Informatique avec le Parcours de Réalisation d'applications : Conception, Développement et Validation.<br>
                Formation :<br>
                BUT Informatique, Parcours A : Réalisation d’applications : conception, développement, validation.<br>
                Voici les 6 compétences que je dois acquérir durant ma formation :
            </p>
            <div class="skills-container">
                <div class="row row-cols-auto row-cols-md-2 g-4">
                    <div class="col">
                        <div class="card h-100 skills-item realiser">
                            <div class="card-header">
                                <h3 class="card-title fw-semibold">Réaliser</h3>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Description :</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>Développer — c'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Programme du BUT Informatique</cite></footer>
                                </blockquote>
                                <br>
                                <div class="row text-center">
                                    <div class="col">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#realiserN2Modal">Niveau 2</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-end text-body-secondary">
                                <a href="#batailleBoules" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Bataille des Boules</a>
                                <a href="#semonkey" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 skills-item optimiser">
                            <div class="card-header">
                                <h3 class="card-title fw-semibold">Optimiser</h3>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Description :</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d'exécution, précision, consommation de ressources...</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Programme du BUT Informatique</cite></footer>
                                </blockquote>
                                <br>
                                <div class="row text-center">
                                    <div class="col">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#optimiserN2Modal">Niveau 2</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-end text-body-secondary">
                                <a href="#batailleBoules" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Bataille des Boules</a>
                                <a href="#semonkey" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 skills-item administrer">
                            <div class="card-header">
                                <h3 class="card-title fw-semibold">Administrer</h3>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Description :</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux et optimiser le système informatique d'une organisation.</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Programme du BUT Informatique</cite></footer>
                                </blockquote>
                                <br>
                                <div class="row text-center">
                                    <div class="col">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#administrerN2Modal">Niveau 2</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-end text-body-secondary">
                                <a href="#semonkey" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</a>
                                <a href="#reseau" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Pare-feu et translation d'adresse</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 skills-item gerer">
                            <div class="card-header">
                                <h3 class="card-title fw-semibold">Gérer</h3>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Description :</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>Concevoir, gérer, administrer et exploiter les données de l'entreprise et mettre à disposition toutes les informations pour un bon pilotage de l'entreprise.</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Programme du BUT Informatique</cite></footer>
                                </blockquote>
                                <br>
                                <div class="row text-center">
                                    <div class="col">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#gererN2Modal">Niveau 2</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-end text-body-secondary">
                                <a href="#banklink" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Banklink</a>
                                <a href="#hedelma" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Hedelma</a>
                                <a href="#semonkey" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</a>
                                <a href="#cnil" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Contrôles CNIL</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 skills-item conduire">
                            <div class="card-header">
                                <h3 class="card-title fw-semibold">Conduire</h3>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Description :</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>Satisfaire les besoins des utilisateurs au regard de la chaîne de valeur du client, organiser et piloter un projet informatique avec des méthodes classiques ou agiles.</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Programme du BUT Informatique</cite></footer>
                                </blockquote>
                                <br>
                                <div class="row text-center">
                                    <div class="col">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#conduireN2Modal">Niveau 2</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-end text-body-secondary">
                                <a href="#banklink" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Banklink</a>
                                <a href="#toledo" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Toledo</a>
                                <a href="#semonkey" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</a>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 skills-item collaborer">
                            <div class="card-header">
                                <h3 class="card-title fw-semibold">Collaborer</h3>
                            </div>
                            <div class="card-body">
                                <h4 class="card-title">Description :</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.</p>
                                    <footer class="blockquote-footer"><cite title="Source Title">Programme du BUT Informatique</cite></footer>
                                </blockquote>
                                <br>
                                <div class="row text-center">
                                    <div class="col">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#collaborerN2Modal">Niveau 2</button>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-end text-body-secondary">
                                <a href="#banklink" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Banklink</a>
                                <a href="#toledo" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Toledo</a>
                                <a href="#semonkey" class="card-link link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">Semonkey</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="projects">
            <h2 class="title-section">Mes Projets</h2>
            <p>
                Dans cette section, vous trouverez les projets que j'ai réalisés. Vous pourrez consulter le code source <img class="p-img" src="img/code.png" alt="Code Icon" title="Code Icon"> et la documentation <img class="p-img" src="img/documentation.png" alt="Documentation Icon" title="Documentation Icon"> de chaque projet.
            </p>
            <div class="projet-container" id="semonkey">
                <div class="project-item">
                    <h3 class="title-project">Semonkey, Jeu en ligne à un ou plusieurs joueurs</h3>
                    <h4 class="project-title">HTML&ensp;<i class="fa-brands fa-html5 character"></i>, CSS&ensp;<i class="fa-brands fa-css3-alt character"></i>, PHP&ensp;<i class="fa-brands fa-php character"></i>, SQL&ensp;<i class="fa-solid fa-database character"></i>, JS&ensp;<i class="fa-brands fa-square-js character"></i>, C&ensp;<i class="fa-solid fa-c character"></i>, Java&ensp;<i class="fa-brands fa-java character"></i>, TypeScript&ensp;, React&ensp;<i class="fa-brands fa-react character"></i>, Android&ensp;</h4>
                    <p>
                        Semonkey est un jeu en ligne à un ou plusieurs joueurs.
                        Chaque joueur reçoit un mot de départ et un mot cible et propose des mots proches afin de créer une chaîne de mots similaires pour relier le mot de départ au mot cible.
                        Le but est que chaque mot ressemble autant que possible au mot précédent. Une version mobile est également disponible.
                        <br>
                        Site :&ensp;
                        <a href="http://perso-etudiant.u-pem.fr/~mariyaconsta02/semantix/" target="_blank">
                            <img class="p-img" src="img/code.png" alt="Code Icon">
                        </a>
                        <!--<br>
                        Documentation :&ensp;
                        <a href="https://cedric-mc.github.io/Banklink" target="_blank">
                            <img class="p-img" src="img/documentation.png" alt="Documentation Icon">
                        </a>-->
                        <br>
                        Compétence Réalisée : Ce projet m'a permis de réaliser une application web en utilisant différents langages de programmation.
                        <br>
                        Compétence Optimiser : Ce projet m'a permis de proposer une application web optimisée en fonction de critères spécifiques et de proposer une version mobile.
                        <br>
                        Compétence Administrer : Ce projet m'a permis de mettre à disposition une application web et de maintenir en conditions opérationnelles des services et des réseaux.
                        <br>
                        Compétence Gérer : Ce projet m'a permis de concevoir, gérer, administrer et exploiter des données.
                        <br>
                        Compétence Conduire : Ce projet m'a permis de satisfaire les besoins des utilisateurs et de piloter un projet informatique.
                        <br>
                        Compétence Collaborer : Ce projet m'a permis de travailler efficacement dans une équipe informatique.
                    </p>
                    <div id="carouselSemonkey" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselSemonkey" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselSemonkey" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselSemonkey" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselSemonkey" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselSemonkey" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselSemonkey" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/projects/SEMONKEY1.png" class="d-block w-100" alt="Semonkey 1">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/SEMONKEY2.png" class="d-block w-100" alt="Semonkey 2">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/SEMONKEY3.png" class="d-block w-100" alt="Semonkey 3">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/SEMONKEY4.png" class="d-block w-100" alt="Semonkey 4">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/SEMONKEY5.png" class="d-block w-100" alt="Semonkey 5">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/SEMONKEY6.png" class="d-block w-100" alt="Semonkey 6">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselSemonkey" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselSemonkey" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="projet-container" id="cnil">
                <div class="project-item">
                    <h3 class="title-project">Contrôles CNIL</h3>
                    <h4 class="project-title">HTML, CSS, JS, PHP, SQL</h4>
                    <p>
                        Le projet Contrôles CNIL a pour objectif d'exploiter les données ouvertes concernant les contrôles réalisés par la CNIL de 2017 à 2022.
                        L'objectif est de valoriser ces données en les présentant sous forme d'un site web comprenant une carte et des graphiques permettant une visualisation claire et interactive des informations, afin de créer un tableau de bord informatif.
                        <br>
                        Site :&ensp;
                        <a href="https://perso-etudiant.u-pem.fr/~mariyaconsta02/controles_cnil/" target="_blank">
                            <img class="p-img" src="img/code.png" alt="Code Icon">
                        </a>
                        <!--<br>
                        Documentation :&ensp;
                        <a href="" target="_blank">
                            <img class="p-img" src="img/documentation.png" alt="Documentation Icon">
                        </a>-->
                        <br>
                        Compétence Gérer : Ce projet m'a permis de concevoir, gérer, administrer et exploiter des données officielles d'une autorité administrative.
                    </p>
                    <div id="carouselCNIL" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/projects/CNIL1.png" class="d-block w-100" alt="CNIL 1">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/CNIL2.png" class="d-block w-100" alt="CNIL 2">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/CNIL3.png" class="d-block w-100" alt="CNIL 3">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/CNIL4.png" class="d-block w-100" alt="CNIL 4">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/CNIL5.png" class="d-block w-100" alt="CNIL 5">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/CNIL6.png" class="d-block w-100" alt="CNIL 6">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselCNIL" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselCNIL" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <!--<div class="project-container" id="chain-motor">
                <div class="project-item">
                    <h3 class="title-project">ChainMotor, Moteur de Chaîne : Module du jeu Semonkey</h3>
                    <h4 class="project-title">Java&ensp;<i class="fa-brands fa-java"></i></h4>
                </div>
            </div>-->
            <div class="project-container" id="reseau">
                <div class="project-item">
                    <h3 class="title-project">TP Pare-feu et translation d'adresse</h3>
                    <h4 class="project-title">Bash&ensp;<i class="fa-brands fa-linux character"></i></h4>
                    <p>
                        Le TP Pare-feu et translation d'adresse a pour objectif de mettre en place un pare-feu sous Linux grâce à Netfilter et mettre en place une passerelle NAT (Network Address Translation).
                        <br>
                        Compétence Administrer : Ce projet m'a permis de mettre à disposition un pare-feu et une translation d'adresse sur un réseau local.
                    </p>
                    <img src="img/projects/RESEAU1.png" class="d-block w-100" alt="Réseau">
                </div>
            </div>
            <div class="project-container" id="banklink">
                <div class="project-item">
                    <h3 class="title-project">Banklink, Portail Web de Gestion de paiements par carte bancaire</h3>
                    <h4 class="project-title">HTML&ensp;<i class="fa-brands fa-html5 character"></i>, CSS&ensp;<i class="fa-brands fa-css3-alt character"></i>, PHP&ensp;<i class="fa-brands fa-php character"></i>, SQL&ensp;<i class="fa-solid fa-database character"></i>, JS&ensp;<i class="fa-brands fa-square-js character"></i></h4>
                    <p>
                        Le projet Banklink est un portail web de gestion de paiements par carte bancaire. Il permet de visualiser les transactions effectuées et de gérer les comptes clients.
                        <br>
                        Site :&ensp;
                        <a href="http://perso-etudiant.u-pem.fr/~mariyaconsta02/Banklink/" target="_blank">
                            <img class="p-img" src="img/code.png" alt="Code Icon">
                        </a><br>
                        Documentation :&ensp;
                        <a href="https://cedric-mc.github.io/Banklink" target="_blank">
                            <img class="p-img" src="img/documentation.png" alt="Documentation Icon">
                        </a>
                        <br>
                        Compétence Gérer : Ce projet m'a permis de concevoir, gérer, administrer et exploiter des données bancaires.
                        <br>
                        Compétence Conduire : Ce projet m'a permis de satisfaire les besoins des utilisateurs et de piloter un projet informatique.
                        <br>
                        Compétence Collaborer : Ce projet m'a permis de travailler efficacement dans une équipe informatique en suivant une méthodologie de développement.
                    </p>
                    <div id="carouselBanklink" class="carousel slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="7" aria-label="Slide 8"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="8" aria-label="Slide 9"></button>
                            <button type="button" data-bs-target="#carouselBanklink" data-bs-slide-to="9" aria-label="Slide 10"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/projects/BANKLINK1.png" class="d-block w-100" alt="Banklink 1">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK2.png" class="d-block w-100" alt="Banklink 2">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK3.png" class="d-block w-100" alt="Banklink 3">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK4.png" class="d-block w-100" alt="Banklink 4">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK5.png" class="d-block w-100" alt="Banklink 5">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK6.png" class="d-block w-100" alt="Banklink 6">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK7.png" class="d-block w-100" alt="Banklink 7">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK8.png" class="d-block w-100" alt="Banklink 8">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK9.png" class="d-block w-100" alt="Banklink 9">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BANKLINK10.png" class="d-block w-100" alt="Banklink 10">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselBanklink" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselBanklink" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="project-container" id="toledo">
                <div class="project-item">
                    <h3 class="title-project">Projet de médiation culturelle et numérique en partenariat avec le forum de l'UNESCO <img class="img-spin" src="img/projects/unesco.png"></h3>
                    <h4 class="project-title">HTML, CSS, JS, PHP, SQL</h4>
                    <p>
                        En partenariat avec le forum de l'UNESCO, ce projet consistait à réaliser un site web pour le forum de l'UNESCO,
                        en présentant la ville avec sa culture, son histoire et bien entendu ses incontournables d'aujourd'hui.<br>
                        Site :&ensp;
                        <a href="Projects/Toledo/index.php" target="_blank">
                            <img class="p-img" src="img/code.png" alt="Code Icon">
                        </a>
                        <br>
                        <!--Documentation :&ensp; <a href="" target="_blank"><img class="p-img" src="img/documentation.png" alt="Documentation Icon"></a>-->
                        <br>
                        Compétence Conduire : Ce projet m'a permis de satisfaire les besoins des utilisateurs et de piloter un projet informatique.
                        <br>
                        Compétence Collaborer : Ce projet m'a permis de travailler efficacement dans une équipe informatique pour la première fois.
                    </p>
                    <div id="carouselToledo" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselToledo" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselToledo" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselToledo" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselToledo" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselToledo" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/projects/TO1.png" class="d-block w-100" alt="Toledo 1">
                            </div>
                            <div class="carousel-item active">
                                <img src="img/projects/TO2.png" class="d-block w-100" alt="Toledo 2">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/TO3.png" class="d-block w-100" alt="Toledo 3">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/TO4.png" class="d-block w-100" alt="Toledo 4">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/TO5.png" class="d-block w-100" alt="Toledo 5">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselToledo" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselToledo" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="project-container" id="hedelma">
                <div class="project-item">
                    <h3 class="title-project">Projet Hedelma, Primeurs-Passion</h3>
                    <h4 class="project-title">HTML, CSS, JS, PHP, SQL, Base de données PostGreSQL, Looping</h4>
                    <p>
                        Ce projet consistait à réaliser un site web pour une entreprise fictive de vente de fruits et légumes.<br>
                        Site :&ensp;
                        <a href="Projects/Hedelma/" target="_blank">
                            <img class="p-img" src="img/code.png" alt="Code Icon">
                        </a><br>
                        Documentation :&ensp; <a href="" target="_blank"><img class="p-img" src="img/documentation.png" alt="Documentation Icon"></a>
                        <br>
                        Compétence Gérer : Ce projet m'a permis de concevoir, gérer, administrer et exploiter des données pour une entreprise fictive.
                    </p>
                    <div id="carouselHedelma" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselHedelma" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselHedelma" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselHedelma" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselHedelma" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselHedelma" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselHedelma" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="img/projects/BDD1.png" class="d-block w-100" alt="Hedelma 1">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BDD2.png" class="d-block w-100" alt="Hedelma 2">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BDD3.png" class="d-block w-100" alt="Hedelma 3">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BDD4.png" class="d-block w-100" alt="Hedelma 4">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BDD5.png" class="d-block w-100" alt="Hedelma 5">
                            </div>
                            <div class="carousel-item">
                                <img src="img/projects/BDD6.png" class="d-block w-100" alt="Hedelma 6">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselHedelma" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselHedelma" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="project-container" id="batailleBoules">
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
                        </a>
                        <br>
                        Compétence Réaliser : Ce projet m'a permis de réaliser une application avec une interface graphique en Python. J'ai appris à utiliser la bibliothèque Pygame pour la réalisation de jeux en Python.
                        <br>
                        Compétence Optimiser : Ce projet m'a permis d'optimiser mon code pour qu'il soit plus lisible et plus performant. J'ai appris à utiliser des fonctions pour réduire la taille de mon code et à utiliser des boucles pour répéter des actions.
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
                        <img src="img/projects/hourglass.png" class="p-img"> le Sablier,
                        <img src="img/projects/scores.png" class="p-img"> les Scores,
                        <img src="img/projects/taille-des-boules.png" class="p-img"> la Taille de Boules,
                        <img src="img/projects/dynamique.png" class="p-img"> la Version Dynamique,
                        <img src="img/projects/terminaison.png" class="p-img"> la Terminaison et
                        <img src="img/projects/obstacles.png" class="p-img"> les Obstacles.
                    </p>
                    <p></p>
                    <div id="carouselBatailleBoules" class="carousel carousel-dark slide carousel-fade" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="img/projects/BDB1.png" alt="Bataille de Boules 1" id="bataille-boules">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/projects/BDB2.png" alt="Bataille de Boules 2">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/projects/BDB3.png" alt="Bataille de Boules 3">
                            </div>
                            <div class="carousel-item active">
                                <img class="d-block w-100" src="img/projects/BDB4.png" alt="Bataille de Boules 4">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/projects/BDB5.png" alt="Bataille de Boules 5">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/projects/BDB6.png" alt="Bataille de Boules 6">
                            </div>
                            <div class="carousel-item">
                                <img class="d-block w-100" src="img/projects/BDB7.png" alt="Bataille de Boules 7">
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselBatailleBoules" data-bs-slide="next">
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
                        <iframe src="https://www.youtube.com/embed/6cWJObySlfc" title="Wrong number : a very embarrassing misunderstanding Video" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="">
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

    <i id="btn-retour-haut" class="fa-solid fa-up-long" style="color: #FFD43B; display: block;" onclick="retourHaut()"></i>
    <?php require_once (PATH_SITE . 'pages/footer.php'); ?>

    <!-- Google tag (gtag.js) -->
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-M6HQTDJH1G');
    </script>
    <!-- Scripts -->
    <script type="importmap">
        {
          "imports": {
            "@popperjs/core": "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/esm/popper.js",
            "bootstrap": "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.esm.min.js"
          }
        }
    </script>
    <script src="js/theme.js"></script>
</body>