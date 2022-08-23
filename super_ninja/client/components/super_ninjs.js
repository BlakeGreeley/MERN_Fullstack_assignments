class Ninja {
    constructor (name, health, speed = 7, strength = 15) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    showStats() {
        console.log("Stats for:" + this.name);
        console.log("Health is: " + this.health);
        console.log("speed is: " + this.speed);
        console.log("Strength is: " + this.strength);
    }

    showName() {
        console.log("This ninjas name is: " + this.name);
    }

    drinkSake() {
        this.health += 10;
        console.log(this.name + " " + "drank sake and increased health, current health is: " + this.health);
    }
}

class Sensei extends Ninja {
    constructor(name, health = 200, speed = 20, strength = 50, wisdom = 10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        console.log("speaking wisdom");
        this.drinkSake();
        console.log("If you can start, then you can finish");
    }
}

console.log("/n Creating Blake");
const ninja1 = new Ninja("Blake", 40);
ninja1.showName();
ninja1.showStats();
ninja1.drinkSake();

console.log("/n Creating Madi");
const ninja2 = new Ninja ("Madi", 100);
ninja2.showName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.drinkSake();

console.log("/n Creating Freyja");
const sensei1 = new Sensei ("Freyja", 1000);
sensei1.showStats();
sensei1.speakWisdom();
