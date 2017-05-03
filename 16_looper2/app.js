window.onload = function start() {
    'use strict';
};
var jose = function jose() {
    dataset1.forEach(function myFunction(infos) {
        beauvais(infos);
        timeOut();
    });
};

function timeOut() {
    timeoutID = window.setTimeout(function ajout() {
        document.querySelectorAll(".carte").forEach(function parse(carte) {
            carte.classList.add("is-active");
        });

    }, 1000);
}

var beauvais = function beauvais(infos) {
    var timeoutID;
    var afficherCarte = function afficherCarte(infos) {
        var parent = document.getElementById('carte_id');
        var carte;
        carte = document.createElement("div");
        carte.classList.add("carte");

        for (var prop in infos) {
            console.log("objet " + prop + " = " + infos[prop]);
            carte.innerHTML += infos[prop];
        }

        parent.appendChild(carte);

    };


    afficherCarte(infos);
};