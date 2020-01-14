<?php

$name= $_POST['name'];
$visitor_email = $_POST['email'];
$message = $_POST['message'];
$phone = $_POST['phone'];


$email_from = 'mj@htmlpractice.dk';

$email_subject = "New form submission";

$email_body = "User Name: $name.\n".
                "User Email: $visitor_email.\n".
                  "User Phone: $phone.\n".
                    "User Message: $message.\n";

$to = "mikkelfaartoftjensen@gmail.com";

$headers = "From: $email_from \r\n";

$headers .= "Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers);

header("Location: index.html");

$secretKey = "6LdnSMcUAAAAAKnhtK3ZK6UYpmgfYFNvydnGINOy";
          $responseKey = $_POST['g-recaptcha-response'];
          $UserIp = $_SERVER['REMOTE_ADDR'];
          $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$UserIp";

          $response = file_get_contents($url);
          $response = json_decode($response);
?>
