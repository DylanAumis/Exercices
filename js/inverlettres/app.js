
var invertLetters = (function invertLetters(){
    "use strict";
    log("ready");

    var submit, texte, handler, resultat, estPalindrome ,inverser;
    window.onload = function(){
        "use strict";
        log("ready!");
        texte = byId("text");
        resultat = byId("resultat");
        submit = byId("submit");
        log(text)
        submit.onclick = handler;
    };

    inverser = function inverser(evt){
        var tmp = "" ,a ,i ;
        var a = texte.value.split("")

        for (i = a.length -1; i >= 0; i -= 1){
            log(a[i]);
            tmp += a[i];
        }
        log(tmp)
        resultat.innerHTML = tmp;

        return tmp;
    };
    
    handler = function handler(){
        var palindrome;
        log(inverser(input.value));
        palindrome = estPalindrome(input.value, inverser(input.value));
        log("est palindrome ?")
        log(palindrome);
        resultat.innerHTML = palindrome;
    }

    inverser = function inverser(text){
    return text.split("").reverse().join("");
    };
    
    estPalindrome = function estPalindrome(mot, inversion){
        return mot === inversion;
    }
    
}());