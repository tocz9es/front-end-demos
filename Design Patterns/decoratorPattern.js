// AOP Decorator

function main() {
  console.log('excute main function');
}

Function.prototype.before = function (fn) {
  var _this = this;
  return function () {
    fn.apply(this, arguments);
    return _this.apply(this, arguments);
  }
}

Function.prototype.after = function (fn) {
  var _this = this;
  return function () {
    let result = _this.apply(this, arguments);
    fn.apply(this, arguments);
    return result;
  }
}

let decoratorPattern = main.before(function () {
  console.log('before main function excute');
}).after(function () {
  console.log('after main funcion excute');
});

decoratorPattern();

// before main function excute
// excute main function
// after main function excute