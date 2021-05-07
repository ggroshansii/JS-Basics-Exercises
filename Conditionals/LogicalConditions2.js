/*

Predict the output of the following code:

if (true && false) {
  console.log('Yes!');
} else {
  console.log('No...');
}

SOLUTION
The output will always be 'No...'.

DISCUSSION
The condition provided to our if statement uses the logical and operator &&. Therefore the condition will return a truthy value only if both of its operands are truthy. Since false is not truthy, neither will be our condition.

*/