<?php
    if (!isset($_POST['nom']) || !isset($_POST['email']) || !isset($_POST['message'])) {
        header("Location: ./#contact");
        exit(); // Arrête l'exécution du script après la redirection
    }
    //PHPMailer
    require "../PHPMailer/src/PHPMailer.php";
    require "../PHPMailer/src/SMTP.php";
    require "../PHPMailer/src/Exception.php";

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    // Récupération des variables et sécurisation des données
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // Afficher les erreurs PHP
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    include_once("conf.php");

    $mail = new PHPMailer(true);
    // Configurations SMTP
    $mail->isSMTP(); // Envoyer en utilisant SMTP
    $mail->Host = $host; // Définir le serveur SMTP à utiliser
    $mail->Port = 465; // Port TCP à connecter
    $mail->SMTPSecure = "ssl";
    $mail->SMTPAuth = true; // Activer l'authentification SMTP
    $mail->Username = $username; // Nom d'utilisateur SMTP
    $mail->Password = $password; // Mot de passe SMTP
    $mail->CharSet = "UTF-8";
    $mail->setFrom($email, $nom); // Adresse email de l'expéditeur

    // Contenu
    $mail->isHTML(true); // Définir le format d'email sur HTML
    $mail->Subject = "Nouveau message du formulaire de contact du Portfolio";
    $mail->Body = "Nom: $nom\nEmail: $email\nMessage: $message";
    $mail->addAddress($username, $nom); // Ajouter un destinataire

    try {
        $mail->send();
        header("Location: ./#contact?success");
        exit(); // Arrête l'exécution du script après la redirection
    } catch (Exception $e) {
        echo "Erreur lors de l'envoi du message: {$mail->ErrorInfo}";
//            header("Location: ./#contact?error");
        exit(); // Arrête l'exécution du script après la redirection
    }
?>
