// Given two arrays:

const arr1 = [11, 25, 44, [52, 44, 23], '52'];
const arr2 = [16, 25, 17, [11, 25, [23, 18]]];

// Find the Duplicate items.

function findDuplicate (arr1, arr2) {
  let map = new Map();
  let res = [];
  let arr = arr1.flat(Infinity).concat(arr2.flat(Infinity));

  arr.forEach(element => {
    map.has(element) ? map.set(element, false) : map.set(element, true);
  });

  for(let [key, val] of map.entries()) {
    if (val) {
      res.push(key);
    }
  }
  return res;
}

findDuplicate(arr1, arr2);