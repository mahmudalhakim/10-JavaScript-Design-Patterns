//*******************************************************//
// 
// The Mediator Pattern
// http://jargon.js.org/_glossary/MEDIATOR_PATTERN.md
//
//*******************************************************//


/*

The objects participating in this pattern are:

Mediator - In sample code: Chatroom
 - defines an interface for communicating with Colleague objects
 - maintains references to Colleague objects
 - manages central control over operations

Colleagues - In sample code: Participants
- objects that are being mediated by the Mediator
- each instance maintains a reference to the Mediator

*/

//********************** The Colleague  **********************//

class Participant {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    log.add(from.name + " to " + this.name + ": " + message);
  }
}

//********************** The Mediator  **********************//

Chatroom = function () {
  let participants = {};

  return {
    register: function (participant) {
      participants[participant.name] = participant;
      participant.chatroom = this;
    },

    send: function (message, from) {
      // broadcast message
      for (let key in participants)
        participants[key].receive(message, from);
    }

  };
};

// log helper
log = (function () {
  let log = '';

  return {
    add: msg => { log += msg + '\n'; },
    show: () => { console.log(log); log = ''; }
  }
})();

function run() {

  // Colleague 1
  let yoko = new Participant('Yoko');
  // Colleague 2
  let john = new Participant('John');
  // Colleague 3
  let paul = new Participant('Paul');

  let chatroom = new Chatroom();
  chatroom.register(yoko);
  chatroom.register(john);
  chatroom.register(paul);

  yoko.send('All you need is love.');
  john.send('I love you.');
  paul.send('Thank you.');

  log.show();
}

run();