<?php
    // access token
    
    //allow request from any origin
    header("Access-Control-Allow-Origin: *");

    //allow methods
    header("Access-Control-Allow-Methods: GET,POST,PUT,DELETE");

    //allow specific headers
    header("Access-Control-Allow-Headers: Content-Type, Authorization");

    //handle prefligh request
    if($_SERVER['REQUEST_METHOD']==="OPTIONS"){
        http_response_code(200);
        exit();
    }
?>