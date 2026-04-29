<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "andrearho24@gmail.com"; // 🔴 CAMBIA QUI

    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $telefono = htmlspecialchars($_POST['telefono']);
    $message = htmlspecialchars($_POST['message']);

    $subject = "Nuovo messaggio dal sito";

    $body = "Nome: $name\n";
    $body .= "Email: $email\n";
    $body .= "Telefono: $telefono\n\n";
    $body .= "Messaggio:\n$message";

    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Messaggio inviato con successo!";
    } else {
        echo "Errore nell'invio del messaggio.";
    }
}
?>