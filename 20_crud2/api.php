<?php

include_once("utility.php");

$db = connectDatabase();

if (isset($_POST["create_user"])){
  createUser();
  header("Location: index.php");

} elseif (isset($_GET["action"]) && $_GET["action"] === "read_users") {
  readUsers();
  header("Location: index.php");

} elseif (isset($_GET["action"]) && $_GET["action"] === "delete_user") {
  deleteUser();
  header("Location: index.php");

} elseif (isset($_POST["update_user"])) {
  updateUser();
  header("Location: index.php");
}


function createUser(){
  global $db;

  $req = $db->prepare("INSERT INTO utilisateurs (nom, prenom, email) VALUE (:nom, :prenom, :email)");

  $req->bindParam(':nom', $_POST["nom"]);
  $req->bindParam(':prenom', $_POST["prenom"]);
  $req->bindParam(':email', $_POST["email"]);

  $res = $req->execute();


  header("Location: index.php");

  debugX($res);
}





function readUser($id) {
  global $db;
  $req = $db->prepare("SELECT * FROM utilisateurs WHERE id = :id");
  $req->bindParam(':id', $id);
  $req->execute();
  $res = $req->fetch(PDO::FETCH_OBJ);
  return $res;
}


function readUsers() {
  global $db;
  $req = $db->prepare("SELECT * FROM utilisateurs");
  $req->execute();
  $res = $req->fetchAll(PDO::FETCH_OBJ);
  return $res;
}


function updateUser() {
  global $db;
  $req = $db->prepare("UPDATE `utilisateurs` SET `nom` = :nom, `prenom` = :prenom, `email` = :email WHERE id = :id");
  $req->bindParam(':id', $_SESSION["current_id_utilisateur"]);
  $req->bindParam(':nom', $_POST["nom"]);
  $req->bindParam(':prenom', $_POST["prenom"]);
  $req->bindParam(':email', $_POST["email"]);

  $res = $req->execute();
  unset($_SESSION["current_id_utilisateur"]);
  return $res;
}


function deleteUser() {
  global $db;
  $req = $db->prepare("DELETE FROM utilisateurs WHERE id = :id");
  $req->bindParam(':id', $_GET["id"]);
  $req->execute();
  // echo $sql;
}

