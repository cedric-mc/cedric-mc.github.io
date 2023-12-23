<?php
$utilisateur = "";
$motdepasse = "";
$serveur = "";
$bdd = "";
try {
    $dsn = "mysql:host=$serveur;dbname=$bdd;charset=utf8mb4";
    $cnx = new PDO($dsn, $utilisateur, $motdepasse);
    $cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>