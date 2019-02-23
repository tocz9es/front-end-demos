function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];

function merge (left, right) {
  const result = [];

  while (left.length > 0 && right.length > 0) {
    result.push(left[0] <= right[0] ? left.shift() : right.shift());
  }
  console.log(result.concat(left, right));
  return result.concat(left, right);
}

// Solution 1: Basic
function mergeSort (arr) {
  const len = arr.length;

  if (len < 2) return arr;

  const mid = Math.floor(len / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

console.log(mergeSort(arr));

// Solution 2: using splice instead of slice
function mergeSort2 (arr) {
  const len = arr.length;

  if (len < 2) return arr;

  const mid = Math.floor(len / 2);
  const left = arr.splice(0, mid);
  const right = arr;

  return merge(mergeSort2(left), mergeSort2(right));
}

console.log(mergeSort2(arr));
