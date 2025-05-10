// Write a javascript program to solve quadratic equation

//  Formula a*x^2 + b*x + c = 0

const a = 1;
const b = 1;
const c = -1;
const x = 7;

const quadResult = a * Math.pow(x, 2) + b * x + c;

console.log(quadResult);

// X = -b + (sqrt(b^2-4*a*c) / 2*a)
// Y = -b - (sqrt(b^2-4*a*c) / 2*a)

const X = (-b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);
const Y = (-b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a);

// const X = (-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a);
// const Y = (-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a);

const str1 = "X: ";
const str2 = " Y: ";
const str3 = str1 + X + str2 + Y;
console.log(str3);

// console.log("X: " + X + " Y: " + Y);
// console.log("X: ", X, "Y: ", Y);
// console.log(`X: ${X}, Y: ${Y}`);

/**
 * Loops
 * for loop
 * while loop
 * do while loop
 */

// for (initialization; condition; increment;)

for (let i = 0; i < 10; i += 1) {
  console.log("Khem", i);
}

let j = 0;
while (j < 5) {
  console.log(j, " < 5");
  // j = j + 1;
  // j++
  // ++j
  j += 1;
}

/**
 * Assignment
 * -------
 * Read do while loop
 * Read functions
 * Read conditionals
 *  */
