/*

Now we are going to outsource the greeting and recipient to functions. Change the function greet from the previous exercise, so that it doesn't take any arguments, and instead calls the functions greeting and recipient defined below.

*/



function greeting(greeting){
  return "Good morning";
}

function recipient(recipient = "world"){
  return "Launch School";
}

function greet() {
  return greeting() + ", " + recipient();
}

console.log(greet())