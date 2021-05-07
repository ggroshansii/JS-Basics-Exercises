/*

Write a function that returns the last element of an input array. For example:
last(['Earth', 'Moon', 'Mars']); // 'Mars'

*/


function last(arr){
    return arr.length !== 0 ? arr[arr.length-1] : "Array is Empty"
}
