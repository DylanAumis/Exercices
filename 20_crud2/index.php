<?php
include("inc/header.php");
?>

<?php
$all_users = readUsers();

if (sizeof($all_users) === 0) {
  echo '<div class="no-result">Pas d utilisateur pour le moment</div>';

} else {

  echo '<table class="tabler utilisateurs">';
  echo '<thead class="header">';
  echo '<tr>';
  echo '<td class="id-row">ID</td>';
  echo '<td class="nom">Nom</td>';
  echo '<td class="prenom">Prenom</td>';
  echo '<td class="email">Email</td>';
  echo '<td>Editer</td>';
  echo '<td>Supprimer</td>';
  echo '</tr>';
  echo '</thead>';
  echo '<tbody class="body">';

  foreach ($all_users as $user) {
    echo '<tr class="item">';
    echo '<td class="id-row">'. $user->id .'</td>';
    echo '<td class="nom">'. $user->nom .'</td>';
    echo '<td class="prenom">'. $user->prenom .'</td>';
    echo '<td class="email">'. $user->email .'</td>';

    echo '<td class="geoloc" title="Nom:'. $user->nom . '&#10;Prenom: ' .  $user->prenom .'"></td>';
    echo '<td><a title="editer" href="edit_user.php?id=' .
      $user->id . '" class="fa fa-pencil" aria-hidden="true"></a></td>';
    echo '<td><a title="supprimer" href="api.php?action=delete_user&id=' .
      $user->id . '" class="fa fa-times" aria-hidden="true"></a></td>';



    echo "</tr>";
  }

  echo '</tbody>';
  echo "</table>";
}
?>

</p>
