/*global window, console, documents*/
/* jslint evil: true*/
var log = function log(val) {
    "use strict";
    window.console.log(val);
};

var afficherInfosUtilisateur = function afficherInfosUtilisateur(user) {
    "use strict";
    document.write("------------------------------------------ <br>")
    document.write("l'utilisateur se nomme : " + user.nom + " " + user.prenom + "<br>" + user.age + "ans" + "<br>" + user.profession + "<br>")
}

var comprendreReturn = function comprendreReturn(a1){
    "use strict";
    return typeof a1;

};

var entrainement1 = function entrainement1() {
    "use strict";

    log("app is ready!");
    var str, bool, nb, und, isnull, obj, utilisateur1, utilisateur2, res, utilisateur3;
    log(str);
    str = "chaine de caracs";
    bool = typeof str === "string";
    nb = window.innerHeight;
    und = log('tadaa');
    isnull = document.getElementById("vide");
    obj = {};

    document.write('la valeur de str =' + str + '<br>');
    document.write('la valeur de bool =' + bool + '<br>');
    document.write('la valeur de nb =' + nb + '<br>');
    document.write('la valeur de und =' + und + '<br>');
    document.write('la valeur de isnull =' + isnull + '<br>');


    obj.estPratique = true;
    obj.estMultiforme = true;
    obj.estdifficile = false;

    document.write("Les objtes sont pratique ? " +  obj.estPratique + '<br>');

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

    afficherInfosUtilisateur(utilisateur1);
    afficherInfosUtilisateur(utilisateur2);

    if (utilisateur1.nom === "Barg") {
        document.write("l'user 1 se nomme Barg");
    }
    else if (utilisateur2.prenom === "jill") {
        document.write("l'user 1 se prénomme Barg");
    }
    else { document.write('mauvaise réponses'); };

    if ("0") {
        //alert('A')
    }


};

comprendreReturn ("une chaine");
res = comprendreReturn(true && true && false);
log(res);
res = comprendreReturn ({name: "Jack"});


if (res === "object") {
    // alert("c'est un objet !");
};

utilisateur3 = {
    nom: "Vador",
    prenom: "Darth",
    age: NaN,
    profession: "Sith",
    couleurpref: "Noir",
    hobbies: ["combat sabre laser", "télékinésie", "être père", "etrangler sous fiffe de l'empire", "tout casser"]
};

log(utilisateur3);
log(utilisateur3.hobbies);
log(utilisateur3.hobbies[0]);
log(utilisateur3.hobbies[1]);
log(utilisateur3.hobbies[2]);
log(utilisateur3.hobbies[3]);
log(utilisateur3.hobbies[4]);
log(utilisateur3.hobbies[777]);

var h= utilisateur3.hobbies;
log(h[0] + "et" + h[1]);
log(typeof h.length);
var compteur = 0;
while (compteur < h.length) {
    log("tour de boucle n°" + (compteur + 1));
    log(hobbies[compteur]);
    compteur +=1; 

    log("fin de la boucle while ^^ ");
};
    log("parcours avec une boucle for");
    
    for (compteur = 0; compteur <h.length; compteur += 1){
        log("tour de boucle n°" + (compteur + 1));
        log(h[compteur]);
        log("fin de la boucle for ^^ ");};
    
    
    
};





entrainement1();