// la var thisGlobal capture la valeur de this hors de tout scope donc
// global, dans ce cas this représente window === tout le language

var thisGlobal = this;

var app = (function app(){
           "use strict";
           var observer,
           MonConstructeur,
           thisEvtHandler = null,
           thisInstanceOfConstruct = null,
           thisUndef = this;

           observer = function observer(mode) {
    thisEvtHandler = this;

    if (mode === "evt"){
        log("thisEvt --->");
        thisEvtHandler = this;
        log(thisEvtHandler);


    } else if (mode === "constr") {
        thisInstanceOfConstruct = new MonConstructeur;
        log("thisConstruct --->");
        log(thisInstanceOfConstruct);


    } else if (mode === "global") {
        log("thisGlobal --->");
        log(thisGlobal);

    } else if (mode === "undef") {
        log("thisUndef --->");
        log(thisUndef);
    }
};

MonConstructeur = function MonConstructeur(param){
    this.name = "un constructeur est un \"moule\" à objets";
    this.weapons = ["gun","machine-gun","knife","flame-thrower"]
    log("this ici représente le constructeur");
    log(this);  // Log du constructeur Donc 

    // ATTENTION : en mode constructeur, une fonction retourne automatiquement la valeur de this qui vient d'etre instanciée.
    

};
return{
    observer: observer
};
}());