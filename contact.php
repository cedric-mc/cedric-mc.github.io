<?php
    if (!isset($_POST['nom']) || !isset($_POST['email']) || !isset($_POST['message'])) {
        header("Location: ./#contact");
        exit(); // Arrête l'exécution du script après la redirection
    }
    // Récupération des variables et sécurisation des données
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    require_once('config.php');
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
        $mail->Host       = MAIL_HOST;
        $mail->SMTPAuth   = true;
        $mail->Username   = MAIL_USERNAME;
        $mail->Password   = MAIL_PASSWORD;
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = MAIL_PORT;
        $mail->CharSet = 'UTF-8';

        // Destinataire
        $mail->setFrom($email, $nom);
        $mail->addAddress(MAIL_USERNAME, "Cédric Mariya Constantine");

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = MAIL_SUBJECT;
        $mail->Body    = MAIL_BODY . "<br><br><strong>Nom</strong> : " . $nom . "<br><strong>Email</strong> : " . $email . "<br><strong>Message</strong> : " . $message;
        $mail->AltBody = MAIL_ALT_BODY . "\n\nNom : " . $nom . "\nEmail : " . $email . "\nMessage : " . $message;

        $mail->send();
        echo "Message has been sent";
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
?>
