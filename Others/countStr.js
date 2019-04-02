function sortStr(str) {
  let result = [];
  let tempArr = str.split('').sort();
  tempArr.forEach((item) => { 
    result[item] = (result[item] || 0) + 1; 
  });
  return result;
}

sortStr('adada'); // [a: 3, d: 2]