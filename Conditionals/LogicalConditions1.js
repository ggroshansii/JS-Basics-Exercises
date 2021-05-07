/*

Predict the output of the following code:

if (false || true) {
  console.log('Yes!');
} else {
  console.log('No...');
}

*/

/*
SOLUTION

The output will always be 'Yes!'.

DISCUSSION
The condition provided to our if statement uses the logical or operator ||. Therefore the condition will evaluate to a truthy value if either one of its operands is truthy. Since true is truthy, the condition will always be truthy as well.
*/