// adddNumbers

/*
Just like inject


*/

const readline = require('readline');
reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false // saefst option: nesting this within our function, and adding this line 
    // By having multiple input outputs, our terminal and this respond twice to each of our inputs... 
    // Otherwise, we just run node filename.js and define an example at the bottmo of this file. 
  });



function addNumbers(sum = 0, numsLeft, completionCallback) {
  

  if (numsLeft > 0){
    reader.question('Gimme a number', (res) => {
      number = parseInt(res);
      sum += number;
      console.log(`You said: '${res}'`); //parseInt
      console.log(`Current total is: ${sum}`);
      numsLeft --;
      
      addNumbers(sum, numsLeft, completionCallback);
    });

  } else if(numsLeft === 0) {
    reader.close();
    return completionCallback(sum);
  } 
  

};
// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

function askIfGreaterThan(el1, el2, callback) {
  // user types in 'yes' or 'no' only to if el1 > el2
  // If yes, do: callback(true)
  // else: callback(false)
  reader.question(`Is ${el1} > ${el2}?`, (res)=>{
    if (res === 'yes'){
      callback(true);
    } else if (res === 'no'){
      callback(false);
    } else {
      throw Error('yes or no only');
    }
  });
}

// askIfGreaterThan(1,2, bool => {
//   if(bool) {console.log('you said yes!');}
//   else{
//     console.log('you said no');
//   }});

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop){
  
};

function absurdBubbleSort(arr, sortcompletionCallback) {
  // We'll prompt
}