<?php
class APIHandler {
    private $url;

    public function __construct($url) {
        $this->url = $url;
    }

    public function getAllData() {
        $res = file_get_contents($this->url);

        if ($res !== false) {
            return json_decode($res, JSON_PRETTY_PRINT);
        } else {
            return [];
        }
    }
}
?>