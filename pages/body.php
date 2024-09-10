<body class="background">
    <div id="arrow-container">
        <svg class="arrow"><use xlink:href="#arrow"></use></svg>
    </div>
    <?php require_once (PATH_SITE . 'pages/nav.php'); ?>
    <?php require_once (PATH_SITE . 'pages/header.php'); ?>
    <main id="home">
        <?php require_once (PATH_SITE . 'pages/about-me.php'); ?>
        <?php require_once (PATH_SITE . 'pages/parcours.php'); ?>
        <?php require_once (PATH_SITE . 'pages/skills.php'); ?>
        <?php require_once (PATH_SITE . 'pages/projects.php'); ?>
    </main>
    <i id="btn-retour-haut" class="fa-solid fa-up-long" style="color: #FFD43B; display: block;" onclick="retourHaut()"></i>
    <?php require_once (PATH_SITE . 'pages/footer.php'); ?>
    <script src="js/theme.js"></script>
</body>