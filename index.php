<?php
//SETTING UP PAGE

//insert header
require_once('templates/header.php');

//insert navigation
require_once('templates/navigation.php');

//insert content files
require_once('templates/template.php');
require_once('templates/home.php');
require_once('templates/page-about.php');
require_once('templates/page-admin.php');
require_once('templates/page-contact.php');

require_once('templates/page-crud-events.php');
require_once('templates/page-crud-user.php');
require_once('templates/page-event.php');
require_once('templates/page-partners.php');
require_once('templates/page-login.php');
require_once('templates/page-register.php');


//insert scripts
require_once('templates/scripts.php');
?>