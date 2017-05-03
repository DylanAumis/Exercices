<?php
include_once("utility.php");
include_once("api.php");
$lieu = readLieu($_GET["id"]);
debug($lieu);

?>


<!DOCTYPE html>
<html lang="fr">
    <head>
        <meta charset="utf-8">
        <title><?php echo "éditer lieux - $lieu->adresse";?></title>
        <link rel="stylesheet" href="style.css">
        <script src="app.js"></script>
        <script src="utility.js"></script>
    </head>
    <body>
         <a href="index.php">Retour à l'accueil</a>
         <h1 class="title">Editer ce lieu</h1>
         <p>
             Mission Dev Unit:<br>
             Inclure une map avec maps js api <br>
             Ecouter les clicks sur la map <br>
             Placer un marqeur sous la zone cliquée <br>
             Mettre à jour les input lati/longi avec les valeurs correspondante.
         </p>
        <form action="api.php" method="post">
            <input type="text" class="input" name="adresse" placeholder="<?php echo $lieu->adresse; ?>">
            <input type="text" class="number" name="cp" placeholder="<?php echo $lieu->cp; ?>">
            <input type="text" class="number" name="latitude" step="any value" placeholder="<?php echo $lieu->lati; ?>">
            <input type="text" class="number" name="longitude" step="any value" placeholder="<?php echo $lieu->longi; ?>">
            <input type="submit" id="update_lieu" name="update_lieu" >
        </form>