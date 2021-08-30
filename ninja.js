class Ninja {
    constructor(name, health, speed =3,strength =3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(`Hello my name is, ${ this.name }!!`);
    }
    // simple method in the parent class
    showStats(){
        console.log(`Name: ${ this.name }, Strength: ${this.strength},Speed: ${this.speed},Health: ${this.health}`);
    }
    drinkSake(){
        this.health+=10;
    }
}

let felix = new Ninja('Felix',100)

felix.sayName();
felix.showStats();
felix.drinkSake();
felix.showStats();
felix.showStats();