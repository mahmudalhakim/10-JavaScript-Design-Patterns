//*******************************************************//
// 
// The Observer Pattern With Classes and extends
//
//*******************************************************//

// First, let's model the list of dependent Observers a subject may have:

class ObserverList {
    constructor() {
      this.observerList = [];
    }
  
    add(obj) {
      return this.observerList.push(obj);
    }
  
    count() {
      return this.observerList.length;
    }
  
    get(index) {
      if (index > -1 && index < this.observerList.length) {
        return this.observerList[index];
      }
    }
  
    indexOf(obj, startIndex) {
      let i = startIndex;
  
      while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
          return i;
        }
        i++;
      }
  
      return -1;
    }
  
    removeAt(index) {
      this.observerList.splice(index, 1);
    }
  }
  
  
//********************** The Subject  **********************//
// Next, let's model the Subject and the ability to 
// add, remove or notify observers on the observer list.

  class Subject {
    constructor() {
      this.observers = new ObserverList();
    }
  
    addObserver(observer) {
      this.observers.add(observer);
    }
  
    removeObserver(observer) {
      this.observers.removeAt(this.observers.indexOf(observer, 0));
    }
  
    notify(context) {
      const observerCount = this.observers.count();
      for (let i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
      }
    }
  }
  

//********************** The Observer  **********************//
// We then define a skeleton for creating new Observers. 

class Observer {
    constructor() {}
    update() {
      // The update functionality here 
      // will be overwritten later with custom behaviour.
    }
}

//******************  Concrete Subject  *****************//
// The extends keyword is used to create a class 
// which is a child of another class.

class ConcreteSubject extends Subject {
    constructor(element) {
      // A constructor can use the super keyword 
      // to call the constructor of the super class.
      super();
      this.element = element;
  
      // Clicking the checkbox will trigger notifications to its observers
      this.element.onclick = () => {
        this.notify(this.element.checked);
      };
    }
  }
  
//******************  Concrete Observer  *****************//
  
  class ConcreteObserver extends Observer {
    constructor(element) {
      super();
      this.element = element;
    }
  
    // Override with custom update behaviour
    update(value) {
      this.element.checked = value;
    }
  }
  
  const addBtn = document.getElementById('addNewObserver');
  const container = document.getElementById('observersContainer');
  const controlCheckbox = new ConcreteSubject(
    document.getElementById('mainCheckbox')
  );
  
  const addNewObserver = () => {
    const check = document.createElement('input');
    check.type = 'checkbox';
    const checkObserver = new ConcreteObserver(check);
    
    // Append the item to the container
    container.appendChild(check);

    // Add the new observer to our list of observers
    // for our main subject
    controlCheckbox.addObserver(checkObserver);
  
  };
  
  addBtn.onclick = addNewObserver;