
// Creating the nigga class you will you this as you are creating a criteria 
// so when you want to create  (make an instance) another Ninja you can use
// use the arttributes from the ninja.....
class Ninja {
    constructor(name, health, speed, strength) {
        this.name = name;
        this.health = 3;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log(this.name);
        console.log(this.health);
        console.log(this.speed);
        console.log(this.strength);
    }
    drinkSake() {
        console.log(this.health += 10);
    }
}

const ninja1 = new Ninja("Buddy");

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


class Sensai extends Ninja {
    constructor(name, health, speed, strength, wisdom) {
        super(name, health, speed, strength, wisdom);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        console.log(this.health)
        // This is calling on the drinkSake function in that function you
        // console.log so that's why it shows up again. 
        super.drinkSake();
        console.log("A wise message")
    }
}

const sensai1 = new Sensai("John");


sensai1.speakWisdom();
