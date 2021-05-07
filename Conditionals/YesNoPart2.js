/*

Take your code from the previous exercise and rewrite the conditional so that it uses the ternary if-then-else operator.


let randomNumber = Math.round(Math.random());

if (randomNumber){
    console.log("Yes!")
} else{
    console.log("No.")
}

*/

//condition ? expression1 : expression2


let randomNumber = Math.round(Math.random());
randomNumber ? console.log("Yes!") : console.log("No.")


//alternative 
let randomNumber = Math.round(Math.random());
console.log(randomNumber ? 'Yes!' : 'No.');