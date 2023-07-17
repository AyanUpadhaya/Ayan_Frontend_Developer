<?php
    require_once 'config.php';
    require_once 'enviroment.php';
    require 'apiHandler.php';

    // Route the requests
    if($_SERVER['REQUEST_METHOD']==="GET"){
        $api_handler = new APIHandler('https://api.spacexdata.com/v4/capsules');
        $capsules = $api_handler->getAllData();
        echo json_encode($capsules);
    }else{
        http_response_code(405);
        echo json_encode(["error"=>"Method Not allowed"]);

    }
?>