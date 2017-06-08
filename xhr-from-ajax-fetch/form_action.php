<?php


echo '<pre>';

if($_POST){
    echo "<h1>POST</h1>";
    print_r($_POST);
    echo "<hr>";
}

if(file_get_contents("php://input")){
    echo "<h1>php://input</h1>";
    print_r(file_get_contents("php://input"));
    echo "<hr>";
}

if($_FILES){
    echo "<h1>file</h1>";
    print_r($_FILES);
    echo "<hr>";
}