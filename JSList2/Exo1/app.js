var app =(function app(){

    var add,root,liste,txt,ajouter,li,radio,ol,checkAction,disable,verifyIfTextEmpty,verifyIfSelected,input;

    window.onload = function(){
        log("ready");
        add = byId("add");
        root = byId("root");
        liste = byId("liste");
        txt = byId("txt");
        add.onclick = checkAction;
        root.onclick = disable;

    };

   verifyIfTextEmpty = function(){
        return txt.value === "";
    }

    verifyIfSelected = function(){
        return document.querySelector("input:checked");
    }    


    checkAction = function checkAction(){
        
        var selectedRadio = verifyIfSelected();
        
        if (selectedRadio && !verifyIfTextEmpty()) {
               
            ajouter(selectedRadio.parentElement);
            
        } else if (!verifyIfTextEmpty()) {
            ajouter(liste);
            
        } else {
        
            alert("remplir le champs");
        }


    }

    disable = function disable(){
        var selectedRadio = document.querySelector("input:checked");
        
        if(selectedRadio){
            selectedRadio.checked = false;
        }
    }


    ajouter = function ajouter(parent){
     
        var ul, radio, li
        
        li = document.createElement("li");
        li.textContent = txt.value;
        
        radio = document.createElement("input");
        radio.type ="radio";
        radio.name="josé";
        
        li.appendChild(radio);
        
        if (parent === liste) {
            parent.appendChild(li);
            
        } else {
            ul = document.createElement("ul");
            ul.appendChild(li);
            parent.appendChild(ul);
        }

    }


}());

