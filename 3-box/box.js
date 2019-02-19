// 题目描述：

// N个空盒子，第i个盒子是边长为a[i]的立方体。
// 如果一个盒子的边长严格小于另一个盒子，
// 并且大盒子中没有其他小盒子，小盒子也没有放入大盒子中，
// 那么这个小盒子可以放入大盒子。
// 
// 根据条件任意放盒子，求最后能看见的最少盒子数量。

var arrMulti = {};

function boxCal (boxNumber, arr) {
    var result = 0;

    arr.map((a) => {
        if (a in arrMulti) {
            arrMulti[a]++;
        } else {
            arrMulti[a] = 1;
        }
    });

    console.log(arrMulti);

    for(let i in arrMulti) {
        if(arrMulti[i] > result) {
            result = arrMulti[i];
        } else {
            continue;
        }
    }

    console.log(result);

    // var arrSort = arr.sort();

    // arrMulti = arrSort.reduce((prev, item) => {
    //     if(item in prev) {
    //         prev[item]++;
    //     } else {
    //         prev[item] = 1;
    //     }
    //     return prev;
    // }, {});
}

boxCal(14, [3, 1, 4, 2, 5, 5, 7, 5, 9, 8, 4, 3, 2, 5]);

//Sample

// var arr = ['Car', 'Car', 'Truck', 'Boat', 'Truck'];
// var hist = {};

// hist = arr.reduce((prev, item) => {
//     if (item in prev) {
//         prev[item]++
//     } else {
//         prev[item] = 1
//     }
//     return prev;
// }, {});

// console.log(hist);