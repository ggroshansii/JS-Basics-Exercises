/*

Write a function that returns the first element of an input array. For example:

first(['Earth', 'Moon', 'Mars']); // 'Earth'
*/

function first(arr){
    return arr.length !== 0 ? arr[0] : "Array is empty";
}
