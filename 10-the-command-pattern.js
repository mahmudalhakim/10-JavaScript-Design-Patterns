//*******************************************************//
//
// The Command Pattern
//
//*******************************************************//


const carManager = {

  // request information
  requestInfo: function (model, id) {
    console.log("The information for " + model + " with ID " + id + " is foobar");
  },

  // purchase the car
  buyVehicle: function (model, id) {
    console.log("You have successfully purchased Item " + id + ", a " + model);
  },

  // arrange a viewing
  arrangeViewing: function (model, id) {
    console.log("You have successfully booked a viewing of " + model + " ( " + id + " ) ");
  }, 

  // execute a function
  execute : function (name) {
    return carManager[name] && carManager[name].apply(carManager, [].slice.call(arguments, 1));
  }

};

console.log();
console.log("Demo Without The Command Pattern");
console.log("--------------------------------");

carManager.requestInfo("Volvo", "ABC123");
carManager.buyVehicle("Volvo", "ABC123");
carManager.arrangeViewing("Volvo", "ABC123");

console.log("--------------------------------");

console.log();
console.log("Demo With The Command Pattern");
console.log("--------------------------------");

carManager.execute("requestInfo", "Volvo", "ABC123");
carManager.execute("buyVehicle", "Volvo", "ABC123");
carManager.execute("arrangeViewing", "Volvo", "ABC123");