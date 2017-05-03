<?php 
include_once("utility.php");
include_once("api.php");
$all_lieux = readAllLieux();
//session_destroy();


?>


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title>CRUD 1</title>
        <link rel="stylesheet" href="style.css">
        <script src="app.js"></script>
        <script src="utility.js"></script>
    </head>
    <body>
        <h1 class="title"></h1>
        <p class="text">
            l'acronyme CRUD représente les opérations élémentaires en programmation <br>
            CREATE / READ / UPDATE / DELETE
        </p>
        <p class="text">
            première étape : créer une petite base de données <br>
            comprendre les principes de base <br>
            insérer , lire , mettre a jour , supprimer des données... <br>
            nous commencerons par la méthode synchrone <br>
            puis utiliserons la technologie AJAX pour comuniquer de facon asynchrone avec le serveur PHP

        </p>
        <h2>Creer des lieux (CREATE)</h2>
        <form action="api.php" method="post">
            <input type="text" class="input" name="adresse" placeholder="adresse" value="test">
            <input type="text" class="number" name="cp" placeholder="code postal" value="75018">
            <input type="text" class="number" name="latitude" placeholder="latitude" value="45.555">
            <input type="text" class="number" name="longitude" placeholder="longitude" value="45.777">
            <input type="submit" id="submit_create" name="create_lieux" >
        </form>
        <h2 class=" title">Afficher les lieux (READ)</h2>
        <a href="api.php?action=lire_lieux">
            récupérer la liste des lieux
        </a>
        <?php


        if (sizeof($all_lieux) === 0){
            echo'<div class="no-result">Pas de lieux pour le moment</div>';
        }else{
            echo '<ul class="list lieux">';

            foreach($all_lieux as $lieux){
                echo'<li class="item">';
                echo "<span>  $lieux->id </span>";
                echo "<span>  $lieux->cp </span>";
                echo "<span>  $lieux->adresse </span>";
                echo "<span>  $lieux->lati </span>";
                echo "<span>  $lieux->longi </span>";
                echo '<a href="edit-lieux.php?id=' . $lieux->id . '"> Editer</a>';
                echo '<a href="api.php?action=delete_lieux&id=' . $lieux->id . '"> Supprimer</a>';
                echo"</li>";
            }
            echo "</ul>";
        }
        ?>

    </body>
</html>