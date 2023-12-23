<?php
include("conf.php");

$requete = $cnx->prepare("SELECT texte FROM portfolio WHERE langue = 'fr' AND category = 'navbar';");
if ($requete->execute()) {
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    $i = 1;
    foreach ($resultats as $ligne) {
        // Créez des variables dynamiquement
        ${"navbar$i"} = $ligne['texte']; // $navbar1, $navbar2, $navbar3, etc.
        $i++;
    }
} else {
    echo "Echec de la requête.";
}
$requete->closeCursor();

$requete = $cnx->prepare("SELECT texte FROM portfolio WHERE langue = 'fr' AND category = 'header';");
if ($requete->execute()) {
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    $i = 1;
    foreach ($resultats as $ligne) {
        ${"header$i"} = $ligne['texte']; // $header1, $header2, $header3, etc.
        $i++;
    }
} else {
    echo "Echec de la requête.";
}
$requete->closeCursor();

$requete = $cnx->prepare("SELECT texte FROM portfolio WHERE langue = 'fr' AND category = 'title-section';");
if ($requete->execute()) {
    $resultats = $requete->fetchAll(PDO::FETCH_ASSOC);
    $i = 1;
    foreach ($resultats as $ligne) {
        ${"titleSection$i"} = $ligne['texte']; // $titleSection1, $titleSection2, $titleSection3, etc.
        $i++;
    }
} else {
    echo "Echec de la requête.";
}
$requete->closeCursor();