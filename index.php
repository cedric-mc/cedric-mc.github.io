<?php
session_start();

// Mode debug <====================
//$_SESSION['debug'] = true;
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