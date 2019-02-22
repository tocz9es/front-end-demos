// 此例仅作存档

var boxNumber = 14;
var arr = [3, 1, 4, 2, 5, 5, 7, 5, 9, 8, 4, 3, 2, 5];
var arrSort = [];
var totalBox = 1;
var arrPut = [];
var t = 0;

console.log('totalBox = ' + totalBox);

function boxCal (arrLen, arr) {
    console.log('Before Sort: ' + arr);
    arrSort = arr.sort();
    console.log('After Sort: ' + arrSort);
    for (var i = 0; i < arrLen - 1; i++) {
    	if (arrSort[arrLen - (i + 1)] <= arrSort[arrLen - (i + 2)]) {
            arrPut.push(arrSort[arrLen - (i + 1)]);
        }
    }
    return arrPut;
}

function boxClear(newArr) {
	if(newArr.length != 1) {
        totalBox++;
    }
    console.log('totalBox = ' + totalBox);
    return totalBox;
}

function boxTotal() {
	while(arrPut.length !== 1) {
		if (t == 0) {
			var firstArr = boxCal(boxNumber, arr);
		    boxClear(firstArr);
		    t = 1;
		} else {
            var midArr = arrPut;
            arrPut = [];
			var otherArr = boxCal(midArr.length, midArr);
            boxClear(midArr);
		}
	}
	return totalBox;
}

boxTotal();