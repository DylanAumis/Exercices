<?php
    include("inc/header.php");
    $_SESSION["current_id_utilisateur"] = $_GET["id"];
    $user = readUser($_GET["id"]);
?>
    <body class="page-edit">
        <a href="index.php" title="Retour à l'accueil" class="fa fa-home"></a>
        <h1 class="title">Editer cet utilisateur</h1>
        <div class="row">
            <form action="api.php" method="post" class="form edit">
                <input class="input" type="text" id="nom" name="nom" value="<?php echo $user->nom; ?>">
                <input class="input" type="text" id="prenom" name="prenom" value="<?php echo $user->prenom; ?>">
                <input class="input" type="text" id="email" name="email" value="<?php echo $user->email; ?>">
                <input id="update_user" type="submit" name="update_user">
            </form>
          
        </div>
    </body>
</html>
