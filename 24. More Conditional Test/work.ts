let fruit: string = 'apple';
console.log("Is fruit == 'apple'? I predict true.");
console.log(fruit == 'apple');

console.log("Is fruit != 'banana'? I predict true.");
console.log(fruit != 'banana');

// Tests using the lower case function
let city: string = 'Karachi';
console.log("Is city in lowercase == 'karachi'? I predict true.");
console.log(city.toLowerCase() == 'karachi');

// Numerical tests
let number1: number = 5;
let number2: number = 10;
console.log("Is number1 < number2? I predict true.");
console.log(number1 < number2);

console.log("Is number1 >= number2? I predict false.");
console.log(number1 >= number2);

// Tests using "and" and "or" operators
let isStudent: boolean = true;
let isWorker: boolean = false;
console.log("Is student and not worker? I predict true.");
console.log(isStudent && !isWorker);

console.log("Is student or worker? I predict true.");
console.log(isStudent || isWorker);

// Test whether an item is in an array
let colors: string[] = ['red', 'green', 'blue'];
console.log("Is 'red' in colors? I predict true.");
console.log(colors.indexOf('red'));

// Test whether an item is not in an array
console.log("Is 'yellow' not in colors? I predict true.");
console.log(!colors.indexOf('yellow'));

