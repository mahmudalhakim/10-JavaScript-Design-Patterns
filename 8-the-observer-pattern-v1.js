//*******************************************************//
//
// The Observer Pattern With Prototypes
//
//*******************************************************//

// First, let's model the list of dependent Observers a subject may have:

function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    return this.observerList.push(obj);
};

ObserverList.prototype.count = function () {
    return this.observerList.length;
};

ObserverList.prototype.get = function (index) {
    if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
    }
};

ObserverList.prototype.indexOf = function (obj, startIndex) {
    let i = startIndex;

    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
            return i;
        }
        i++;
    }

    return -1;
};

ObserverList.prototype.removeAt = function (index) {
    this.observerList.splice(index, 1);
};


//********************** The Subject  **********************//
// Next, let's model the Subject and the ability to 
// add, remove or notify observers on the observer list.

function Subject() {
    this.observers = new ObserverList();
}

Subject.prototype.addObserver = function (observer) {
    this.observers.add(observer);
};

Subject.prototype.removeObserver = function (observer) {
    this.observers.removeAt(this.observers.indexOf(observer, 0));
};

Subject.prototype.notify = function (context) {
    let observerCount = this.observers.count();
    for (let i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
};

//********************** The Observer  **********************//
// We then define a skeleton for creating new Observers. 

function Observer() {
    this.update = function () {
      // The update functionality here 
      // will be overwritten later with custom behaviour.
    };
}

//******************  Inheritance function *****************//

// Extend an object with an extension
function extend(obj, extension) {
    for (let key in extension) {
        obj[key] = extension[key];
    }
}


//*******************************************************//
//
// Sample application
//
//*******************************************************//

// A button for adding new observable checkboxes to the page
const addBtn = document.getElementById("addNewObserver");

// A control checkbox which will act as a subject, 
// notifying other checkboxes they should be checked
const controlCheckbox = document.getElementById("mainCheckbox");

// A container for the new checkboxes being added
const container = document.getElementById("observersContainer");

// Define ConcreteSubject and ConcreteObserver handlers 
// for both adding new observers to the page 
// and implementing the updating interface. 


//******************  Concrete Subject  *****************//

// Extend the controlling checkbox with the Subject class
extend(controlCheckbox, new Subject());

// Clicking the checkbox will trigger notifications to its observers
controlCheckbox.onclick = function () {
    controlCheckbox.notify(controlCheckbox.checked);
};

addBtn.onclick = addNewObserver;


//******************  Concrete Observer  *****************//

function addNewObserver() {

    // Create a new checkbox to be added
    let check = document.createElement("input");
    check.type = "checkbox";

    // Extend the checkbox with the Observer class
    extend(check, new Observer());

    // Override with custom update behaviour
    check.update = function (value) {
        this.checked = value;
    };

    // Append the item to the container
    container.appendChild(check);
    
    // Add the new observer to our list of observers
    // for our main subject
    controlCheckbox.addObserver(check);

  
}