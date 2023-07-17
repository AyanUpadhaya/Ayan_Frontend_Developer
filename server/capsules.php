<?php
    require_once 'config.php';

    function get_all_capsules(){
        $url = "https://api.spacexdata.com/v4/capsules";
        $res = file_get_contents($url);

        if($res!==false){
            return  json_decode($res,JSON_PRETTY_PRINT);
        }else{
            return [];
        }

    

    }

    if($_SERVER['REQUEST_METHOD']==="GET"){
        $capsules = get_all_capsules();
        echo json_encode($capsules);
    }else{
        http_response_code(405);
        echo json_encode(["error"=>"Method Not allowed"]);

    }
?>