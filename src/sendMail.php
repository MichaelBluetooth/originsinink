<?php
// Mail sender script
// Please change destination email, title and messages text settings.

// Destination email address (example: john@doe.com)
define('EMAIL_DEST', 'kevin@originsinink.com');

// Contact form error message
define('ERROR_MESSAGE', 'Something went wrong, please try again.');

// Contact form message title
define('CONTACT_EMAIL_TITLE', 'Email from Origins form');

// Contact form success message
define('CONTACT_SUCCESS_MESSAGE', 'Thank you! We will get back to you soon.');


// Variables assignment
$json = file_get_contents('php://input');
$obj = json_decode($json, true);

$name         = isset($obj['name']) ? $obj['name'] : '';
$email        = isset($obj['email']) ? $obj['email'] : '';
$subject      = isset($obj['subject']) ? $obj['subject'] : '';
$message      = isset($obj['message']) ? $obj['message'] : '';

// Send email if required fields are filled
if(!empty($name) && !empty($email) && !empty($subject) && !empty($message)) {
    // Headers
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: ' . $email;

    // Message title, with subject included
    $message_title = CONTACT_EMAIL_TITLE . " ($subject)";

    // Message body
    $message_body = "<strong>Subject:</strong> $subject<br /><strong>Name:</strong> $name<br /><strong>Email:</strong> $email<br /><br /><strong>Message:</strong><br />$message";

    // Send mail function
    mail(EMAIL_DEST, $message_title, $message_body, $headers);

    // Show success message
    echo '<div class="box-success round-3"><div class="box-content"><p>' . CONTACT_SUCCESS_MESSAGE . '</p></div></div>';
    exit;
} else {
    // Show error message
    echo '<div class="box-error round-3"><div class="box-content"><p>' . ERROR_MESSAGE . '</p></div></div>';
    exit;
}

?>
