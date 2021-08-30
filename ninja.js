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
    showStats(){
        console.log(`Name: ${ this.name }, Strength: ${this.strength},Speed: ${this.speed},Health: ${this.health}`);
    }
    drinkSake(){
        this.health+=10;
    }
}

class Sensei extends Ninja {
    constructor(name,wisdom =10) {
        super(name,200, 10,10);
        this.wisdom = wisdom;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("Widsom is Mosdiw backwards");
    }
}

let felix = new Ninja('Felix',100)

felix.sayName();
felix.showStats();
felix.drinkSake();
felix.showStats();
felix.showStats();

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.speakWisdom();

superSensei.showStats();