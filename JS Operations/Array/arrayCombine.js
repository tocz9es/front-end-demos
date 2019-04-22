// using Array.concat()
// Array a will not be changed

let a = [1, 2, 3, 4, 5], b = [7, 8, 9];

let res = a.concat(b); // [1, 2, 3, 4, 5, 7, 8, 9];

console.log(a); // [1, 2, 3, 4, 5];

// using for and push
// Array a will be changed

for (let i = 0; i < b.length; i++) {
    a.push(b[i]);
}

console.log(a); // [1, 2, 3, 4, 5, 7, 8, 9];

// using Array.prototype.push.apply()
// Array a will be changed

Array.prototype.push.apply(a, b);

console.log(a);

// or

a.push.apply(a, b);

console.log(a);