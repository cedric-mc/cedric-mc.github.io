<html>

<head>
    <title>Contact</title>
    <link rel="stylesheet" href="style/style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="utf-8">
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
        $subject = 'New message from the form of my Career Portfolio';
        $body = "Name: $nom\nEmail: $email\nMessage: $message";
        $headers = "Content-Type: text/plain; charset=UTF-8\r\n";

        // Envoi de l'email
        if (mail($to, $subject, $body, $headers)) {
            echo 'Message envoy is a success';
            header("Location: index.html#contact");
        } else {
            echo 'An error occurred during the sending of the message.';
        }
    } else {
        header("Location: index.html#contact");
    }
    ?>
    <br>
    <br>
    <p>
        <a href="index.html#contact">Go back to the page home</a>
    </p>
</body>

</html>