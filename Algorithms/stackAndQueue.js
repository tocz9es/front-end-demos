// Stack in JavaScript
// Stack: LIFO (Last In First Out)

let arrS = [1, 2, 3];

arrS.push(4);

console.log(arrS); // [1, 2, 3, 4]

arrS.pop();

console.log(arrS); // [1, 2, 3]

// Queue in JavaScript
// Queue: FIFO (First In First Out)

let arrQ = [1, 2, 3];

arrQ.unshift(4);

console.log(arrQ); // [4, 1, 2, 3]

arrQ.shift();

console.log(arrQ); // [1, 2, 3]

// Reverse string

let letters = [];
let string = "world";
let rstring = "";

for (let i = 0; i < string.length; i++) {
  letters.push(string[i]);
}

for (let i = 0; i < string.length; i++) {
  rstring += letters.pop();
}

if (rstring === string) {
  console.log('this is a palindrome.')
} else {
  console.log(rstring);
}