<?php
session_start();
if (!isset($_SESSION['lang'])) {
    $lang = "fr";
} else {
    $lang = $_SESSION['lang'];
}
include("conf.php"); // Connexion à la base de données
// Table utilisée : portfolio (id, texte, category, lang)

// On initialise les variables relatives à la langue choisie
$requestSelectedLang = $cnx->prepare("SELECT texte FROM portfolio WHERE (category = :category1 OR category = :category2) AND lang = :lang");
$requestSelectedLang->bindParam(":category1", "lang-name");
$requestSelectedLang->bindParam(":category2", "disabled-lang-name");
$requestSelectedLang->bindParam(":lang", $lang);
$requestSelectedLang->execute();
$resultSelectedLang = $requestSelectedLang->fetchAll(PDO::FETCH_OBJ);
$languageName = $resultSelectedLang[0]->texte;
$disabledLanguageName = $resultSelectedLang[1]->texte;

// On récupère le texte de la barre de navigation
$requestNav = $cnx->prepare("SELECT texte FROM portfolio WHERE category = :category AND lang = :lang");
$requestNav->bindParam(":category", "navbar");
$requestNav->bindParam(":lang", $lang);
$requestNav->execute();
$resultNav = $requestNav->fetchAll(PDO::FETCH_OBJ);
foreach ($resultNav as $ligne) {
    ${"nav$i"} = $ligne->texte; // $nav1, $nav2, $nav3, etc.
    $i++;
}

// On récupère le texte de l'en-tête
$requestHeader = $cnx->prepare("SELECT texte FROM portfolio WHERE category = :category AND lang = :lang");
$requestHeader->bindParam(":category", "header");
$requestHeader->bindParam(":lang", $lang);
$requestHeader->execute();
$resultHeader = $requestHeader->fetchAll(PDO::FETCH_OBJ);
foreach ($resultHeader as $ligne) {
    ${"header$i"} = $ligne->texte; // $header1, $header2, $header3, etc.
    $i++;
}

// On récupère les titres des sections
$requestSections = $cnx->prepare("SELECT texte FROM portfolio WHERE category = :category AND lang = :lang");
$requestSections->bindParam(":category", "title-section");
$requestSections->bindParam(":lang", $lang);
$requestSections->execute();
$resultSections = $requestSections->fetchAll(PDO::FETCH_OBJ);
foreach ($resultSections as $ligne) {
    ${"titleSection$i"} = $ligne->texte; // $titleSection1, $titleSection2, $titleSection3, etc.
    $i++;
}