/* global window, log, select, selectAll, */

var app = (function app() {
    "use strict";

    var creerBlocks, dom, observer, handler
    , majBlocks;

    dom={};

    window.onload = function start() {
        log("ready");
        dom.btn = byId("create_blocks");
        dom.color = byId("color_blocks");
        dom.count = byId("nb_blocks");
        dom.blocks = byId("blocks");
        observer();
    };
    handler = function handler(evt){

        log(evt);
        this.classList.toggle("is-active");

    };
        majBlocks = function majBlocks(actives){
        
            var i;
            for(i = 0 ; i< actives.length; i += 1){
                actives[i].style.background = dom.color.value;
            }
    };



        creerBlocks = function creerBlocks(){
            log("creer blocks!");
            log(Number(dom.count.value));


            var i, limit, block ;
            limit = Number(dom.count.value);
            log(dom.blocks);
            for (i = 0 ; limit >= 1 && i < limit; i += 1){
                block = document.createElement("div");
                block.classList.add("block");
                block.onclick = handler;


                block.style.background = dom.color.value;

                dom.blocks.appendChild(block);

            }
        };


        observer = function observer(){
            log("observer !");

            dom.btn.onclick = function choisir(){
                
                var actives = dom.blocks.querySelectorAll(".block.is-active");
                
                if (!actives.length){
                    creerBlocks();
                } else {
                    majBlocks(actives);
                }
            };
        };



    }());