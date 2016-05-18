<?php

// configure
$from = 'Demo contact form <demo@domain.com>';
$sendTo = '<jonaslindstrom86@gmail.com>';
$subject = 'Förfrågan från Worksite.se';
$fields = array('email' => 'Email'); // array variable name => Text to appear in email
$okMessage = 'Spännande! Vi håller dig uppdaterad!';
$errorMessage = 'Alla fält måste vara ifyllda!';

// let's do the sending

try
{
    $emailText = "You have new message from contact form\n=============================\n";

    foreach ($_POST as $key => $value) {

        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    mail($sendTo, $subject, $emailText, "From: " . $from);

    $responseArray = array('type' => 'success', 'message' => $okMessage);
}
catch (\Exception $e)
{
    $responseArray = array('type' => 'danger', 'message' => $errorMessage);
}

if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    
    header('Content-Type: application/json');
    
    echo $encoded;
}
else {
    echo $responseArray['message'];
}