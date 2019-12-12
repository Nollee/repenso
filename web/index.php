<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>Repenso</title>
    <link rel="stylesheet" href="css/style.css">
     <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>


  <div class="contact-form">
    <h2>Kontaktformular</h2>
    <form class="" action="" method="post">
      <input type="text" name="name" placeholder="Name" required>
      <input type="text" name="phone" placeholder="Phone number" required>
      <input type="text" name="email" placeholder="Email" required>
      <textarea  name="message" placeholder="Message" required></textarea>
      <!------------ Google recaptcha goes here---------->
 <div class="g-recaptcha" data-sitekey="6LdnSMcUAAAAAIi8RzxGLxzUmgf2HVot8ATE3DfD"></div>
      <!------------ Google recaptcha goes here end---------->
      <input type="submit" name="submit" value="Send Message" class="submit-btn">
    </form>

  <div class="status">
    <?php
      if(isset($_POST['submit']))
      {
          $User_name = $_POST['name'];
          $phone = $_POST['phone'];
          $user_email = $_POST['email'];
          $user_message = $_POST['message'];

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
              echo "Besked sendt";
            }
            else
            {
              echo "Venligst bekræft du ikke er en robot"; 
            }
      }
      ?>
    </div>
</div>

  </body>
</html>
