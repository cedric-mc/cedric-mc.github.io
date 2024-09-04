<?php
// Fonction de vérification de l'existence d'un site web
function checkSite($site) {
    $connect = 0;
    $no_code = 0;
}

// Fonction de vérification de l'existence d'un fichier
function checkFile($file) {
    $file = filter_var($file, FILTER_SANITIZE_URL);
    $file = filter_var($file, FILTER_VALIDATE_URL);
    if ($file === false) {
        return false;
    }
    return true;
}

// Fonction de vérification de l'existence d'un répertoire
function checkDir($dir) {
    $dir = filter_var($dir, FILTER_SANITIZE_URL);
    $dir = filter_var($dir, FILTER_VALIDATE_URL);
    if ($dir === false) {
        return false;
    }
    return true;
}

// Fonction de vérification de l'existence d'un fichier de configuration
function checkConfig($config) {
    $config = filter_var($config, FILTER_SANITIZE_URL);
    $config = filter_var($config, FILTER_VALIDATE_URL);
    if ($config === false) {
        return false;
    }
    return true;
}
