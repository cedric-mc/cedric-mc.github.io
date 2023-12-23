<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupération des variables et sécurisation des données
        $nom = $_POST['nom'];
        $email = $_POST['email'];
        $message = $_POST['message'];

        // Configuration de l'email
        $to = 'mariyaconsta02@edu.univ-eiffel.fr';
        $subject = 'Nouveau message de formulaire de contact';
        $body = "Nom: $nom\nEmail: $email\nMessage: $message";
        $headers = "Content-Type: text/plain; charset=UTF-8\r\n";

        // Envoi de l'email
        $envoiMail = mail($to, $subject, $body, $headers);

        // Envoyer le résultat à JavaScript
        echo "<script>";
        echo "var envoiMail = " . ($envoiMail ? "true" : "false") . ";";
        echo "</script>";
        header("Location: index.php#contact");
    }
    header("Location: index.php#contact");
?>
