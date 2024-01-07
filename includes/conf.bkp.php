<?php
// Connexion à la base de données
$utilisateur = "";
$motdepasse = "";
$serveur = "";
$bdd = "";
$type = "";
try {
    $cnx = new PDO("$type:host=$serveur;dbname=$bdd;charset=utf8mb4", $utilisateur, $motdepasse);
    $cnx->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}

// Initialisation des variables pour l'envoi de mail
$emailAddress = "";
$emailPassword = "";
$emailHost = "";
$emailPort = 0;
$emailSecurity = "";
?>
