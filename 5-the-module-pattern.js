//*******************************************************//
//
// The Module Pattern
//
//*******************************************************//

const testModule = (function () {

  // Encapsulation
  let counter = 0; // private variable

  return {

    incrementCounter: function () {
      return counter++;
    },

    resetCounter: function () {
      console.log("counter value prior to reset: " + counter);
      counter = 0;
    }
  };

})();


console.log();
console.log("****** testModule *******");

// Increment our counter
testModule.incrementCounter();
testModule.incrementCounter();
testModule.incrementCounter();

// Check the counter value and reset
testModule.resetCounter();
console.log(testModule.counter); // undefined (private)
console.log();
testModule.counter = 10000;


//********************** Namespace **********************//

const myNamespace = (function () {

  let myPrivateVar, myPrivateMethod;

  // A private counter variable
  myPrivateVar = 0;

  // A private function which logs any arguments
  myPrivateMethod = function (foo) {
    console.log(myPrivateVar);
    console.log(foo);
  };

  return {

    // A public variable
    myPublicVar: "foo",

    // A public function utilizing privates
    myPublicFunction: function (bar) {

      // Increment our private counter
      myPrivateVar++;

      // Call our private method using bar
      myPrivateMethod(bar);

    }
  };

})();

console.log("****** Namespace *******");
console.log(myNamespace);
console.log(myNamespace.myPublicVar);
myNamespace.myPublicFunction("DEMO 1");
myNamespace.myPublicFunction("DEMO 2");
myNamespace.myPrivateVar = 0; // Vad händer här?
myNamespace.myPublicFunction("DEMO 3");
console.log(myNamespace);
console.log();


//********************** basketModule **********************//

const basketModule = (function () {

  // privates
  let basket = [];

  function doSomethingPrivate() {
    //...
  }

  function doSomethingElsePrivate() {
    //...
  }

  // Return an object exposed to the public
  return {

    // Add items to our basket
    addItem: function (values) {


      basket.push(values);
    },

    // Get the count of items in the basket
    getItemCount: function () {
      return basket.length;
    },
  
  };
})();


// basketModule returns an object with a public API we can use

basketModule.addItem({
  item: "bread",
  price: 5
});

basketModule.addItem({
  item: "butter",
  price: 3
});

console.log("****** basketModule *******");
console.log(basketModule.getItemCount()); // 2
console.log(basketModule.basket); // undefined. Varför?
