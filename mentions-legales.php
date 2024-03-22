<?php
session_start();
if (!isset($_SESSION['lang'])) {
    $_SESSION['lang'] = 'fr';
}
if (isset($_GET['lang'])) {
    $_SESSION['lang'] = $_GET['lang'];
    header('Location: mentions-legales.php');
}
$lang = $_SESSION['lang'];
if ($lang == 'eng') {
     include('languages/eng.php');
    $language = "Language";
    $flag = "img/navbar/eng.png";
    $language_name = "English";
    $disabled = "fr";
    $disabled_name = "French";
    $disabled_flag = "img/navbar/fr.png";
} else {
     include("languages/fr.php");
    $language = "Langue";
    $flag = "img/navbar/fr.png";
    $language_name = "Français";
    $disabled = "eng";
    $disabled_name = "Anglais";
    $disabled_flag = "img/navbar/eng.png";
}
?>
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

        <link rel="shortcut icon" href="img/favicon.png"><!-- Favicon -->

        <!-- Fichiers CSS -->
        <link rel="stylesheet" href="style/style.css">
        <link rel="stylesheet" href="style/animation.css">
        <link rel="stylesheet" href="style/fonts.css">
        <link href="https://getbootstrap.com/docs/5.3/assets/css/docs.css" rel="stylesheet">
        <!-- Fichiers CSS -->

        <style>
            html {
                height: auto;
            }
            h1 {
                text-align: center;
                margin-top: 8%;
                font-size: 3rem;
            }

            main a {
                color: #fff;
                transition: 0.5s;
            }

            main a:hover {
                color: #dc3545;
            }
        </style>
    </head>


    <body class="background">
        <!-- Navbar, Navigation -->
        <nav class="navbar sticky-top navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="index.php#top-page">
                    <img src="img/navbar/home.png" class="d-inline-block align-text-top">
                    <?php echo $navbar1; ?> </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav custom-nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.php#about-me">
                                <img src="img/navbar/about-me.png" class="d-inline-block align-text-top nav-img"> <?php echo $navbar2; ?>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="index.php#skills">
                                <img src="img/navbar/skills.png" class="d-inline-block align-text-top"> <?php echo $navbar3; ?>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="index.php#projects">
                                <img src="img/navbar/projects.png" class="d-inline-block align-text-top">
                                <?php echo $navbar4; ?>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="index.php#contact">
                                <img src="img/navbar/contact.png" class="d-inline-block align-text-top"> <?php echo $navbar5; ?>
                            </a>
                        </li>
<!--                        <li class="nav-item">-->
<!--                            <a class="nav-link dropdown-toggle active" role="button" data-bs-toggle="dropdown" aria-expanded="false">-->
<!--                                <img src="img/navbar/languages.png" class="d-inline-block align-text-top">--><?php //echo $language; ?>
<!--                            </a>-->
<!--                            <ul class="dropdown-menu dropdown-menu-end">-->
<!--                                <li>-->
<!--                                    <a class="dropdown-item" href="?lang=--><?php //echo $disabled; ?><!--">-->
<!--                                        <img src="--><?php //echo $disabled_flag; ?><!--" class="d-inline-block align-text-top"> --><?php //echo $disabled_name; ?><!-- </a>-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <hr class="dropdown-divider">-->
<!--                                </li>-->
<!--                                <li>-->
<!--                                    <a class="dropdown-item disabled" href="?lang=--><?php //echo $lang; ?><!--">-->
<!--                                        <img src="--><?php //echo $flag; ?><!--" class="d-inline-block align-text-top"> --><?php //echo $language_name; ?><!-- </a>-->
<!--                                </li>-->
<!--                            </ul>-->
<!--                        </li>-->
                    </ul>
                </div>
            </div>
        </nav>
        <!-- Navbar, Navigation -->

        <header>
            <h1 class="name">Mentions légales</h1>
        </header>

        <main>
            <p>
                Portfolio de Cédric Mariya Constantine
                <br>
                Email : <a href="mailto: mariyaconsta02@edu.univ-eiffel.fr">mariyaconsta02@edu.univ-eiffel.fr</a>
                <br>
                Sources d'images non originale : <a href="https://icons8.com/icons">ICONS</a> et <a href="https://www.flaticon.com/">FLATICON</a>.
                <br>
                Hébergement : Université Gustave Eiffel.
                <br>
                Situation social : Étudiant.
                <br>
                Adresse d'étude : 2 Rue Albert Einstein, 77420 Champs-sur-Marne
                <br>
                Téléphone : 01 60 95 85 85
                <br>
                Département Informatique : 01 60 95 85 11
                <br>
                Informations légales : <a href="https://www.univ-eiffel.fr/mentions-legales/">Mentions légales</a>
                <br>
                Informations complémentaires :
                <ul>
                    <li>Aucune utilisation de cookies</li>
                    <li>Aucune utilisation de données personnelles</li>
                    <li>Aucune utilisation de données de navigation</li>
                    <li>Aucune utilisation de données de localisation</li>
                    <li>Aucune utilisation de données de connexion</li>
                    <li>Aucune utilisation de données de santé</li>
                </ul>
            </p>
        </main>

        <footer>
            <p>® par Cédric Mariya Constantine</p>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="script/script.js"></script>
    </body>
</html>