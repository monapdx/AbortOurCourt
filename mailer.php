<?php
use PHPMailer\PHPMailer\PHPMailer;
require_once __DIR__ . '/vendor/autoload.php';
$errors = [];
$errorMessage = '';

if (!empty($_POST)) {
   $name = $_POST['name'];
   $email = $_POST['email'];
   $message = $_POST['message'];

   if (empty($name)) {
       $errors[] = 'Name is empty';
   }

   if (empty($email)) {
       $errors[] = 'Email is empty';
   } else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
       $errors[] = 'Email is invalid'

   }


   if (empty($message)) {
       $errors[] = 'Message is empty';
   }

   if (!empty($errors)) {
       $allErrors = join('<br/>', $errors);
       $errorMessage = "<p style='color: red;'>{$allErrors}</p>";
   } else {
       $mail = new PHPMailer();


       // specify SMTP credentials


       $mail->isSMTP();
       $mail->Host = 'smtp.mailtrap.io';
       $mail->SMTPAuth = true;
       $mail->Username = 'your_smtp_username';
       $mail->Password = 'your_smtp_password';
       $mail->SMTPSecure = 'tls';
       $mail->Port = 2525;
       $mail->setFrom($email, 'Mailtrap Website');
       $mail->addAddress('example@example.com', 'Me');
       $mail->Subject = 'New message from your website';

       // Enable HTML if needed
       $mail->isHTML(true);
       $bodyParagraphs = ["Name: {$name}", "Email: {$email}", "Message:", nl2br($message)];
       $body = join('<br />', $bodyParagraphs);
       $mail->Body = $body;
       echo $body;

       if($mail->send()){
           header('Location: thank-you.html'); // Redirect to 'thank you' page. Make sure you have it
       } else {

           $errorMessage = 'Oops, something went wrong. Mailer Error: ' . $mail->ErrorInfo;
       }

   }

}

?>

<html>
<body>
 <form action="/swiftmailer_form.php" method="post" id="contact-form">
   <h2>Contact us</h2>
   <?php echo((!empty($errorMessage)) ? $errorMessage : '') ?>
   <p>
     <label>First Name:</label>
     <input name="name" type="text"/>
   </p>
   <p>
     <label>Email Address:</label>
     <input style="cursor: pointer;" name="email" type="text"/>
   </p>
   <p>
     <label>Message:</label>
     <textarea name="message"></textarea>
   </p>
   <p>
     <input type="submit" value="Send"/>
   </p>
 </form>


 <script src="//cdnjs.cloudflare.com/ajax/libs/validate.js/0.13.1/validate.min.js"></script>

 <script>

     const constraints = {
         name: {
             presence: {allowEmpty: false}
         },
         email: {
             presence: {allowEmpty: false},
             email: true
         },
         message: {
             presence: {allowEmpty: false}
         }
     };

     const form = document.getElementById('contact-form');
     form.addEventListener('submit', function (event) {
         const formValues = {
             name: form.elements.name.value
             email: form.elements.email.value,
             message: form.elements.message.value

         };

         const errors = validate(formValues, constraints);

         if (errors) {
           event.preventDefault();
             const errorMessage = Object
                 .values(errors)
                 .map(function (fieldValues) {
                     return fieldValues.join(', ')
                 })
                 .join("\n");
             alert(errorMessage);

         }

     }, false);

 </script>
</body>
</html>
