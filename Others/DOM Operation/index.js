function changeDOM () {
  let getUl = document.getElementsByTagName('ul')[0];
  let getLi = getUl.lastElementChild;
  console.log(getLi);
  var cloneNode = getLi.cloneNode(true);
  getUl.removeChild(getLi);
  document.getElementById('1').append(cloneNode);
}