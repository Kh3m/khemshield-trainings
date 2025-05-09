/**
 * Variables, ==, <=, <, > !
 * Variables are containers for storing values
 * a variable has a type, name, and value
 *
 * We can define variable using var, let, and const
 * = Assignment operator
 */

var username = "Khem";
let age = 45; // number => Integer, Double (Float)
age = 5;

const isActive = true; // false

// isActive can not be re-assinged
// isActive = false;

console.log("Username: ", username, " Age: ", age, "isActive: ", isActive);

/**
 * Operators
 * --------
 * Arithmetic operators +, -, /, *, %
 * Boolean Operators !=
 * Logical Operators and &&, or ||,
 * */

const a = 89;
const b = 1;

const sum = a + b;
const division = a / 2;
const mod = a % 2; // It divides the number and returns the reminder

console.log("Sum: ", sum);
console.log("Division: ", division);
console.log("Mod: ", mod);

console.log(a == b);
console.log(a > b);
console.log(a < b);
console.log(a != b);

console.log("Logical Operations");
console.log(a == b && a > 23);
console.log(a == b || a > 23);
