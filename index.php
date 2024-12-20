<?php
session_start();

// Mode debug <====================
/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);*/
// ====================> Mode debug

require_once('config.php');
require_once(PATH_SITE . 'includes/functions.php');
//$_GET['e'] = 1; // Pour le mode études en permanence
// On récupère le paramètre d'URL 'e' pour savoir si on doit afficher en mode études
if (isset($_GET['e']) && $_GET['e'] == '1') {
    $_SESSION['etudes'] = true;
} else {
    $_SESSION['etudes'] = false;
}
?>
<!DOCTYPE html>
<html lang="fr" data-bs-theme="dark">
    <?php include_once(PATH_SITE . 'pages/head.php'); ?>
    <?php require_once(PATH_SITE . 'includes/svg.html'); ?>
    <?php require_once(PATH_SITE . 'pages/body.php'); ?>
    <?php
        if ($_SESSION['etudes']) {
            require_once(PATH_SITE . "modals.php");
        }
    ?>
    <script src="js/theme.js"></script>
    <script src="js/top.js"></script>
</html>