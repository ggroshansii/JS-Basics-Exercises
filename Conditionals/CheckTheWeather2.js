/*

Take your code from the previous Check the Weather exercise and rewrite it as a switch statement. 

Feel free to add more cases besides 'sunny' and 'rainy'.


if (weather === "sunny"){
    console.log("It's a beatufiul day!");
} else if (weather === "rainy"){
    console.log("Grab your umbrella.")
} else{
    console.log("Let's stay inside.")
}

*/

let weather;

switch(weather){
    case "sunny":
        console.log("It's a beatufiul day!");
        break;
    case "rainy":
        console.log("Grab your umbrella.");
        break;
    default:
        console.log("Let's stay inside.")
}