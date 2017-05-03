/* global window, log, select, selectAll, byId, document*/

var app = (function app() {
    "use strict";
    var dom = {},
        observer, looper1, looper2, looper3;



    window.onload = function start() {
        log("started !!!");
        dom.btns = selectAll(".submit")
        observer();
    };

    looper1 = function looper1() {
        var tab1 = ["coucou", 6, true, 12, "lol"];
        var i = 0;

        log("---- Looper 1 : entrée en boucle");
        while (i < tab1.length) {
            log(" ' " + tab1[i] + " ' : " + " cette valeur est du type " + typeof tab1[i]);
            i++;
        }
        log("--- Sortie de boucle Looper1 ---");
        log("nombre de tours de boucle : " + i);

    };
    looper2 = function looper2() {
        var i, t2, resultBoolean = [],
            resultNumber = [] , a, b;
        var t2 = ["ola", 1100,  "yop", false, 1.23, false, "wesh", true];

        log("-------looper 2 : entrée en boucle ---");

        for (i = 0; i < t2.length; i++) {
            log(t2[i]);
            if (typeof t2[i] === "number") {
                resultNumber.push(t2[i]);
            } else if (typeof t2[i] === "boolean") {
                resultBoolean.push(t2[i]);
            }
        }
        
        a = resultNumber;
        b = resultBoolean;
        log("---- Looper2 : fin de la boucle --");
        log(a);
        log(b);
         if (a.length > b.length){
             log("le tableau de nombres est le plus long");
         } else if ( a.length < b.length ){
             log("le tableau de booléens est le plus long ");
         } else {
             log("les deux tableaux sont de tailles égales ");
         }
    };

    looper3 = function looper3() {
        log("looper 3");
        var divs, parags, lists, parseList ;
        divs = document.getElementsByTagName("div");
        parags = document.getElementsByTagName("p");
        lists = document.getElementsByTagName("ul");
        
        parseList = function parseList(nodeList){
            log(nodeList);
            var i, id , name;
            for (i = 0; i < nodeList.length; i++){
                log(nodeList[i]);
                log(typeof nodeList[i]);
                log(nodeList[i].nodeName);
                name = nodeList[i].nodeName;
                if (name === "DIV"){
                    id = "div_" + (i +1);
                } else if (name === "p"){
                    id = "p_" + (i + 1);
                } else {
                    id = "ul_" + (i + 1);
                }
                nodeList[i].id = id;
            }
        };
        
        parseList(divs);
        parseList(parags);
        parseList(lists);
    };

    observer = function observer() {
        log("observer");

        dom.btns[0].onclick = looper1;
        dom.btns[1].onclick = looper2;
        dom.btns[2].onclick = looper3;
    };


}());
