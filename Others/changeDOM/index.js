function changeDOM () {
  let getUl = document.getElementsByTagName('ul')[0];
  let getLi = getUl.lastElementChild;
  console.log(getLi);
  let cloneNode = getLi.cloneNode(true);
  getUl.removeChild(getLi);
  document.getElementById('1').after(cloneNode);
}