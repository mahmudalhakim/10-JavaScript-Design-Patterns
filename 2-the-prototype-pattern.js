//*******************************************************//
// 
// The Prototype Pattern With Object.create()
//
//*******************************************************//

const Car = {
    name: 'Ford Escort',

    drive() {
        console.log("Weeee. I'm driving!");
    },

    panic() {
        console.log('Wait. How do you stop this thing?');
    },

    print() {
        console.log('The model of this car is ' + this.name);
    }
};

// The Object.create() method creates a new object, 
// using an existing object as the prototype of the newly created object.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

const myCar = Object.create(Car);


// Now we can see that one is a prototype of the other
console.log("The Prototype Pattern With Object.create()");
console.log(Car);
console.log(myCar);
console.log(myCar.__proto__)
console.log(myCar.name);
myCar.drive();
myCar.panic();
myCar.print();
myCar.name = "Volvo"; // Vad hände här?
console.log(myCar);
console.log(myCar.name);
myCar.print();

console.log("-----------------------------------");
console.log();


//*******************************************************//
// 
// The Prototype Pattern With class and extends
//
//*******************************************************//

class VehiclePrototype {
    constructor(model) {
        this.model = model;
    }

    getModel() {
        console.log('The model of this vehicle is ' + this.model);
    }

    Clone() {}
}

// The extends keyword is used to create a class which is a child of another class.
// A constructor can use the super keyword to call the constructor of the super class.

class Vehicle extends VehiclePrototype {
    constructor(model) {
        super(model);
    }
    Clone() {
        return new Vehicle(this.model);
    }
}
const car2 = new Vehicle('Ford Escort');
const myCar2 = car2.Clone();

console.log("The Prototype Pattern With class end extends");
console.log(car2);
console.log(myCar2);
myCar2.getModel();
myCar2.model = "Volvo";
myCar2.getModel();