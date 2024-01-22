<?php
if (session_status() == PHP_SESSION_NONE) {
    session_start();
}
if (!isset($_SESSION['lang'])) {
    $_SESSION['lang'] = "fr";
}
$lang = $_SESSION['lang'];
include("conf.php"); // Connexion à la base de données
// Table utilisée : portfolio (id, texte, category, lang)

// On initialise les variables relatives à la langue choisie
$requestSelectedLang = $cnx->prepare("SELECT texte FROM portfolio WHERE (category = 'lang-name' OR category = 'disabled-lang-name') AND lang = :lang");
$requestSelectedLang->bindParam(":lang", $lang);
$requestSelectedLang->execute();
$resultSelectedLang = $requestSelectedLang->fetchAll(PDO::FETCH_OBJ);
$languageName = $resultSelectedLang[0]->texte;
$disabledLanguageName = $resultSelectedLang[1]->texte;

// On récupère le texte de la barre de navigation
$requestNav = $cnx->prepare("SELECT texte FROM portfolio WHERE category = 'navbar' AND lang = :lang");
$requestNav->bindParam(":lang", $lang);
$requestNav->execute();
$resultNav = $requestNav->fetchAll(PDO::FETCH_OBJ);
$i = 1;
foreach ($resultNav as $ligne) {
    ${"nav$i"} = $ligne->texte; // $nav1, $nav2, $nav3, etc.
    $i++;
}

// On récupère le texte de l'en-tête
$requestHeader = $cnx->prepare("SELECT texte FROM portfolio WHERE category = 'header' AND lang = :lang");
$requestHeader->bindParam(":lang", $lang);
$requestHeader->execute();
$resultHeader = $requestHeader->fetchAll(PDO::FETCH_OBJ);
$i = 1;
foreach ($resultHeader as $ligne) {
    ${"header$i"} = $ligne->texte; // $header1, $header2, $header3, etc.
    $i++;
}

// On récupère les titres des sections
$requestSections = $cnx->prepare("SELECT texte FROM portfolio WHERE category = 'title-section' AND lang = :lang");
$requestSections->bindParam(":lang", $lang);
$requestSections->execute();
$resultSections = $requestSections->fetchAll(PDO::FETCH_OBJ);
foreach ($resultSections as $ligne) {
    ${"titleSection$i"} = $ligne->texte; // $titleSection1, $titleSection2, $titleSection3, etc.
    $i++;
}