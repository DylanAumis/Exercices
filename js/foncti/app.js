var invertColor = function invertColor(block){
    "use srtict";
    block.classList.add("is-active");//On ajoute une classe CSS à block
    //this represente l'élement block dans ce contexte
    
    log(block);//affiche l'objet HTML ( on peut voir toutes ses propriétés) dans la console du nav onglet dom /properties
    log(block.id);//affiche l'ID sur la balise
    log(block.className);//La (les) classes CSS appliqués à l'élement
    log(block.style);// les styles (inline) de l'element
    log(block.style.background);//Affiche la propriété background (inline)
    log(block.className.split);//ici, split transforme className en array
    log(block.classList.contains("green"));//bool : block contien green (CSS) ?
    log(block.classList.contains("red"));//bool : block contien red(CSS) ?
    
    log(secToMillisec(1));
    
    if(block.id === "block_g"){
        autreBlock = byId("block_r");
        
    }
    else{
        autreBlock = byId("block_g");
        
    }
    
    log("autreBlock");
    log(autreBlock)
    if (block.style.background === "green"){
        block.style.background = "red";
    }
    else {
        block.style.background= "green";
    }
    window.secToMillisec(function delay(){
        
    }, 2000)
                         
    var invertColorBastien =  function invertColorBastien(){
        "use strict";
        byId("block_r1").classList.toggle("red");
        byId("block_r1").classList.toggle("green");
        byId("block_g1").classList.toggle("red");
        byId("block_g1").classList.toggle("green");
    };
    
    block.style.background = "blue";//change dynamiquement le bg
    
    window.setTimeout(function delay() {
        //un timeout est une fonction déclanchant un delai
        //qui permet d'éxécuter du code après un laps de temps
        block.classList.remove("is-active");//ici on retire la classe active
        //après le temps de l'animation
    }, 500);//exprimé en miliseconde... ici 1 demi seconde

};


