<?php
header('Content-Type: application/json');

function helloWorld(){
    $response = array('message' => 'hello world');
    return json_encode($response);
}

echo helloWorld();
