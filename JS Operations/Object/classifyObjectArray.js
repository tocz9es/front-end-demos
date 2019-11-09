function classifyObjectArray(objectArray, key) {
    let newObj = {};
    objectArray.forEach(function (obj) {
        let array = newObj[obj[key]] || [];
        array.push(obj);
        newObj[obj[key]] = array;
    });
    return newObj;
}

let data = [
    {
        "majorId": 1,
        "collegeId": 1,
        "name": "数据科学与大数据技术"
    },
    {
        "majorId": 2,
        "collegeId": 1,
        "name": "数据科学与大数据技术"
    },
    {
        "majorId": 3,
        "collegeId": 1,
        "name": "数据科学与大数据技术"
    },
    {
        "majorId": 1,
        "collegeId": 2,
        "name": "数据科学与大数据技术"
    },
    {
        "majorId": 2,
        "collegeId": 2,
        "name": "数据科学与大数据技术"
    },
    {
        "majorId": 3,
        "collegeId": 2,
        "name": "数据科学与大数据技术"
    },
    {
        "majorId": 1,
        "collegeId": 3,
        "name": "数据科学与大数据技术"
    },
    {
        "majorId": 2,
        "collegeId": 3,
        "name": "数据科学与大数据技术"
    },
    {
        "majorId": 3,
        "collegeId": 3,
        "name": "数据科学与大数据技术"
    }
]

let resultGroup = classifyObjectArray(data, 'collegeId')
console.log(resultGroup)