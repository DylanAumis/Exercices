// la var thisGlobal capture la valeur de this hors de tout scope donc
// global, dans ce cas this représente window === tout le language

var app = (function app(){
    "use strict";
    var cars = [], Car, animals = [], Animal, observer;

    window.onload = function start(){
        observer();
    };

    observer = function observer(mode){
        byId("create_car").onclick = function action1(){
            cars.push(new Car());
            log(cars);
        };
        byId("create_animal").onclick = function action2(){
            animals.push(new Animal());
            log(animals);
        };
        
        
    };

    Animal = function Animal() {
        this.name = byId("nomA").value || "default name";
        this.species = byId("espA").value || "default species";
    };

    Car = function Car() {
        this.brand = byId("marqueV").value || "default brand";
        this.color = byId("couleurV").value || "default color";
    };
    



}());