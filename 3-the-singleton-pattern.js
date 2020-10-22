//*******************************************************//
//
// The Singleton Pattern
//
//*******************************************************//

let mySingleton = (() => {

  // Instance stores a reference to the Singleton
  let instance;

  function init() {

    // Private methods and variables
    function privateMethod() {
      console.log("I am private");
    }

    let privateletiable = "Im also private";

    let privateRandomNumber = Math.random();

    return {

      // Public methods and variables
      publicMethod: function () {
        console.log("The public can see me!");
      },

      publicProperty: "I am also public",

      getRandomNumber: function () {
        return privateRandomNumber;
      }

    };

  };

  return {

    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: () => {

      if (!instance) {
        instance = init();
      }

      return instance;
    }

  };

})();



const singleA = mySingleton.getInstance();
const singleB = mySingleton.getInstance();
// const test = new mySingleton(); // mySingleton is not a constructor
// console.log(test);

console.log(singleA.getRandomNumber() === singleB.getRandomNumber()); // true

console.log(singleA.getRandomNumber()); // Random number
console.log(singleB.getRandomNumber()); // Same random number