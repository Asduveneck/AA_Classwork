let arr = [1, 2, 3, 2, 3, 4, 5, 4, 7, 5];
let arr2 = [ 1, 3, -2, -3, 3, 2, -1, 1, 2, 4 ];
let matrix = [
  [11, 12, 13],
  [21, 22, 23],
  [31, 32, 33]
];

// function uniq_arr(arr){
//   let new_arr = [];
//   arr.forEach(num => {
//    if(!new_arr.includes(num)) {
//       new_arr.push(num);
//     }
//   });
//   return new_arr;
// }

Array.prototype.uniq = function() {
  //console.log(this);
  let new_arr = [];
  this.forEach(num => {
    if(!new_arr.includes(num)) {
      new_arr.push(num);
    }
  });
  return new_arr;
};



// array.forEach(element => {
// }

/*
  Multi line comment

  Two Sum: return an array of position pairs where elements sum to zero!
*/

Array.prototype.twosum = function() { 
  let arr_dup = this // is this good js?
  let new_arr = [];

  this.forEach(function (num1, idx1) {
    // console.log(num1);
    // console.log(idx1);

    arr_dup.forEach(function (num2, idx2) {
      //console.log(num2);
      // console.log(idx2);
      if(idx2>idx1) {
        if(num2+num1 === 0) {
          new_arr.push([idx1, idx2]);
        }
      }
    });  
  });

  return new_arr;
};

Array.prototype.transpose = function() {
  let trans = [];
  let arr_dup = this;
  let arr_dup2 = this;
  arr_dup.forEach(function (row, idx1) { // each row
    let new_r = [];
    row.forEach(function (ele, idx2){
      // arr_dup2[idx1][idx2] = arr_dup[idx2][idx1];
      new_r.push(arr_dup[idx2][idx1]);
    });
      trans.push(new_r);
  });
  //return arr_dup2;
  return trans;
};


/*

[11][12][13]
[21][22][23]
[31][32][33]
==========
[11][21][31]
[12][22][32]
[13][23][33]

*/

