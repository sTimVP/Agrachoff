<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);

    if ($email) {
        $subject = "Привет";
        $message = "Привет";
        $headers = "From: no-reply@yourdomain.com\r\n";

        if (mail($email, $subject, $message, $headers)) {
            http_response_code(200);
            echo "Письмо отправлено.";
        } else {
            http_response_code(500);
            echo "Ошибка отправки письма.";
        }
    } else {
        http_response_code(400);
        echo "Некорректный email.";
    }
} else {
    http_response_code(405);
    echo "Метод не поддерживается.";
}
?>
