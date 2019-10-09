let arr = [1, 2, 3, 2, 3, 4, 5, 4, 7, 5];

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
}



// array.forEach(element => {
// }