<?php 
include_once("utility.php");


$db = connectDatabase();

if (isset($_POST["create_lieux"])){
    createData();
}

if(isset($_GET["action"]) && $_GET["action"] === "lire_lieux"){
    readAllLieux();
}


if(isset($_GET["action"]) && $_GET["action"] === "delete_lieux"){
    deleteData();
}

function createData(){
    global $db;

    $req = $db->prepare("INSERT INTO lieux (adresse, cp, lati, longi) VALUES (:adresse, :cp, :lati, :longi)");

    $req->bindParam(':adresse', $_POST["adresse"]);
    $req->bindParam(':cp', $_POST["cp"]);
    $req->bindParam(':lati', $_POST["latitude"]);
    $req->bindParam(':longi', $_POST["longitude"]);

    $res = $req->execute();
    
    
    header("Location: index.php");

     debugX($res);
}

function readAllLieux(){
    global $db;
    $req = $db->prepare("SELECT * FROM lieux");
    $req->execute();
    $res = $req->fetchAll(PDO::FETCH_OBJ);
    return $res;
}

function readLieu($id){
    global $db;
    $req = $db->prepare("SELECT * FROM lieux WHERE id = :id");
    $req->bindParam(':id',$id);
    $req->execute();
    $res = $req->fetch(PDO::FETCH_OBJ);
    return $res;
}


function deleteData(){
    global $db;
    $req = $db->prepare("DELETE FROM lieux WHERE id= :id");
    $req->bindParam(':id' , $_GET["id"]);
    $req->execute();
    header("Location: index.php");
    
}