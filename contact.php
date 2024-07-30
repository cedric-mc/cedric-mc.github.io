<?php
    if (!isset($_POST['nom']) || !isset($_POST['email']) || !isset($_POST['message'])) {
        header("Location: ./#contact");
        exit(); // Arrête l'exécution du script après la redirection
    }
    // Récupération des variables et sécurisation des données
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    // Afficher les erreurs PHP
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    include_once("config.php");
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;
    //PHPMailer
    require "PHPMailer/src/PHPMailer.php";
    require "PHPMailer/src/SMTP.php";
    require "PHPMailer/src/Exception.php";
    $mail = new PHPMailer(true);
    try {
        // Envoyer l'email
        $mail->SMTPDebug = SMTP::DEBUG_SERVER;
        $mail->isSMTP();
        $mail->Host       = $host;
        $mail->SMTPAuth   = true;
        $mail->Username   = $username;
        $mail->Password   = $password;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 465;

        // Destinataire
        $mail->setFrom($email, $nom);
        $mail->addAddress($username, "Cédric Mariya Constantine");

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = 'Here is the subject';
        $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
?>
