<?php
    require_once 'config.php';
    require_once 'enviroment.php';
    require 'apiHandler.php';

    if($_SERVER['REQUEST_METHOD']==="GET"){
        $api_handler = new APIHandler('https://api.spacexdata.com/v4/crew');
        $crews = $api_handler->getAllData();
        echo json_encode($crews);
    }else{
        http_response_code(405);
        echo json_encode(["error"=>"Method Not allowed"]);

    }
?>