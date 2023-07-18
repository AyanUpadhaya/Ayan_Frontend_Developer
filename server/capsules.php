<?php
    require_once 'config.php';
    require_once 'enviroment.php';
    require 'apiHandler.php';
    $authToken = apache_getenv('ACESSTOKEN');
    

    // Route the requests
    if($_SERVER['REQUEST_METHOD']==="GET"){
        $headers = apache_request_headers();
        if(isset($headers['Authorization']) && $headers['Authorization']===$authToken){
            $api_handler = new APIHandler('https://api.spacexdata.com/v4/capsules');
            $capsules = $api_handler->getAllData();
            echo json_encode($capsules);
        }else{
            http_response_code(401);
            echo json_encode(["error"=>"Unauthorized Access"]);
        }
        
    }else{
        http_response_code(405);
        echo json_encode(["error"=>"Method Not allowed"]);

    }
?>