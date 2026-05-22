// Task 1: Function Declaration vs Expression
// Topic: Introducing Functions
// Instructions:
// Write a function declaration
// named addNumbers that takes two
// parameters (a and b) and returns their sum.
// Then, create a function expression
// that does exactly the same thing and
// assign it to a const variable named addNumbersExpr.

// **** function declaration
function addNumbers(a, b) {
  return a + b;
}

console.log(addNumbers(2, 5));

// **** function expression
const addNumbers2 = (a, b) => {
  return a + b;
};

console.log(addNumbers2(2, 3));

// Task 2: Arrow Functions
// Topic: Modern ES6 Features
// Instructions:
// Convert the addNumbersExpr function from
// Task 1 into a modern ES6 Arrow Function.
// Assign it to a const variable named addNumbersArrow.
// Keep the syntax as short as possible.

const addNumbersArrow = (a, b) => a + b;

// Task 3: Parameters and Arguments
// Topic: Adding a Custom Function
// Instructions:
// Create a function named introduce that
// accepts two parameters: firstName and profession.
// Inside the function, use console.log to print
// the sentence: "Hello, my name is [firstName] and I am a [profession]."
// After defining it, call the function and
// pass your own name and profession as arguments.

const introduce_that = (firstName, profession) => {
  console.log(`Hello, my name is ${firstName} and I am a ${profession}.`);
};
introduce_that("boka", "IT");

// Task 4: Function Destructuring
// Topic: Modern ES6 Features
// Instructions:
// Write an arrow function named displayCarDetails.
// This function should accept a single object as a parameter.
// The object will have brand, model, and year properties.
// Use ES6 object destructuring directly inside the function parameters
// to extract these values and log them to the console.
// Example object to pass: { brand: 'Toyota', model: 'Corolla', year: 2022 }
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

const displayCarDetails = ({ brand, model, year }) => {
  console.log(`Brand: ${brand}, Model: ${model}, Year: ${year}`);
};
displayCarDetails(car);
// Task 5: Returning Values vs Logging
// Topic: Returning Values
// Instructions:
// Write a function named calculateDiscount that
// takes two parameters: price and discountPercentage.
// The function MUST calculate the final price and return the value, NOT log it.
// Call the function with a price of 200 and a discount of 15,
// store the returned result in a variable named finalPrice,
// and then console.log(finalPrice) outside the function.

// Task 6: Hoisting
// Topic: The Importance of Code Order
// Instructions:
// Write a function declaration called sayGoodbye that returns the string "Goodbye!".
// To demonstrate hoisting, call this function and log its result on the line above
// where the function is actually defined in your code.

// Task 7: Global and Local Scope
// Topic: Introduction to Scopes
// Instructions:
// Declare a global variable named secretCode with the value "XYZ123".
// Write a function called testScope.
// Inside this function, declare
// a local variable named localPin with the value "9999".
// Inside the function, try logging both variables.
// Outside the function, try logging both variables.
// Observe which one causes a ReferenceError and comment out the line that breaks the code.

// Task 8: Shadowed Variables
// Topic: Shadowed Variables
// Instructions:
// Declare a global let variable named playerScore and set it to 10.
// Write a function named updateScore. Inside the function,
// declare a local variable with the exact same
// name (let playerScore) and set it to 50 (this is shadowing).
// Log playerScore inside the function, call the function,
// and then log playerScore outside the function.
// Notice how the global variable remains unchanged.

// Task 9: Executing Functions Indirectly (Callbacks)
// Topic: Executing Functions Indirectly
// Instructions:
// Write a simple function named alertUser that logs "Action completed!".
// Write a second function named executeCallback that takes a parameter called callbackFunc.
// Inside executeCallback, execute the callbackFunc.
// Call executeCallback and pass alertUser as
// an argument (remember to pass it indirectly, without parentheses).

// Task 10: Indirect vs. Direct Execution with setTimeout
// Topic: Indirect vs. Direct Execution
// Instructions:
// Write a function named timeIsUp that logs "Time is up!".
// Use the built-in setTimeout function to execute timeIsUp after 3 seconds (3000 milliseconds).
// Ensure you are passing the function reference correctly (indirect execution).
// Write a comment explaining what would happen if you used
// timeIsUp() with parentheses inside the setTimeout.
