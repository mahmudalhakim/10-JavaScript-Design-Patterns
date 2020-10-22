//*******************************************************//
//
// The Constructor Pattern With Prototypes
// 
//*******************************************************//

function Car(model, year, miles) {
    this.model = model;
    this.year = year;
    this.miles = miles;
}

Car.prototype.toString = function () {
    return this.model + " has done " + this.miles + " miles";
};

const civic = new Car("Honda Civic", 2009, 20000);
const mondeo = new Car("Ford Mondeo", 2010, 5000);

console.log("The Constructor Pattern With Prototypes");
console.log(civic.toString());
console.log(mondeo.toString());
console.log("-------------------------------------");


//*******************************************************//
//
// The Constructor Patterns With Classes
//
//*******************************************************//

class Car2 {
    constructor(model, year, miles) {
        this.model = model;
        this.year = year;
        this.miles = miles;
    }

    toString() {
        return `${this.model} has done ${this.miles} miles`;
    }
}

const civic2 = new Car2('Honda Civic', 2009, 20000);
const mondeo2 = new Car2('Ford Mondeo', 2010, 5000);

console.log("The Constructor Patterns With Classes");
console.log(civic2.toString());
console.log(mondeo2.toString());
console.log("-------------------------------------");