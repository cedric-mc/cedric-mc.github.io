<!DOCTYPE html>
<html>
<head>
    <title>Cédric Mariya Constantine</title>
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="logoRS-UGE.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nabla&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Bungee+Spice&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Nunito&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <meta charset="utf-8">
</head>
<body>
<div class="container">
    <h1>Cédric Mariya Constantine</h1>
    <div class="file-list">
        <?php
        $excludedItems = array(
            ".",
            basename(__FILE__),
            "logoRS-UGE.png",
            "style.css",
        );

        $scandir = scandir(__DIR__);
        foreach ($scandir as $element) {
            if (in_array($element, $excludedItems)) {
                continue;
            }

            $path = __DIR__ . '/' . $element;
            if ($element == "..") {
                echo "<div class='file-card'><span class='back-icon'></span><a class='file-link back-link' href='$element'>Retour</a></div>";
            } elseif (is_dir($path)) {
                echo "<div class='file-card'><span class='folder-icon'></span><a class='file-link' href='$element'>$element (Dossier)</a></div>";
            } else {
                echo "<div class='file-card'><span class='file-icon'></span><a class='file-link' href='$element'>$element (Fichier)</a></div>";
            }
        }
        ?>
    </div>
</div>
</body>
</html>
