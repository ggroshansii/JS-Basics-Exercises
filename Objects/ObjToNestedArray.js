/*

Convert the person object into a nested array nestedPerson, containing the same key-value pairs.


*/

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

// Expected output:
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]

let nestedArr = [];

for (let prop in person){
  let arr = [];
  arr.push(prop);
  arr.push(person[prop])
  nestedArr.push(arr);
}

console.log(nestedArr);


/// OR...


let nestedPerson = Object.entries(person);

console.log(nestedPerson);
// [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]]