<html>

<head>
    <title>Contact</title>
    <link rel="stylesheet" href="style/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
    <link rel="stylesheet" href="../style/style.css">
</head>

<body>
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
        if (mail($to, $subject, $body, $headers)) {
            echo 'Message envoyé avec succès.';
            header("Location: index.html#contact");
        } else {
            echo 'Une erreur est survenue lors de l\'envoi du message.';
        }
    } else {
        header("Location: index.html#contact");
    }
    ?>
    <br>
    <br>
    <p>
        <a href="index.html#contact">Retour à la page d'accueil</a>
    </p>
</body>

</html>