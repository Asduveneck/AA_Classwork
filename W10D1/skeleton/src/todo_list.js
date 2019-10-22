/*
1 Listen for the submit button
2 Cry
3. Input data 
4. Cry some more
5. Render / redisplay the data base things above (in WinGDINGS)
6. 

*/

let toDoArr = [];

// Do this just in or by addTodo.
// grab by name = "add-to-do"
// Grab the value from the array

// const addTodoOriginal = function( ) {
//   const uBoy01 = document.querySelector('.add-todo-form');
//   let testVariable = null;
//   uBoy01.addEventListener('submit', function() {
//     console.log("crying right now");
//     // testVariable = todoArr.uBoy01.elements[0].value //.value;
//     debugger;
//     todoArr.push(uBoy01.elements[0] )//.value;
//     todoArr.push(uBoy01.elements)//.value;
//     debugger;
//   })
// }

class ToDo  {
  constructor(input) {
    this.input = input;
    this.done = false;
  }
}
// too many tears

const addTodo = function(event) { // find an input ourselves
  event.preventDefault();
  const input = document.querySelector('input[name="add-todo"]').value
  console.log(input);
  let toDoPOJOMOJOJO = new ToDo(input);
  toDoArr.push(toDoPOJOMOJOJO);
}
console.log(toDoArr)
// addTodo('sobbing')

const populateList = function(arr = toDoArr) {
  // Takes in html
  // does stuff

  arr.forEach( el => {
    //  wrap label type and checkbox input into an outer LI tag
    let newLabel = document.createElement('label');
    newLabel.innerHTML = el.input;
    
    let newLi = document.createElement('li');
    newLi.className += "crycrycry";
    
    newLi.append(newLabel);

  // put a checkbox somewhere up above.

    // Now that we have a label and thing to all labels, tierate through all things we changed, then append it to the UL.


  })

}

const input = document.querySelector('.add-todo-form')
input.addEventListener('submit', addTodo); // it will implicitly and call 


console.log(toDoArr);
// module.exports = addTodo();


// We forgot to prevent default in our previous version....

// lets do our todo 



// const addTodo = function( ) {
//   const toFoForm = document.querySelector('.add-todo-form');
//   let testVariable = null;
//   toFoForm.addEventListener('submit', function(e) {
//     e.preventDefault
//     console.log("crying right now");
//     // testVariable = todoArr.uBoy01.elements[0].value //.value;
//     debugger;
//     todoArr.push(uBoy01.elements[0] )//.value;
//     todoArr.push(uBoy01.elements)//.value;
//     debugger;
//   })
// }
/*
88
""

  , adPPYba, 8b, dPPYba, 8b       d8 88 8b, dPPYba,   , adPPYb, d8
a8"     "" 88P'   "Y8`8b     d8' 88 88P'   `"8a a8"    `Y88  
8b         88          `8b   d8'  88 88       88 8b       88  
"8a,   ,aa 88           `8b,d8'   88 88       88 "8a,   , d88
  `"Ybbd8"' 88             Y88'    88 88       88  `"YbbdP"Y8
d8'                     aa,    ,88  
d8'                       "Y8bbdP"   

*/



 