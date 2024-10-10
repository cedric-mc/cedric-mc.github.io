<body class="background" id="top-page">
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
    <i id="btn-retour-haut" class="fa-solid fa-up-long" onclick="retourHaut()"></i>
    <?php require_once (PATH_SITE . 'pages/footer.php'); ?>
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M6HQTDJH1G"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-M6HQTDJH1G');
    </script>
    <!-- Google Analytics -->
</body>