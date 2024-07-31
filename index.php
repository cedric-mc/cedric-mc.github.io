<?php
// Mode debug ===================
// Si le paramètre debug est défini à 1, on active le mode debug, si à 0, on le désactive
if (!empty($_GET['debug'])) {
    if ($_GET['debug'] == 1) $_SESSION['debug'] = true;
    else if ($_GET['debug'] == 0) $_SESSION['debug'] = false;
}

// Si le mode debug est activé, on affiche les erreurs
if ($_SESSION['debug']) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}

require_once('config.php');
?>
<!DOCTYPE html>
<html lang="fr">
    <?php require_once(PATH_SITE . 'pages/head.php'); ?>
    <?php require_once(PATH_SITE . 'pages/body.php'); ?>
</html>