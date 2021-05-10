/*

Write code that does the reverse, starting from a nested array of pairs and building an object.

*/

let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// Expected output:
// { title: 'Duke', name: 'Nukem', age: 33 }

let obj = {};

for (let i=0; i<nestedArray.length;i++){
  let property = nestedArray[i][0];
  let value = nestedArray[i][1];
  obj[property] = value;
}

console.log(obj)


// **

let person = {};

for (let i = 0; i < nestedArray.length; i++) {
  let pair = nestedArray[i];

  person[pair[0]] = pair[1];
}

console.log(person);
// { title: 'Duke', name: 'Nukem', age: 33 }