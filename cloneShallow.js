// Solution 1

function cloneShallow (source) {
  let target = {};

  for (let key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      target[key] = source[key];
    }
  }
  return target;
}

// Solution 2: Object.assign()

const objA = {
  name: 'Apple',
  age: 3
}

const objB = Object.assign({}, objA);
objA.age = 13;
console.log(b.age) // 3