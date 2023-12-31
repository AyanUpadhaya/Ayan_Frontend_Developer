<?php
require_once 'config.php';
require_once 'enviroment.php';
require 'apiHandler.php';

$authToken = apache_getenv('ACESSTOKEN');


// Route the requests
if ($_SERVER['REQUEST_METHOD'] === "GET") {
    //check authentication
    $headers = apache_request_headers();

    if(isset($headers['Authorization']) && $headers['Authorization'] === $authToken){
        $apiHandler = new APIHandler("https://api.spacexdata.com/v4/rockets");
        $data = $apiHandler->getAllData();
        echo json_encode($data);
    }else{
        http_response_code(401);
        echo json_encode(['error'=>'Unauthorized Access']);
    }

} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}

?>