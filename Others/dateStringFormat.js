function dateStringFormat(source) {
  let year = source.substring(0, 4);
  let month = source.substring(4, 6);
  let day = source.substring(6, 8);
  let hour = source.substring(8, 10);
  let minute = source.substring(10, 12);
  console.log(`${year}年${month}月${day}日 ${hour}:${minute}`);
}

dateStringFormat("201910061715"); // 2019年10月06日 17:15