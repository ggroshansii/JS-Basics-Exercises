
/*

Write a function that checks whether a string is empty or not. For example:

isBlank('mars'); // false
isBlank('  ');   // false
isBlank('');     // true
*/

function isBlank(str){
    if (str){
        return false;
    } else {
        return true;
    }
}
