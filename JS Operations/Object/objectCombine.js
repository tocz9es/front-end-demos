// using $.extend()

let obj1 = {'a': 1}, obj2 = {'b': 2};

let res = $.extend(obj1, obj2); // obj1 will be changed

let res = $.extend({}, obj1, obj2); // or you can use

console.log(obj1);

// using for...in and assign value

for (let key in obj2) {
    if (obj2.hasOwnProperty(key) === true) {
        obj1[key] = obj2[key];
    }
}

console.log(obj1);

// using Object.assign()

let res = Object.assign(obj1, obj2); // obj1 will be changed

let res = Object.assign({}, obj1, obj2); // or you can use
console.log(res);