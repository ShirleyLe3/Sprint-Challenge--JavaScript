// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
// Unlike most functions that are outside of the parent function, closures are able to rememeber the environment in which it was defined (parent funct), but accessible from outside.  This is an example of lexical scope and a very useful tool that few languages have.


/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */
function summation(num) {
  let counter = 1;
  return function() {
      for(num; num > 1; num--) {
          counter = counter + num
      }
      return counter;
  }
}

const summating = summation(4);

// console.log(summating());