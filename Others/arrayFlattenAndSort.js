// Known as an array:
let arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

// How to flatten the array, and sort by asc.

// Solution 1: Using ES6
Array.from(new Set(arr.flat(4))).sort((a, b) => { return a - b; }); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// Solution 2: reduce()
function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []).sort((a, b) => a - b).filter (function (value, index, array) { 
    return array.indexOf (value) == index;
  });
}

// Solution 3: toString()
// 3.1
Array.from(new Set (arr.toString().split(',')), val => +val).sort((a, b) => a - b);

// 3.2
[...new Set(arr.toString().split(",").sort((a, b)=>{ return a - b}).map(Number))]

// Solutcion 4: Using recursive
function spreadArr(arr){
	if(arr.some(element=>Array.isArray(element))){
		let newArr = [];
		arr.forEach((element) => {
			if(Array.isArray(element)){
				newArr = newArr.concat(...element)
			}else{
				if(!newArr.includes(element)) newArr.push(element)
			}
		})
		return spreadArr(newArr);
	}
	return arr.sort((a,b)=> a-b);
}

spreadArr(arr);