function countFloatDecimal(source) {
  let reg = source.toExponential().match(/\d(?:\.(\d*))?e([+-]\d+)/);
  if (Math.floor(source) === source) {
    console.log(0);
  } else {
    let realNumber = source.toFixed(Math.max(0, (reg[1] || '').length - reg[2]));
    let result = realNumber.toString().split(".")[1].length || 0;
    console.log(result);
  }
}

countFloatDecimal(5.43e-7); // 9
countFloatDecimal(10); // 0
countFloatDecimal(0.111); // 3