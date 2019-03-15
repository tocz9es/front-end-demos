let myMap = new Map();

var keyObj = {},
    keyFunc = function () {},
    keyString = "just a string";

myMap.set(keyString, "a string");
myMap.set(keyObj, "an object");
myMap.set(keyFunc, "a function");

console.log(myMap.size); // 3

myMap.get(keyString); // "a string"
myMap.get(keyObj); // "an object"
myMap.get(keyFunc); // "a function"

myMap.get("just a string"); // "a string"
myMap.get({}); // undefined
myMap.get(function() {}) // undefined
