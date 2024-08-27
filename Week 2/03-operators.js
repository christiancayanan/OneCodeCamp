// Arithmetic
let num1 = 20;
let num2 = 5;

console.log("Addition (+):", num1 + num2);
console.log("Subtraction (-):", num1 - num2);
console.log("Multiplication (*):", num1 * num2);
console.log("Division (/):", num1 / num2);
console.log("Modulo (%):", num1 % num2);
console.log("Exponent (**):", num1 ** num2);

// PE|MD|AS
console.log("Mixed operations:", (5 + 3) * 2);  

// String Concatenation (+)
console.log("Hello" + " " + "World");

let greeting = "What's up";
let myName = "Mr. " + 11;
console.log(typeof myName);
console.log(greeting + ", " + myName + "?");

//Compason operators
// Loose Not Equal to '!=' : Checks if two values are NOT equal
console.log("Not equal to (!=):", 5 != 5);
console.log("Not equal to (!=):", 5 != '5');

// Strict Not Equal to '!==': Values or Data Types are not the same
console.log("Not equal to (!==):", 5 !== 5);
console.log("Not equal to (!==):", 5 !== '5');

//Greater than or equal to
console.log("Greater Than (>):", 5 > 3);
console.log("Greater Than or Equal To (>=):", 5 >= 3);

//Less Than or equal to
console.log("Less Than (<):", 3 < 5);
console.log("Less Than or Equal To (<=):", 3 <= 5);

// Logical Operators
/*
    AND - &&
    OR - ||
    NOT - !
*/

let sunny = true;
let warm = false;

// AND: both sides are true == true
console.log("Is it sunny AND warm?", sunny && warm); // False (T && F)

// OR: at least one side is true == true
console.log("Is it sunny OR warm?", sunny || warm); // True (T || F)

// NOT: Opposite
console.log("NOT sunny?", !sunny); // !true == false

// Assignment Operators
//Assigning values to variables(=)
let num3 = 10;
let num4 = 5;

// Multiplication Assignment '*='
// Computation: 10 * 5 = 50
num3 *= num4;
console.log("The new value of a is:", num3);

// Division Assignment '/='
// Computation: 50 / 5 = 10
num3 /= num4;
console.log("The new value of a is:", num3);
