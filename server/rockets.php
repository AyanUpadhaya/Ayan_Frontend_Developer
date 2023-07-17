<?php
require_once 'config.php';
require_once 'enviroment.php';

$authToken = apache_getenv('ACESSTOKEN');

function get_all_Rockets(){
    $url = "https://api.spacexdata.com/v4/rockets";
    $res = file_get_contents($url);

    if($res !== false){
        return json_decode($res,JSON_PRETTY_PRINT);
    }else{
        return [];
    }
}

// Route the requests
if($_SERVER['REQUEST_METHOD']==="GET"){
    $data = get_all_Rockets();
    echo json_encode($data);
}else{
    http_response_code(405);
    echo json_encode(['error'=>'Method not allowed']);
}

?>