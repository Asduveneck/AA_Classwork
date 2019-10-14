console.log("Easy method for scrubs");
function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

sumThree(4, 20, 6); // == 30

console.log("curriedSum omnomnom curry");
function sum(...args) {
  //code block 
  let sum = 0;
  for (let i = 0; i < args.length; i++) {
    sum += args[i];
  }
  return sum;
}


let curriedSum = function(num_args) {
  numbers = [];
  // const this_curriedSum = _curriedSum.bind(this);
  // console.log(this_curriedSum);
  function _curriedSum(ele) {
    // closes over numArgs and numbers, so we use them here 
    numbers.push(ele);
    if(numbers.length === num_args){
      return sum(...numbers);
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum; // for the first case B4 we run the newly defined function
};


const sum2 = curriedSum(4);
// console.log(sum2(1, 1, 1, 1));
console.log(sum2(5)(30)(20)(1));// => 56

/*
################################################################################
*/
console.log("curry: death. any function any args");

/*
numbers = [];
// const this_curriedSum = _curriedSum.bind(this);
// console.log(this_curriedSum);
function _curriedSum(ele) {
  // closes over numArgs and numbers, so we use them here 
  numbers.push(ele);
  if (numbers.length === num_args) {
    return sum(...numbers);
  } else {
    return _curriedSum;
  }
}
return _curriedSum; // for the first case B4 we run the newly defined function
*/
Function.prototype.curry = function (numArgs) {
  let args = [];
  
  let that = this;
  function _curry(ele) {
    // closes over numArgs and numbers, so we use them here 
    args.push(ele);
    if (args.length === numArgs) {
      return that.apply(that, args);
    } else {
      return _curry;
    }
  }
  return _curry;

};

// you'll write `Function#curry`!
let f1 = sumThree.curry(3); // tells `f1` to wait until 3 arguments are given before running `sumThree`
f1 = f1(4); // [Function]
f1 = f1(20); // [Function]
f1 = f1(6); // = 30

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(6)); // == 30

