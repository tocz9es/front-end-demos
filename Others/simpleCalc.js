// Given an array like this:
let arr = ['1', '+', '2', '*', '3', '/', '4'];

// Imagine you're counting this expression, so how to deal it?

// Simple, just using eval()

eval(arr.join('')); // 2.5