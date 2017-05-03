//LA FONCTION APP EST UNE IIFE SOIT IMMEDIATLY INVOQUED FUNCTION EXPRESSION JS VA ATTENDRE LE LOAD AVANT DE SE LANCER

var log = function log(jcvd) {
"use strict";
    window.console.log(jcvd);
};

var app = (function app() {
    "use strict"; //permet a la console d'afficher plus d'erreur
    window.onload = function start() {
        console.log('ready');
        scroll();
    };
}());