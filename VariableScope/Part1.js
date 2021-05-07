/*

What will the following code log to the console and why? Don't run it until you have tried to answer.

console.log(greeting);
var greeting = 'Hello world!';



SOLUTION
The code logs undefined.

DISCUSSION
All variables in JavaScript declared with var are hoisted, meaning they are virtually moved to the beginning of the scope. This means that our code snippet above behaves like the following one:


var greeting;

console.log(greeting);

greeting = 'Hello world!'
*/