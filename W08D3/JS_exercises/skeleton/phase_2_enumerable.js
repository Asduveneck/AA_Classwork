// let arr = [1, 2, 3, 2, 3, 4, 5, 4, 7, 5];
// let arr2 = [1, 3, -2, -3, 3, 2, -1, 1, 2, 4];
let arr3 = [1, 1, 1];
let arr4 = [1, 2, 3];
let double = function(num) {
  return num * 3;
};

let test_init = function(num, mult) {
  return num * (mult || 5);
};

let test_mult_1 = function(num, acc) {
  return acc * num;
};


let test_add_1 = function(num, acc) {
  return num + acc;
};

// let cum_sum = function(num) {

// }

Array.prototype.myEach = function(cbk) {
  let new_arr = [];
  for (let index = 0; index < this.length; index++) {
    const element = cbk(this[index]);
    new_arr.push(element);
    console.log(element, index);
  }
  return this; 
};

Array.prototype.myMap = function(callback) {
  let new_arr = [];
  this.forEach(ele => {
    new_arr.push(callback(ele));
  });
  return new_arr;
};


Array.prototype.myReduce_test1 = function(callback, initial_val) { //optional initial_value
  let result = 0;
  this.forEach(num => {
    result += num;
  }); 
  return result += initial_val;
  // (initial_val || 5)
};

Array.prototype.myReduce_test2 = function(callback, initial_val) { //optional initial_value
  let acc = (initial_val || this[0]);
  //let acc = 0;
  this.forEach(num => {
    acc = callback(num, acc);
    //result += num;
  }); 
  return acc;
  //return result += initial_val;
  // (initial_val || 5)
};

