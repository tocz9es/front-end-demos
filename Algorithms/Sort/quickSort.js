function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexA], arr[indexB]]
}

const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];

// Solution 1: Basic
function quickSort (arr) {
  const pivot = arr[0];
  const left = [];
  const right = [];

  if (arr.length < 2) return arr;

  for (let i = 1, len = arr.length; i < len; i++) {
    arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort(arr));

// Solution 2: Functional Programming

function quickSort2 (arr) {
  const pivot = arr.shift();
  const left = [];
  const right = [];

  if (arr.length < 2) return arr;

  arr.forEach(element => {
    element < pivot ? left.push(element) : right(element);
  });

  return quickSort2(left).concat([pivot], quickSort2(right));
}

console.log(quickSort2(arr));

// more solution being added...