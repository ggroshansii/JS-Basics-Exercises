
Find out how we can join two or more strings together.


SOLUTION


Both the String.prototype.concat() method and the + operator concatenate two or more strings, returning a new string.

DISCUSSION


Take a close look at the Syntax section on concat()'s documentation page:


str.concat(string2[, string3, ..., stringN])
Note that str is the calling string, and the method parameters are placed within parentheses. The brackets indicate optional arguments. So, this line of the documentation indicates that we can provide any number of string arguments, but we must provide at least one.

Here is an example:


let firstName = 'Ada';
let lastName = 'Lovelace';

''.concat(firstName, ' ', lastName);
// 'Ada Lovelace'
Under the "Syntax" heading, we also see the return value specified as "a new string containing the combined text of the strings provided." This portion of a method's documentation is extremely useful. It demonstrates the expected syntax and provides important information about the method parameters and return value.

Also note that the documentation says:

It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method.

So a second (and, in fact, preferred) way to concatenate strings, is using +, for example:


let firstName = 'Ada';
let lastName = 'Lovelace';

firstName + ' ' + lastName;
// 'Ada Lovelace'