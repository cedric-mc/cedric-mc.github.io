<?php
// Afficher les erreurs PHP
error_reporting(E_ALL);
ini_set('display_errors', 1);

//if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupération des variables et sécurisation des données
    $nom = "Cédric";//$_POST['nom'];
    $email = "cedric.mc11@gmail.com";//$_POST['email'];
    $message = "test";//$_POST['message'];

    include("languages/conf.php");
    require_once("PHPMailer/src/PHPMailer.php");
    require_once("PHPMailer/src/SMTP.php");
    require_once("PHPMailer/src/Exception.php");

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    $mail = new PHPMailer(true);
    // Configurations SMTP
    $mail->isSMTP(); // Envoyer en utilisant SMTP
    $mail->Host = $emailHost; // Définir le serveur SMTP à utiliser
    $mail->Port = $emailPort; // Port TCP à connecter
    $mail->SMTPAuth = true; // Activer l'authentification SMTP
    $mail->Username = $emailAddress; // Nom d'utilisateur SMTP
    $mail->Password = $emailPassword; // Mot de passe SMTP

    // Destinataires
    $mail->setFrom($email, $nom);
    $mail->addAddress($emailAddress, $nom); // Ajouter un destinataire

    // Contenu
    $mail->isHTML(true); // Définir le format d'email sur HTML
    $mail->Subject = "Nouveau message du formulaire de contact du Portfolio";
    $mail->Body = "Nom: $nom\nEmail: $email\nMessage: $message";
    $mail->CharSet = 'UTF-8';

    try {
        $mail->send();
        header("Location: ./#contact?success");
        die(); // Arrête l'exécution du script après la redirection
    } catch (Exception $e) {
        echo "Erreur lors de l'envoi du message: {$mail->ErrorInfo}";
        header("Location: ./#contact?error");
        die(); // Arrête l'exécution du script après la redirection
    }
//}
?>