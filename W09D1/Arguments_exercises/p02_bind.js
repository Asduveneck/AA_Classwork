/*
  Rewrite myBind() method so it takes bind-time arguments and call-time arguments. 
*/

Function.prototype.myBind = function(context, ...bindArgs){
  //code block 
  // arguments = [context, bindArg1, bindArg2, ..., bindArgN]
  let that = this; 
  return function (...callArgs) { // closures capture context
    // arguments = [callArg1, callArg2, ..., callArgN]
    // Array.from(arguments)

    // In JS, you can take in as many arguments as you'd want.
    // And when we call, we're not passing in an array, so we do ... up top here
    that.apply(context, bindArgs.concat(callArgs)); // apply: because:
      // we don't know what args we'll pass in, so we pass in a random array and hope for the best.
      // We use Args here because it becomes an array-like object from line 8...?
  };
};

// We were supposed to use the arguments keyword. We did it the second way first LOLZ

// Function.prototype.easyMyBind = function(context) {
//   let that = this; 
//   let args = Array.from(arguments); // [arguments]; // because arguments is NOT an array.
//   return function(...args) {
//     that.apply(context, args);
//   };
// };


Function.prototype.easyMyBind = function(context) {
  let that = this; 
  // Our approach initially had arguments in function. No bueno. Supposed to be implied...
  /*
  if (arguments === undefined) {
   var bindArgs = [];
  } else {
    var bindArgs = Array.from(arguments);
    bindArgs.shift();
    // console.log(bindArgs);
  }
  */
  let bindArgs = Array.from(arguments);
  bindArgs.shift();
  return function() {
    /*
    if (arguments === undefined) {
      var callArgs = [];
    } else {
      var callArgs = Array.from(arguments);
    }
    */
    callArgs = Array.from(arguments);
    that.apply(context, bindArgs.concat(callArgs));
  };
};



// Test Cases Here: 
class Cat {
  constructor(name) {
    this.name = name;
  }

  says(sound, person) {
    console.log(`${this.name} says ${sound} to ${person}!`);
    return true;
  }
}

class Dog {
  constructor(name) {
    this.name = name;
  }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");
// Markov says meow to Ned!
// true

// bind time args are "meow" and "Kush", no call time args
markov.says.myBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.myBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.myBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const notMarkovSays = markov.says.myBind(pavlov);
notMarkovSays("meow", "me");
// Pavlov says meow to me!
// true

// #########################################################################
// My Easy Bind
console.log("");
console.log("easy arguments not easy for us");
// bind time args are "meow" and "Kush", no call time args
markov.says.easyMyBind(pavlov, "meow", "Kush")();
// Pavlov says meow to Kush!
// true

// no bind time args (other than context), call time args are "meow" and "a tree"
markov.says.easyMyBind(pavlov)("meow", "a tree");
// Pavlov says meow to a tree!
// true

// bind time arg is "meow", call time arg is "Markov"
markov.says.easyMyBind(pavlov, "meow")("Markov");
// Pavlov says meow to Markov!
// true

// no bind time args (other than context), call time args are "meow" and "me"
const easynotMarkovSays = markov.says.easyMyBind(pavlov);
easynotMarkovSays("meow", "me");
// Pavlov says meow to me!
// true