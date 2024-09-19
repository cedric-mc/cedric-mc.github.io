<?php
session_start();

// Mode debug <====================
$isDebug = true; // Mettre false pour "éteindre" le mode debug

function getResult(&$params) {
    unset($_SESSION['debug']);
    // Suppression du paramètre debug dans l'url
    $url = parse_url($_SERVER['REQUEST_URI']);
    parse_str($url['query'], $params);
    unset($params['debug']);
    $url = $url['path'] . '?' . http_build_query($params);
    header('Location: ' . $url);
    exit();
}

if ($isDebug) {
    // Si le paramètre debug est défini à 1, on active le mode debug, si à 0, on le désactive
    if (!empty($_GET['debug']) || !empty($_SESSION['debug'])) {
        if ($_GET['debug'] == 1) $_SESSION['debug'] = true;
        else if ($_GET['debug'] == 0 && $_SESSION['debug'] == 1) {
            getResult($params);
        }
    }
} else {
    if (isset($_GET['debug']) || isset($_SESSION['debug'])) {
        getResult($params);
    }
}

// Si le mode debug est activé, on affiche les erreurs
if ($_SESSION['debug']) {
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);
}
// ====================> Mode debug

require_once('config.php');
require_once(PATH_SITE . 'includes/functions.php');
?>
<!DOCTYPE html>
<html lang="fr" data-bs-theme="light">
    <?php include_once(PATH_SITE . 'pages/head.php'); ?>
    <?php require_once(PATH_SITE . 'includes/svg.html'); ?>
    <?php require_once(PATH_SITE . 'pages/body.php'); ?>
    <?php require_once(PATH_SITE . "modals.php"); ?>
    <script src="js/theme.js"></script>
</html>