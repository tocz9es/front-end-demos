function swap (arr, indexA, indexB) {
  [arr[indexA], arr[indexB]] = [arr[indexB], arr[indexA]];
}

const arr = [91, 60, 96, 7, 35, 65, 10, 65, 9, 30, 20, 31, 77, 81, 24];

// Solution 1: Basic
function bubbleSort (arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));

// Solution 2: pos Cache
function bubbleSort2 (arr) {
  let i = arr.length - 1;
  
  while (i > 0) {
    let pos = 0;

    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        pos = j;
        swap(arr, j, j + 1);
      }
    }
    i = pos;
  }
  return arr;
}

console.log(bubbleSort2(arr));

// Solution 3: Two-ways traversal

function bubbleSort3 (arr) {
  let start = 0;
  let end = arr.length - 1;
  
  while (start < end) {
    for (let i = start; i < end; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    end -= 1;
    for (let i = end; i > start; i--) {
      if (arr[i - 1] > arr[i]) {
        swap(arr, i - 1, i);
      }
    }
    start += 1;
  }
  return arr;
}

console.log(bubbleSort3(arr));