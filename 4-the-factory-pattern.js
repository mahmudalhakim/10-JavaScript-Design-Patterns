//*******************************************************//
// 
// The Factory Pattern
//
//*******************************************************//

//******************** Defining Types *******************//

// A class for defining new cars
class Car {
    constructor({ doors, state, color }) {
        // some defaults
        this.doors = doors || 4;
        this.state = state || 'brand new';
        this.color = color || 'silver';
    }
}

// A class for defining new trucks
class Truck {
    constructor({ state, wheelSize, color }) {
        this.state = state || 'used';
        this.wheelSize = wheelSize || 'large';
        this.color = color || 'blue';
    }
}

//******************** The Factory ********************//

// Define a vehicle factory
class VehicleFactory {

    // Define the prototypes and utilities for this factory

    // Our default vehicleClass is Car
    constructor() {
        this.vehicleClass = Car;
    }
    // Our Factory method for creating new Vehicle instances
    createVehicle(options = {}) {
        switch (options.vehicleType) {
            case 'car':
                this.vehicleClass = Car;
                break;
            case 'truck':
                this.vehicleClass = Truck;
                break;
            //defaults to VehicleFactory.prototype.vehicleClass (Car)
        }

        return new this.vehicleClass(options);
    }
}

//******************** DEMO ********************//

// Create an instance of our factory 
const carFactory = new VehicleFactory();



console.log("**********  car01 **********");
const car01 = carFactory.createVehicle();
console.log(car01);
console.log(car01 instanceof Car); // Outputs: true

console.log("**********  car02 **********");
const car02 = carFactory.createVehicle({
    vehicleType: 'car',
    color: 'yellow',
    doors: 6,
});
console.log(car02);
console.log(car02 instanceof Car); // Outputs: true


console.log("**********  movingTruck **********");
const movingTruck = carFactory.createVehicle({
    vehicleType: 'truck',
    state: 'like new',
    color: 'red',
    wheelSize: 'small',
});

console.log(movingTruck);
console.log(movingTruck instanceof Truck); // Outputs: true