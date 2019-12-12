<?php
  if(isset($_POST['submit']))
  {
      $User_name = $_POST['name']
      $phone = $_POST['phone']
      $user_email = $_POST['email']
      $user_message = $_POST['message']

      $email_from = 'mj@htmlpractice.dk';
      $email_subject = 'Ny email';
      $email_body = "Name: $User_name.\n".
                    "Phone Number: $phone.\n".
                    "Email Id: $user_email.\n".
                    "User Message: $user_message.\n";

          $to_email = "mikkelfaartoftjensen@gmail.com";
          $headers = "From: $email_from \r\n";
          $headers .= "Reply to: $user_email\r\n";

        $secretKey = "6LdnSMcUAAAAAKnhtK3ZK6UYpmgfYFNvydnGINOy";
        $responseKey = $_POST['g-recaptcha-response'];
        $UserIp = $_SERVER['REMOTE_ADDR'];
        $url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$UserIp";

        $response = file_get_contents($url);
        $response = json_decode($response);

        if ($respone->success)
        {
          mail($to_email,$email_subject,$email_body,$headers);
          echo "Besked sendt"
        }
        else
        {
          echo "Venligst bekræft du ikke er en robot"
        }
  }
  ?>
 
