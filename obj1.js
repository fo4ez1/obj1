// let fido = {
//     name : "fido",
//     age : 4,
//     weight:15,
//     breed : "mix",
//     bark : function(){
//         alert(this.name+this.weight+"Гав!");
//     },
// };
// fido.bark();

// let fluffy ={
//     name :"fluffy",
//     age:4,
//     breed : "Poodle",
//     bark : function(){
//         alert(this.name + "gav");
//     },
// };
// fluffy.bark();


function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.speed = 0;
    this.bark = function () {
        if (weight < 25) {
            alert(this.name + " сказал Тяф");
        }
        else {
            alert("сказал гав")
        }
    };
    this.start = function () {
        this.speed = 1;
    };
    this.stop = function () {
        this.speed = 0;
    }
    this.changeSpeed = function (amount) {
        this.speed *= amount;
    };
    this.showSpeed = function () {
        alert(this.speed);
    };
    this.toString = function(){
        return `${this.name} ${this.breed} ${this.weight}`;
    }
}

let fido = new Dog("Fido", "Mixed", 26);
let fluffy = new Dog("Fluffy", "Poodel", 22);
let sobaka = new Dog("Sobaka", "Mixed", 10);

let dogs = [fido, fluffy, sobaka];

for (let i = 0; i < dogs.length; i++) {
    alert(dogs[i]);
    dogs[i].bark();
    dogs[i].start();
    dogs[i].changeSpeed(2);
    dogs[i].showSpeed();
}