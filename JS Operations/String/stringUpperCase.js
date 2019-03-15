function stringUpperCase (str) {
  let newArr = str.split(" ").map((value, index) => {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
  })

  return newArr;
}

stringUpperCase("this is a pen");