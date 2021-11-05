<?php

$name = $_POST['name'];
$visitor_email = $_POST['email'];
$title = $_POST['title'];
$message = $_POST['message'];

//Validate first
if(empty($name)||empty($visitor_email)) 
{
    echo "Name and email are mandatory!";
    exit;
}

if(IsInjected($visitor_email))
{
    echo "Bad email value!";
    exit;
}

$email_from = 'formularz@produktowa.katowice.pl';//FROM
$email_subject = "Nowa wiadomość ze strony Fotografia Produktowa";
$email_body = 
    "Otrzymałeś nową wiadomość od użytkownika $name.\n".
    "Tytuł wiadomości: $title \n".
    "Treść wiadomości:\n $message\n".
    "Odpowiedz: $visitor_email\n";

    
$to = "wiltosz@gmail.com";// TO
$headers = "From: $email_from \r\n";
$headers .= "Reply-To: $visitor_email \r\n";
//Send the email!
mail($to,$email_subject,$email_body,$headers);
echo "Formularz wysłany. Dziękujemy za kontakt!"; 

//done. redirect to thank-you page.
// header('Location: ../thank-you.html');


// Function to validate against any email injection attempts
function IsInjected($str)
{
  $injections = array('(\n+)',
              '(\r+)',
              '(\t+)',
              '(%0A+)',
              '(%0D+)',
              '(%08+)',
              '(%09+)'
              );
  $inject = join('|', $injections);
  $inject = "/$inject/i";
  if(preg_match($inject,$str))
    {
    return true;
  }
  else
    {
    return false;
  }
}
   
?> 