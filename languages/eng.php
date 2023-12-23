<?php
include("conf.php");
$requete = $cnx->prepare("SELECT texte FROM portfolio WHERE langue = 'eng' AND category = 'navbar';");
if ($requete->execute()) {
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    $i = 1;
    foreach ($resultats as $ligne) {
        // Créez des variables dynamiquement
        ${"navbar$i"} = $ligne['texte']; // $navbar1, $navbar2, $navbar3, etc.
        $i++;
    }
} else {
    echo "Echec de l'insertion";
}
$requete->closeCursor();

$requete = $cnx->prepare("SELECT texte FROM portfolio WHERE langue = 'eng' AND category = 'header';");
if ($requete->execute()) {
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    $i = 1;
    foreach ($resultats as $ligne) {
        ${"header$i"} = $ligne['texte'];
        $i++;
    }
} else {
    echo "Echec de la requête.";
}
$requete->closeCursor();

$requete = $cnx->prepare("SELECT texte FROM portfolio WHERE langue = 'eng' AND category = 'title-section';");
if ($requete->execute()) {
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    $i = 1;
    foreach ($resultats as $ligne) {
        ${"titleSection$i"} = $ligne['texte'];
        $i++;
    }
} else {
    echo "Echec de la requête.";
}
$requete->closeCursor();

$requete = $cnx->prepare("SELECT texte FROM portfolio WHERE langue = 'eng' AND category = 'container';");
if ($requete->execute()) {
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    $i = 1;
    foreach ($resultats as $ligne) {
        ${"container$i"} = $ligne['texte'];
        $i++;
    }
} else {
    echo "Echec de la requête.";
}