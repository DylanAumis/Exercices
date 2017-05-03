/*global window, console, documents*/
/* jslint evil: true*/
var log = function log(val) {
    "use strict";
    window.console.log(val);
};

var afficherInfosUtilisateur = function afficherInfosUtilisateur(users) {
    "use strict";
    log("créer une fiche en HTML pour chaque utilisateur");
    log(users);
    var i;
    for (i=0; i< users.length; i +=1){
        
        log(users[i]);
        log(users[i].nom);
        log(users[i].age);
    }
};

var entrainement2 = function entrainement
     utilisateur1 = {
        nom: "Meridja",
        prenom: "Meriem",
        age: 21,
        profession: "etudiante",
        couleurpref: "bordeau",
        hobbies:["LOL, consoles"]

    };

    utilisateur2 = {
        nom: "Barg",
        prenom: "Jill",
        age: 32,
        profession: "Prof d'anglais",
        couleurpref: "Vert",
        hobbies: ["TV", "Ordi"]
    };
    
    utilisateur3 = {
    nom: "Vador",
    prenom: "Darth",
    age: NaN,
    profession: "Sith",
    couleurpref: "Noir",
    hobbies: ["combat sabre laser", "télékinésie", "être père", "etrangler sous fiffe de l'empire", "tout casser"]
};
